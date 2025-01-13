import { ReactElement } from "react";

export interface ImageItem {
    id: string;
    url: string;
    thumbnail: string;
  }
  
  export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  
  export interface OcrRequest {
    imageData: string;
    rectangle: Rectangle;
  }
  
  export interface ImagePreviewProps {
    images: ImageItem[];
    initialIndex?: number;
    onIndexChange?: (index: number) => void;
    onOcrRequest?: (request: OcrRequest) => void;
    rectPosition?: Array<number>
    onImageChange?: (index: number) => void | Promise<void>
    pagination?: ReactElement
  }
  
  