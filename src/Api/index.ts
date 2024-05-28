const apiUrl = import.meta.env.VITE_API_URL;

const apiBase = {
  //* 取得語言列表
  GET_LANGUAGE_LIST: `${apiUrl}/api/languages`,
};

export default apiBase;
