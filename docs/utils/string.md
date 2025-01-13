---
title: 字符串工具
nav:
  title: 字符串工具
  order: 1
---

# 字符串工具

## capitalize

将字符串的首字母转换为大写。

### 使用示例

```typescript
import { capitalize, camelToKebab, kebabToCamel } from '@d-toolkit/utils';

capitalize('hello'); // => 'Hello'
capitalize('world'); // => 'World'
```

## camelToKebab

将驼峰命名转换为短横线命名。

### 使用示例

```typescript
import { capitalize, camelToKebab, kebabToCamel } from '@d-toolkit/utils';

camelToKebab('helloWorld'); // => 'hello-world'
camelToKebab('backgroundColor'); // => 'background-color'
```

## kebabToCamel

将短横线命名转换为驼峰命名。

### 使用示例

```typescript
import { capitalize, camelToKebab, kebabToCamel } from '@d-toolkit/utils';

kebabToCamel('hello-world'); // => 'helloWorld'
kebabToCamel('background-color'); // => 'backgroundColor'
``` 