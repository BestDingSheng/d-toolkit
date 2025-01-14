/**
 * URL 相关工具函数
 */

/**
 * 解析 URL 参数为对象
 */
export const parseUrlParams = (url: string): Record<string, string> => {
  const params: Record<string, string> = {};
  const searchParams = new URL(url).searchParams;
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

/**
 * 将对象转换为 URL 参数字符串
 */
export const stringifyUrlParams = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });
  return searchParams.toString();
};

/**
 * 向 URL 添加参数
 */
export const addUrlParams = (url: string, params: Record<string, any>): string => {
  const urlObj = new URL(url);
  const newParams = stringifyUrlParams(params);
  const separator = urlObj.search ? '&' : '?';
  return `${urlObj.origin}${urlObj.pathname}${urlObj.search}${newParams ? `${separator}${newParams}` : ''}${urlObj.hash}`;
};

/**
 * 从 URL 中移除指定参数
 */
export const removeUrlParams = (url: string, paramsToRemove: string[]): string => {
  const urlObj = new URL(url);
  paramsToRemove.forEach(param => {
    urlObj.searchParams.delete(param);
  });
  return urlObj.toString();
};

/**
 * 获取 URL 的域名
 */
export const getDomain = (url: string): string => {
  return new URL(url).hostname;
};

/**
 * 判断是否是绝对 URL
 */
export const isAbsoluteUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 安全地编码 URL 组件
 */
export const encodeUrlComponent = (str: string): string => {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  );
};

/**
 * 安全地解码 URL 组件
 */
export const decodeUrlComponent = (str: string): string => {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
};

/**
 * 拼接 URL 路径
 * 处理斜杠，确保路径正确拼接
 */
export const joinPaths = (...paths: string[]): string => {
  return paths
    .map((path) => path.trim().replace(/^\/+|\/+$/g, ''))
    .filter(Boolean)
    .join('/');
};

/**
 * 获取 URL 的文件扩展名
 */
export const getUrlExtension = (url: string): string => {
  try {
    const pathname = new URL(url).pathname;
    const extension = pathname.split('.').pop();
    return extension || '';
  } catch {
    return '';
  }
};

/**
 * 验证 URL 格式是否有效
 * @param url 要验证的 URL
 * @param options 验证选项
 */
export const isValidUrl = (
  url: string,
  options: { protocols?: string[]; requireProtocol?: boolean } = {}
): boolean => {
  try {
    const urlObj = new URL(url);
    if (options.protocols?.length) {
      const protocol = urlObj.protocol.replace(':', '');
      return options.protocols.includes(protocol);
    }
    return !options.requireProtocol || urlObj.protocol !== '';
  } catch {
    return false;
  }
};

/**
 * 规范化 URL
 * 处理双斜杠、末尾斜杠等
 */
export const normalizeUrl = (url: string, options: { 
  removeTrailingSlash?: boolean;
  removeQueryParams?: boolean;
  removeHash?: boolean;
  forceHttps?: boolean;
} = {}): string => {
  try {
    const urlObj = new URL(url);
    let normalized = urlObj.toString();

    if (options.forceHttps) {
      normalized = normalized.replace(/^http:/, 'https:');
    }

    if (options.removeQueryParams) {
      normalized = normalized.split('?')[0];
    }

    if (options.removeHash) {
      normalized = normalized.split('#')[0];
    }

    if (options.removeTrailingSlash) {
      normalized = normalized.replace(/\/+$/, '');
    }

    return normalized;
  } catch {
    return url;
  }
}; 