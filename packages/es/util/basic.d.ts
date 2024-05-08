/**
 * 转换字符串，为null转换为空字符串
 * @param val
 * @returns
 */
export declare const str: <T>(val: T) => string;
/**
 * 判断是否是图片类型
 * @param filePath
 * @returns
 */
export declare function isImage(filePath: string): boolean;
export declare function createObjectURL(blob: any): string;
