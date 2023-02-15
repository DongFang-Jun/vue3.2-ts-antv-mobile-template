/* 获取本地localStorage */
export const getLocalStorage = (key: string): object | string => {
  let itemInfo = window.localStorage.getItem(key) || "";
  let result = "";
  try {
    result = JSON.parse(itemInfo);
  } catch (error) {}

  return result;
};

/* 设置本地localStorage */
export const setLocalStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/* 移除本地localStorage */
export const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
