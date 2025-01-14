---
title: URL 工具
nav:
  title: URL 工具
  order: 4
---

# URL 工具

提供一系列处理 URL 的实用工具函数。

## parseUrlParams

解析 URL 参数为对象。

### 使用示例

```typescript
import { parseUrlParams } from '@d-toolkit/utils';

const url = 'https://example.com?name=john&age=25';
parseUrlParams(url);
// => { name: 'john', age: '25' }
```

## stringifyUrlParams

将对象转换为 URL 参数字符串。

### 使用示例

```typescript
import { stringifyUrlParams } from '@d-toolkit/utils';

const params = { name: 'john', age: 25 };
stringifyUrlParams(params);
// => 'name=john&age=25'
```

## addUrlParams

向 URL 添加参数。

### 使用示例

```typescript
import { addUrlParams } from '@d-toolkit/utils';

const url = 'https://example.com';
const params = { name: 'john', age: 25 };
addUrlParams(url, params);
// => 'https://example.com?name=john&age=25'

// 已有参数的 URL
const urlWithParams = 'https://example.com?type=user';
addUrlParams(urlWithParams, params);
// => 'https://example.com?type=user&name=john&age=25'
```

## removeUrlParams

从 URL 中移除指定参数。

### 使用示例

```typescript
import { removeUrlParams } from '@d-toolkit/utils';

const url = 'https://example.com?name=john&age=25&type=user';
removeUrlParams(url, ['age', 'type']);
// => 'https://example.com?name=john'
```

## getDomain

获取 URL 的域名。

### 使用示例

```typescript
import { getDomain } from '@d-toolkit/utils';

getDomain('https://www.example.com/path');
// => 'www.example.com'
```

## isAbsoluteUrl

判断是否是绝对 URL。

### 使用示例

```typescript
import { isAbsoluteUrl } from '@d-toolkit/utils';

isAbsoluteUrl('https://example.com'); // => true
isAbsoluteUrl('/path/to/page'); // => false
```

## encodeUrlComponent

安全地编码 URL 组件，包括特殊字符。

### 使用示例

```typescript
import { encodeUrlComponent } from '@d-toolkit/utils';

encodeUrlComponent('hello world!'); // => 'hello%20world%21'
encodeUrlComponent('(test)'); // => '%28test%29'
```

## decodeUrlComponent

安全地解码 URL 组件，处理异常情况。

### 使用示例

```typescript
import { decodeUrlComponent } from '@d-toolkit/utils';

decodeUrlComponent('hello%20world%21'); // => 'hello world!'
decodeUrlComponent('invalid%'); // => 'invalid%' (返回原字符串)
```

## joinPaths

拼接 URL 路径，自动处理斜杠。

### 使用示例

```typescript
import { joinPaths } from '@d-toolkit/utils';

joinPaths('api', '/users/', '/posts/'); // => 'api/users/posts'
joinPaths('https://example.com', 'api', 'users');
// => 'https://example.com/api/users'
```

## getUrlExtension

获取 URL 的文件扩展名。

### 使用示例

```typescript
import { getUrlExtension } from '@d-toolkit/utils';

getUrlExtension('https://example.com/image.jpg'); // => 'jpg'
getUrlExtension('https://example.com/path/'); // => ''
```

## isValidUrl

验证 URL 格式是否有效，支持协议验证。

### 使用示例

```typescript
import { isValidUrl } from '@d-toolkit/utils';

isValidUrl('https://example.com'); // => true
isValidUrl('not-a-url'); // => false

// 验证特定协议
isValidUrl('ftp://example.com', { 
  protocols: ['https', 'http'] 
}); // => false

// 要求必须有协议
isValidUrl('example.com', { 
  requireProtocol: true 
}); // => false
```

## normalizeUrl

规范化 URL，提供多个选项来控制输出格式。

### 使用示例

```typescript
import { normalizeUrl } from '@d-toolkit/utils';

// 移除末尾斜杠
normalizeUrl('https://example.com/', { 
  removeTrailingSlash: true 
}); // => 'https://example.com'

// 强制使用 HTTPS
normalizeUrl('http://example.com', { 
  forceHttps: true 
}); // => 'https://example.com'

// 移除查询参数和哈希
normalizeUrl('https://example.com/?q=test#hash', {
  removeQueryParams: true,
  removeHash: true
}); // => 'https://example.com'
``` 