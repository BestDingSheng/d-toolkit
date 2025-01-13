/**
 * 数组相关工具函数
 */

/**
 * 数组去重
 */
export const unique = <T>(arr: T[]): T[] => Array.from(new Set(arr));

/**
 * 数组扁平化
 * 将嵌套的数组展平为一维数组
 */
export const flatten = <T>(arr: Array<T | T[]>): T[] => {
  return Array.isArray(arr) ? ([] as T[]).concat(...arr.map(item => 
    Array.isArray(item) ? flatten(item) : item
  )) : [arr] as T[];
};

/**
 * 数组分组
 */
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}; 