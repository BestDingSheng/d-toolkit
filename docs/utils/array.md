---
title: 数组工具
nav:
  title: 数组工具
  order: 2
---

# 数组工具

## unique

数组去重，返回一个新数组，其中不包含重复的元素。

### 使用示例

```typescript
import { unique } from '@deson/utils';

unique([1, 1, 2, 2, 3]); // => [1, 2, 3]
unique(['a', 'b', 'a', 'c']); // => ['a', 'b', 'c']
```

## flatten

数组扁平化，将多维数组转换为一维数组。

### 使用示例

```typescript
import { flatten } from '@deson/utils';

flatten([1, [2, 3], [4, [5, 6]]]); // => [1, 2, 3, 4, 5, 6]
flatten(['a', ['b', 'c'], 'd']); // => ['a', 'b', 'c', 'd']
```

## groupBy

按照指定的键对数组进行分组。

### 使用示例

```typescript
import { groupBy } from '@deson/utils';

const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'admin' },
];

groupBy(users, 'role');
// => {
//   admin: [{ id: 1, role: 'admin' }, { id: 3, role: 'admin' }],
//   user: [{ id: 2, role: 'user' }]
// } 