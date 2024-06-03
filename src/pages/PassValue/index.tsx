import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiBase from "../../Api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/user/userSlice";

function PassValue() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { GOOGLE_LOGIN } = apiBase;

  const getLoginData = async () => {
    const urlParams = new URLSearchParams(window.location.search); //得到網址列
    const code = urlParams.get("code"); //得到code參數

    const loginData = await axios
      .post(GOOGLE_LOGIN, { Code: code })
      .then((res) => res.data);

    const {
      token,
      message,
      data: { photos, name },
    } = loginData;

    dispatch(setUser({ name, avatar: photos }));
    localStorage.setItem("token", token);

    if (message === "註冊成功") {
      navigate("/user/profile/edit");
    } else if (message === "登入成功") {
      navigate("/home/index");
    }
  };

  useEffect(() => {
    getLoginData();
  }, []);
  return <></>;
}

export default PassValue;
