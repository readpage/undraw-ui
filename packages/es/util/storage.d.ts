/**
 * setStorage
 * @param key
 * @param value
 * @param localStorage
 */
export declare const set: <T = any>(key: string, value: T, localStorage?: boolean) => void;
/**
 * 获取 getStorage
 * @param key
 * @param localStorage
 * @returns
 */
export declare const get: <T = any>(key: string, localStorage?: boolean) => T;
/**
 * 删除 removeStorage
 * @param key
 * @param localStorage
 */
export declare const remove: (key: string, localStorage?: boolean) => void;
/**
 * 清空 clearStorage
 * @param localStorage
 */
export declare const clear: (localStorage?: boolean) => void;
export declare const storage: {
    set: <T = any>(key: string, value: T, localStorage?: boolean) => void;
    get: <T_1 = any>(key: string, localStorage?: boolean) => T_1;
    remove: (key: string, localStorage?: boolean) => void;
    clear: (localStorage?: boolean) => void;
};
