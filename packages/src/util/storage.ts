const getType = (localStorage: boolean) => {
  return localStorage ? 'localStorage' : 'sessionStorage'
}

/**
 * setStorage
 * @param key 
 * @param value 
 * @param localStorage 
 */
export const set = <T = any>(key: string, value: T, localStorage = true) => {
  if (value === '' || value === null || value === undefined) {
      value = null as T;
  }

  window[getType(localStorage)].setItem(key, JSON.stringify(value));
}

/**
 * 获取 getStorage
 * @param key 
 * @param localStorage 
 * @returns 
 */
export const get = <T = any>(key: string, localStorage = true) => {
  let res: any
  const val = window[getType(localStorage)].getItem(key);
  if (val) {
    res = JSON.parse(val)
  }
  return res as T
}

/**
 * 删除 removeStorage
 * @param key 
 * @param localStorage 
 */
export const remove = (key: string, localStorage = true) => {
  window[getType(localStorage)].removeItem(key);
}


/**
 * 清空 clearStorage
 * @param localStorage 
 */
export const clear = (localStorage = true) => {
  window[getType(localStorage)].clear()
}

export const storage = {
  set,
  get,
  remove,
  clear
}