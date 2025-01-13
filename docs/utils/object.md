---
title: 对象工具
nav:
  title: 对象工具
  order: 3
---

# 对象工具

## deepClone

深拷贝一个对象，返回一个全新的对象，与原对象没有引用关系。

### 使用示例

```typescript
import { deepClone } from '@deson/utils';

const obj = {
  a: 1,
  b: { c: 2 },
  d: [1, 2, { e: 3 }]
};

const cloned = deepClone(obj);
// cloned 是一个全新的对象，修改 cloned 不会影响原对象
```

## flattenObject

将嵌套的对象扁平化，使用点号连接键名。

### 使用示例

```typescript
import { flattenObject } from '@deson/utils';

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

flattenObject(obj);
// => {
//   'a': 1,
//   'b.c': 2,
//   'b.d.e': 3
// } 