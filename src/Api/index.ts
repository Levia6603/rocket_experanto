import axios from "axios";
type apiList = { Id: number; Name: string }[];

const apiBase = {
  //* 取得語言列表
  GET_LANGUAGE_LIST: `/api/languages`,
  GET_LOGIN_URL: `/api/login/google`,
  GOOGLE_LOGIN: `/api/login`,
  GET_LOCATION_LIST: `/api/location`,
  GET_GENDER_LIST: `/api/gender`,
  POST_PROFILE: `/api/users`,
  GET_PROFILE: `/api/users`,
  GET_POST: `/api/post`,
  GET_POST_LIST: `/api/search?q=&area=&page=&lang[]=&lang[]=&lang[]=&lang[]=`,
  POST_POST: `/api/post`,
  GET_CHECK_POST: `/api/checkPost`,
};

export default apiBase;

export async function getList(
  apiUrl: string,
  setList: (value: React.SetStateAction<apiList>) => void
) {
  const list: apiList = await axios.get(apiUrl).then((res) => res.data.data);
  setList(list);
}
