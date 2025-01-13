---
title: SelectExt 选择器
nav:
  title: 组件
  order: 2
---

# SelectExt 选择器

扩展的选择器组件，基于 antd Select 组件，默认开启搜索功能。

## 基础用法

```tsx
import React from 'react';
import { SelectExt } from '@deson/components';

export default () => {
  const options = [
    { value: 'apple', label: '苹果' },
    { value: 'banana', label: '香蕉' },
    { value: 'orange', label: '橙子' },
  ];

  return (
    <div>
      <SelectExt
        style={{ width: 200 }}
        options={options}
        placeholder="请选择水果"
      />
    </div>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | `boolean` | `true` |
| autoFocus | 是否默认聚焦 | `boolean` | `false` |

除了上述属性外，组件还支持 antd Select 组件的所有属性（showSearch 已默认开启）。 