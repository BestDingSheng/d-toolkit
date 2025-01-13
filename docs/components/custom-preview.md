---
title: CustomPreview 自定义预览
nav:
  title: 组件
  order: 3
---

# CustomPreview 图片预览

使用 Canvas 开发的自定义预览组件

## 基础用法

```tsx
import React from 'react';
import { CustomPreview } from '@d-toolkit/components';

export default () => {
  const images = [
    {
      id: '1',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      thumbnail:
        'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    },
    {
      id: "3",
      url: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      thumbnail:
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    },
    {
      id: "2",
      url: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
      thumbnail:
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    },
  ];

  return (
    <div style={{height: '800px'}}>
      <CustomPreview
        images={images}
        onIndexChange={console.log}
      />
    </div>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| images | 图片列表 | `ImageItem[]` | `[]` |
| initialIndex | 初始显示的图片索引 | `number` | `0` |
| onIndexChange | 图片切换时的回调 | `(index: number) => void` | - |
| onOcrRequest | OCR 识别请求回调 | `(request: OcrRequest) => void` | - |
| rectPosition | 矩形框位置 | `number[]` | - |
| onImageChange | 图片变化时的回调 | `() => void` | - |
| pagination | 自定义分页组件 | `ReactElement` | - |

### ImageItem

| 参数 | 说明 | 类型 | 必填 |
| --- | --- | --- | --- |
| id | 图片唯一标识 | `string` | 是 |
| url | 图片 URL | `string` | 是 |
| thumbnail | 缩略图 URL | `string` | 是 |

### OcrRequest

| 参数 | 说明 | 类型 | 必填 |
| --- | --- | --- | --- |
| imageData | 图片数据 | `string` | 是 |
| rectangle | 识别区域 | `Rectangle` | 是 |

### Rectangle

| 参数 | 说明 | 类型 | 必填 |
| --- | --- | --- | --- |
| x | 矩形左上角 x 坐标 | `number` | 是 |
| y | 矩形左上角 y 坐标 | `number` | 是 |
| width | 矩形宽度 | `number` | 是 |
| height | 矩形高度 | `number` | 是 |
