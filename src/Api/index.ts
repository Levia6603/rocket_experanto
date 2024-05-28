<<<<<<< HEAD
export const GetLanguageList = "http://74.225.130.87/api/languages";
export const GetLoginUrl = "http://74.225.130.87/api/login/google";
export const GoogleLogin = "http://74.225.130.87/api/login";
=======
const apiUrl = import.meta.env.VITE_API_URL;

const apiBase = {
  //* 取得語言列表
  GET_LANGUAGE_LIST: `${apiUrl}/api/languages`,
};

export default apiBase;
>>>>>>> dev
