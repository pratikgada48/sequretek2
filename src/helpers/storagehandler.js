export const setSessionData = (key, value) =>
  window.sessionStorage.setItem(key, value);

export const getSessionData = (key) => window.sessionStorage.getItem(key);

export const removeSessionData = (key) => window.sessionStorage.removeItem(key);
