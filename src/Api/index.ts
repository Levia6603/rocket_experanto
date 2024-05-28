const apiUrl = import.meta.env.VITE_API_URL;

const apiBase = {
  //* 取得語言列表
  GET_LANGUAGE_LIST: `${apiUrl}/api/languages`,
  GET_LOGIN_URL: `${apiUrl}/api/login/google`,
  GOOGLE_LOGIN: `${apiUrl}/api/login`,
};

export default apiBase;
