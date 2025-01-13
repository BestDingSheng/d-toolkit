"use client";

import { useEffect, useRef, useState, useCallback, ReactElement } from "react";
import { Button, Flex } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  ColumnHeightOutlined,
  ColumnWidthOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import { ImagePreviewProps } from "./interface";
import styled from "styled-components";
import {
  PreviewContainer,
  MainImageContainer,
  ThumbnailsContainer,
  Thumbnail,
  ToolbarContainer,
} from "./style";

// 计算图片在容器中的位置和缩放比例
// 参数说明:
// containerWidth, containerHeight: 容器的宽度和高度
// imageWidth, imageHeight: 图片的原始宽度和高度
// rotation: 图片的旋转角度
const calculateImagePosition = (
  containerWidth: number,
  containerHeight: number,
  imageWidth: number,
  imageHeight: number,
  rotation: number
) => {
  const isRotated = rotation % 180 !== 0;
  const effectiveImageWidth = isRotated ? imageHeight : imageWidth;
  const effectiveImageHeight = isRotated ? imageWidth : imageHeight;
  const newScale = Math.min(
    containerWidth / effectiveImageWidth,
    containerHeight / effectiveImageHeight
  );
  const widthScale =
    containerWidth / effectiveImageWidth <
    containerHeight / effectiveImageHeight;
  const translateX = widthScale
    ? 0
    : (containerWidth - effectiveImageWidth * newScale) * 0.5;
  const translateY = widthScale
    ? (containerHeight - effectiveImageHeight * newScale) * 0.5
    : 0;
  return {
    scale: newScale,
    x: translateX,
    y: translateY,
    effectiveImageWidth,
    effectiveImageHeight,
  };
};

interface Options {
  width: number;
  height: number;
  imageWidth: number;
  imageHeight: number;
  isHeight?: boolean;
}

const realSize = (options: Options) => {
  const { width, height, imageWidth, imageHeight } = options;
  const translateX = (width - Number(imageWidth)) * 0.5;
  const translateY = (height - Number(imageHeight)) * 0.5;
  return {
    newScale: 1,
    x: translateX,
    y: translateY,
  };
};

// 横向填充 或者 纵向填充
const onAdapt = (options: Options) => {
  const { width, height, imageWidth, imageHeight, isHeight } = options;

  const newScale = !isHeight ? width / imageWidth : height / imageHeight;
  const widthScale = width / imageWidth < height / imageHeight;
  const translateX = widthScale ? 0 : (width - imageWidth * newScale) * 0.5;
  const translateY = widthScale ? (height - imageHeight * newScale) * 0.5 : 0;
  return {
    newScale,
    x: translateX,
    y: translateY,
  };
};

// 计算图片在容器中居中时的位置
// 参数说明:
// containerWidth, containerHeight: 容器的宽度和高度
// imageWidth, imageHeight: 图片的原始宽度和高度
// scale: 图片的缩放比例
// rotation: 图片的旋转角度
const calculateCenteredPosition = (
  containerWidth: number,
  containerHeight: number,
  imageWidth: number,
  imageHeight: number,
  scale: number,
  rotation: number
) => {
  const isRotated = rotation % 180 !== 0;
  const scaledWidth = isRotated ? imageHeight * scale : imageWidth * scale;
  const scaledHeight = isRotated ? imageWidth * scale : imageHeight * scale;
  return {
    x: (containerWidth - scaledWidth) / 2,
    y: (containerHeight - scaledHeight) / 2,
  };
};

const CanvasWrapper = styled.div<{ isDragging: boolean }>`
  position: absolute;
  transform-origin: center center;
  cursor: ${(props) => (props.isDragging ? "grabbing" : "grab")};
`;

const OverlayCanvas = styled.canvas<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  background: rgba(100, 100, 100, 0.5);
`;

const RectCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

// 主要的图片预览组件
// props:
// images: 图片数组
// initialIndex: 初始显示的图片索引
// onIndexChange: 图片索引变化时的回调函数
// onOcrRequest: OCR请求的回调函数
// rectPosition: 矩形框的位置
// onImageChange: 图片变化时的回调函数
export default function ImagePreview({
  images,
  initialIndex = 0,
  onIndexChange,
  onOcrRequest,
  rectPosition,
  onImageChange,
  pagination,
}: ImagePreviewProps) {
  console.log("rectPosition:", rectPosition);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [rotation, setRotationState] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawStart, setDrawStart] = useState({ x: 0, y: 0 });
  const [drawEnd, setDrawEnd] = useState({ x: 0, y: 0 });
  const [isOptionZPressed, setIsOptionZPressed] = useState(false);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const rectCanvasRef = useRef<HTMLCanvasElement>(null);
  const [imageInfo, setImageInfo] = useState({
    width: 0,
    height: 0,
  });

  const currentImage = images[currentIndex];

  // 添加 ref 用于存储所有缩略图的引用
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailsContainerRef = useRef<HTMLDivElement | null>(null);

  // 捕获并显示整个图像
  // 这个函数在用户按下Option+X (Mac) 或 Alt+X (Windows) 时被调用
  // 它会创建一个新的canvas，将当前图像旋转到正确的角度，然后将结果显示在页面上
  const captureEntireImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 创建一个新的canvas来绘制旋转后的图像
    const tempCanvas = document.createElement("canvas");
    const isRotated = rotation % 180 !== 0;

    // 根据旋转角度设置临时画布的尺寸
    if (isRotated) {
      tempCanvas.width = canvas.height;
      tempCanvas.height = canvas.width;
    } else {
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
    }

    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    // 将原始图像绘制到临时canvas上，并应用旋转
    tempCtx.save();
    tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
    tempCtx.rotate((rotation * Math.PI) / 180);
    tempCtx.translate(-canvas.width / 2, -canvas.height / 2);
    tempCtx.drawImage(canvas, 0, 0);
    tempCtx.restore();

    // 将旋转后的图像转换为base64
    const base64Image = tempCanvas.toDataURL("image/png");

    // 创建一个新的img元素并添加到body
    const img = document.createElement("img");
    img.src = base64Image;
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    img.style.display = "block";
    img.style.marginTop = "20px";
    document.body.appendChild(img);

    console.log("Entire image captured and displayed in body");
  }, [rotation]);

  // 加载并显示当前图片
  useEffect(() => {
    if (!currentImage) return;

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = currentImage.url;
    image.onload = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 重置旋转角度（无动画）
      setRotation(0);

      // Set canvas size to image's original size
      canvas.width = image.width;
      canvas.height = image.height;

      // Calculate image position and scale
      const {
        scale: newScale,
        effectiveImageWidth,
        effectiveImageHeight,
      } = calculateImagePosition(
        container.clientWidth,
        container.clientHeight,
        image.width,
        image.height,
        rotation
      );

      const newPosition = calculateCenteredPosition(
        container.clientWidth,
        container.clientHeight,
        image.width,
        image.height,
        newScale,
        rotation
      );

      // Update state
      setScale(newScale);
      setPosition(newPosition);
      setImageInfo({
        width: effectiveImageWidth,
        height: effectiveImageHeight,
      });

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image
      ctx.drawImage(image, 0, 0);
    };
  }, [currentImage]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const {
        scale: newScale,
        x,
        y,
      } = calculateImagePosition(
        container.clientWidth,
        container.clientHeight,
        canvas.width,
        canvas.height,
        rotation
      );

      setScale(newScale);
      setPosition({ x, y });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [rotation]);

  // 处理鼠标按下事件,开始拖动图片
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    onIndexChange?.(newIndex);
    // setRotation(0)
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, images.length - 1);
    setCurrentIndex(newIndex);
    onIndexChange?.(newIndex);
    // setRotation(0)
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    onIndexChange?.(index);

    // 滚动逻辑
    const thumbnail = thumbnailRefs.current[index];
    const container = thumbnailsContainerRef.current;

    if (thumbnail && container) {
      // 获取容器和缩略图的位置信息
      const containerRect = container.getBoundingClientRect();
      const thumbnailRect = thumbnail.getBoundingClientRect();

      // 计算目标滚动位置（使缩略图居中）
      const scrollTarget =
        thumbnail.offsetLeft -
        containerRect.width / 2 +
        thumbnailRect.width / 2;

      // 使用平滑滚动
      container.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // 检查是否同时按下了option（macOS）或alt（Windows）和z键
      if ((event.metaKey || event.altKey) && event.keyCode === 90) {
        event.preventDefault(); // 阻止默认行为
        setIsOptionZPressed(true);
      }
      // 新增：检查是否同时按下了option（macOS）或alt（Windows）和x键
      if ((event.metaKey || event.altKey) && event.keyCode === 88) {
        event.preventDefault();
        captureEntireImage();
      }
    },
    [captureEntireImage]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // 处理覆盖层鼠标按下事件,开始绘制选择框
  const handleOverlayMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      setIsDrawing(true);
      const canvas = overlayCanvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const startPoint = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setDrawStart(startPoint);
      setDrawEnd(startPoint);
    },
    []
  );

  const handleOverlayMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing) return;
      const canvas = overlayCanvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const currentPoint = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setDrawEnd(currentPoint);

      // 在这里绘制矩形
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.strokeRect(
          Math.min(drawStart.x, currentPoint.x),
          Math.min(drawStart.y, currentPoint.y),
          Math.abs(currentPoint.x - drawStart.x),
          Math.abs(currentPoint.y - drawStart.y)
        );
      }
    },
    [isDrawing, drawStart]
  );

  // 处理覆盖层鼠标松开事件,完成选择框绘制并触发OCR请求
  const handleOverlayMouseUp = useCallback(() => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = overlayCanvasRef.current;
    const mainCanvas = canvasRef.current;
    if (!canvas || !mainCanvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 清除绘制的矩形
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 计算用户选择的矩形区域
    const x = Math.min(drawStart.x, drawEnd.x);
    const y = Math.min(drawStart.y, drawEnd.y);
    const width = Math.abs(drawEnd.x - drawStart.x);
    const height = Math.abs(drawEnd.y - drawStart.y);

    // 创建一个临时画布来存储旋转后的图像
    const tempCanvas = document.createElement("canvas");

    // 根据旋转角度调整临时画布的尺寸
    const isRotated = rotation % 180 !== 0;
    tempCanvas.width = isRotated ? mainCanvas.height : mainCanvas.width;
    tempCanvas.height = isRotated ? mainCanvas.width : mainCanvas.height;

    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    // 将主画布的内容复制到临时画布，并应用旋转
    tempCtx.save();
    tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
    tempCtx.rotate((rotation * Math.PI) / 180);
    tempCtx.translate(-mainCanvas.width / 2, -mainCanvas.height / 2);
    tempCtx.drawImage(mainCanvas, 0, 0);
    tempCtx.restore();

    // 计算旋转后的矩形位置和尺寸
    // 注意：这里假设用户交互坐标系与原始图像一致，可能需要根据实际情况调整
    const rotatedX = x / scale;
    const rotatedY = y / scale;
    const rotatedWidth = width / scale;
    const rotatedHeight = height / scale;

    // 从旋转后的图像中提取矩形区域
    let imageData;
    try {
      imageData = tempCtx.getImageData(
        rotatedX,
        rotatedY,
        rotatedWidth,
        rotatedHeight
      );
    } catch (error) {
      console.error("Failed to get image data:", error);
      return;
    }
    if (!imageData) return;

    // 创建另一个临时画布来存储提取的图像数据
    const extractedCanvas = document.createElement("canvas");
    extractedCanvas.width = rotatedWidth;
    extractedCanvas.height = rotatedHeight;
    const extractedCtx = extractedCanvas.getContext("2d");
    if (!extractedCtx) return;
    extractedCtx.putImageData(imageData, 0, 0);

    // 将提取的图像数据转换为base64格式并触发OCR请求
    extractedCanvas.toBlob((blob) => {
      if (!blob) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;

        // 创建一个新的img元素并添加到body中（用于调试）
        var img = document.createElement("img");
        img.src = base64data;
        img.alt = "Base64 Image";
        document.body.appendChild(img);

        // 调用OCR请求函数
        if (onOcrRequest) {
          onOcrRequest({
            imageData: base64data,
            rectangle: {
              x: rotatedX,
              y: rotatedY,
              width: rotatedWidth,
              height: rotatedHeight,
            },
          });
        }

        // 隐藏覆盖的canvas
        setIsOptionZPressed(false);
      };
      reader.readAsDataURL(blob);
    });
  }, [isDrawing, drawStart, drawEnd, scale, rotation, onOcrRequest]);

  useEffect(() => {
    console.log("isOptionZPressed:", isOptionZPressed);
    const canvas = overlayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置画布尺寸
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [isOptionZPressed]);

  useEffect(() => {
    const canvas = rectCanvasRef.current;
    const mainCanvas = canvasRef.current;
    if (!canvas || !mainCanvas || !rectPosition) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置画布尺寸为主画布的尺寸
    canvas.width = mainCanvas.width;
    canvas.height = mainCanvas.height;

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制矩形
    const [x, y, width, height] = rectPosition;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);

    console.log("Rect drawn:", x, y, width, height);
  }, [rectPosition, scale, position]);

  // 设置图片旋转角度,并重新计算图片位置和缩放比例
  // 这个函数在旋转图片时被调用，它会更新旋转角度并重新计算图片的位置和缩放比例
  const setRotation = (
    newRotation: number | ((prevRotation: number) => number)
  ) => {
    setRotationState((prevRotation) => {
      const nextRotation =
        typeof newRotation === "function"
          ? newRotation(prevRotation)
          : newRotation;
      const finalRotation = ((nextRotation % 360) + 360) % 360;

      // 在这里直接计算新的位置和比例
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (canvas && container) {
        const {
          scale: newScale,
          effectiveImageWidth,
          effectiveImageHeight,
        } = calculateImagePosition(
          container.clientWidth,
          container.clientHeight,
          canvas.width,
          canvas.height,
          finalRotation
        );
        const newPosition = calculateCenteredPosition(
          container.clientWidth,
          container.clientHeight,
          canvas.width,
          canvas.height,
          newScale,
          finalRotation
        );

        // 更新其他状态
        setScale(newScale);
        setPosition(newPosition);
        setImageInfo({
          width: effectiveImageWidth,
          height: effectiveImageHeight,
        });
      }

      return finalRotation;
    });
  };

  useEffect(() => {
    if (onImageChange) {
      const result = onImageChange(currentIndex);
      if (result instanceof Promise) {
        result.catch((error: Error) => {
          console.error("Error calling onImageChange:", error);
        });
      }
    }
  }, [currentIndex, onImageChange]);

  const isHorizontal = rotation === 0 || rotation === 180;
  const overlayCanvasWidth = isHorizontal
    ? canvasRef.current?.width
    : canvasRef.current?.height;
  const overlayCanvasHeight = isHorizontal
    ? canvasRef.current?.height
    : canvasRef.current?.width;

  // 渲染图片预览组件,包括主图片显示区域、缩略图列表和工具栏
  return (
    <PreviewContainer>
      <MainImageContainer
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          style={{
            position: "relative",
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "0% 0% 0px",
            touchAction: "pan-y",
            width: `${imageInfo.width}px`,
            height: `${imageInfo.height}px`,
          }}
        >
          <CanvasWrapper
            isDragging={isDragging}
            onMouseDown={handleMouseDown}
            style={{
              transform: `translate(${
                rotation === 0 || rotation === 180
                  ? 0
                  : (imageInfo.width - imageInfo.height) / 2
              }px, ${
                rotation === 0 || rotation === 180
                  ? 0
                  : (imageInfo.height - imageInfo.width) / 2
              }px) rotate(${rotation}deg)`,
              touchAction: "pan-y",
              width: `${
                rotation === 0 || rotation === 180
                  ? imageInfo.width
                  : imageInfo.height
              }px`,
              height: `${
                rotation === 0 || rotation === 180
                  ? imageInfo.height
                  : imageInfo.width
              }px`,
            }}
          >
            <canvas ref={canvasRef} />
            <RectCanvas
              ref={rectCanvasRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            />
          </CanvasWrapper>
        </div>
        <OverlayCanvas
          ref={overlayCanvasRef}
          isVisible={isOptionZPressed}
          onMouseDown={handleOverlayMouseDown}
          onMouseMove={handleOverlayMouseMove}
          onMouseUp={handleOverlayMouseUp}
          style={{
            width: overlayCanvasWidth ? `${overlayCanvasWidth * scale}px` : '0px',
            height: overlayCanvasHeight ? `${overlayCanvasHeight * scale}px` : '0px',
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </MainImageContainer>

      <ThumbnailsContainer ref={thumbnailsContainerRef}>
        {images.map((image, index) => (
          <Thumbnail
            key={image.id}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            active={index === currentIndex}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.thumbnail} alt="" />
          </Thumbnail>
        ))}
      </ThumbnailsContainer>

      {/* <Flex>
        
      </Flex> */}

      <ToolbarContainer>
        {/* <div> */}

        <Button
          icon={<LeftOutlined />}
          disabled={currentIndex === 0 || isOptionZPressed}
          onClick={handlePrevious}
        />
        <Button
          icon={<RightOutlined />}
          disabled={currentIndex === images.length - 1 || isOptionZPressed}
          onClick={handleNext}
        />
        <Button
          icon={<RotateLeftOutlined />}
          disabled={isOptionZPressed}
          onClick={() => setRotation((r) => r - 90)}
        />
        <Button
          icon={<RotateRightOutlined />}
          disabled={isOptionZPressed}
          onClick={() => setRotation((r) => r + 90)}
        />
        <Button
          icon={<ZoomOutOutlined />}
          disabled={isOptionZPressed}
          onClick={() => {
            const newScale = Math.max(scale - 0.1, 0.1);
            const container = containerRef.current;
            const canvas = canvasRef.current;
            if (container && canvas) {
              const newPosition = calculateCenteredPosition(
                container.clientWidth,
                container.clientHeight,
                canvas.width,
                canvas.height,
                newScale,
                rotation
              );
              setScale(newScale);
              setPosition(newPosition);
            }
          }}
        />
        <Button
          icon={<ZoomInOutlined />}
          disabled={isOptionZPressed}
          onClick={() => {
            const newScale = scale + 0.1;
            const container = containerRef.current;
            const canvas = canvasRef.current;
            if (container && canvas) {
              const newPosition = calculateCenteredPosition(
                container.clientWidth,
                container.clientHeight,
                canvas.width,
                canvas.height,
                newScale,
                rotation
              );
              setScale(newScale);
              setPosition(newPosition);
            }
          }}
        />
        {/* 1:1 全屏 */}

        <Button
          icon={<FullscreenOutlined />}
          disabled={isOptionZPressed}
          onClick={() => {
            const container = containerRef.current;
            const canvas = canvasRef.current;
            if (container && canvas) {
              const obj = {
                width: container.clientWidth,
                height: container.clientHeight,
                imageWidth: canvas.width,
                imageHeight: canvas.height,
                isHeight: false,
              };
              const { newScale, ...newPosition } = realSize(obj);
              setScale(newScale);
              setPosition(newPosition);
            }
          }}
        />

        {/* 横向填充  */}
        <Button
          icon={<ColumnWidthOutlined />}
          disabled={isOptionZPressed}
          onClick={() => {
            const container = containerRef.current;
            const canvas = canvasRef.current;
            if (container && canvas) {
              const obj = {
                width: container.clientWidth,
                height: container.clientHeight,
                imageWidth: canvas.width,
                imageHeight: canvas.height,
                isHeight: false,
              };
              const { newScale, ...newPosition } = onAdapt(obj);
              setScale(newScale);
              setPosition(newPosition);
            }
          }}
        />
        {/* 纵向填充 */}
        <Button
          icon={<ColumnHeightOutlined />}
          disabled={isOptionZPressed}
          onClick={() => {
            const container = containerRef.current;
            const canvas = canvasRef.current;
            if (container && canvas) {
              const obj = {
                width: container.clientWidth,
                height: container.clientHeight,
                imageWidth: canvas.width,
                imageHeight: canvas.height,
                isHeight: true,
              };
              const { newScale, ...newPosition } = onAdapt(obj);
              setScale(newScale);
              setPosition(newPosition);
            }
          }}
        />

        {pagination}
      </ToolbarContainer>
    </PreviewContainer>
  );
}
