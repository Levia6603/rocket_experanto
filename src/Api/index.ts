import axios from "axios";
type apiList = { Id: number; Name: string }[];

const apiBase = {
  //* 取得語言列表
  GET_LANGUAGE_LIST: `/api/languages`,
  GET_LOGIN_URL: `/api/login/google`,
  GOOGLE_LOGIN: `/api/login`,
  GET_LOCATION_LIST: `/api/location`,
  GET_GENDER_LIST: `/api/gender`,
  GET_PROFILE: `/api/users`,
  POST_PROFILE: `/api/users`,
  GET_POST: `/api/post`,
  POST_POST: `/api/post`,
  GET_CHECK_POST: `/api/checkPost`,
  GET_POST_LIST: `/api/postList`,
  GET_POST_LIST_LOGIN: `/api/UserPostList`,
  GET_HOT_LANGUAGE: `/api/languages/popular`,
  GET_WAITING_FOR_APPROVAL_LIST: `/api/posts/pending`,
  GET_CHECK_PERMISSION: `/api/Apply`,
  POST_SEND_APPLY: `/api/applications`,
  GET_MATCHING_LIST: `/api/applylist`,
  GET_CHATLIST: `/api/chatroom`,
  POST_CHATROOM: `/api/chatroom`,
  //* 收藏清單
  GET_FAVORITE_LIST: `/api/favorites`,
  POST_FAVORITE_LIST: `/api/favorites`,
  DELETE_FAVORITE_LIST: `/api/favorites`,
  POST_AGREE_APPLY: `/api/applications/isAgree`, //* 同意申請

  GET_CHANGE_LIST: `/api/changelist`,
  GET_CHANGE_DATA: `/api/change`,
  GET_EXCHANGING_LIST: `/api/changelist`,
  POST_ACCOMPLISH_SINGLE_GOAL: `/api/finish`,
  POST_ACCOMPLISH_ALL_GOALS: `/api/complete`,

  GET_COMMENT_LIST: `/api/comments`, //* 取得留言
  POST_COMMENT: `/api/comments`, //* 新增留言
};

export default apiBase;

export async function getList(
  apiUrl: string,
  setList: (value: React.SetStateAction<apiList>) => void
) {
  const list: apiList = await axios.get(apiUrl).then((res) => res.data.data);
  setList(list);
}
