/**
 * 字符串相关工具函数
 */

/**
 * 将字符串的首字母转换为大写
 */
export const capitalize = (str: string): string => {
  if (typeof str !== 'string' || !str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 驼峰转换为短横线
 */
export const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * 短横线转换为驼峰
 */
export const kebabToCamel = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}; 