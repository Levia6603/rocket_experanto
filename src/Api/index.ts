const apiUrl = import.meta.env.VITE_API_URL;

const apiBase = {
  //* 取得語言列表
  GET_LANGUAGE_LIST: `${apiUrl}/api/languages`,
  GET_LOCATION_LIST: `${apiUrl}/api/location`,
  GET_GENDER_LIST: `${apiUrl}/api/gender`,
};

export default apiBase;
