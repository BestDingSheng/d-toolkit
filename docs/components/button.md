---
title: ButtonExt 按钮
nav:
  title: 组件
  order: 1
---

# ButtonExt 按钮

扩展的按钮组件，基于 antd Button 组件，增加了自动加载状态功能。

## 基础用法

```tsx
import React from 'react';
import { ButtonExt } from '@d-toolkit/components';

export default () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <div>
      <ButtonExt onClick={() => alert('clicked')}>普通按钮</ButtonExt>
      <ButtonExt autoLoading onClick={handleClick} style={{ marginLeft: 8 }}>
        自动加载按钮
      </ButtonExt>
    </div>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoLoading | 点击后是否自动进入加载状态 | `boolean` | `false` |
| loadingDuration | 加载状态持续时间(ms) | `number` | `1000` |
| onClick | 点击事件 | `(e: MouseEvent) => void \| Promise<void>` | - |

除了上述属性外，组件还支持 antd Button 组件的所有属性（除了 loading）。 