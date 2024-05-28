import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "../../Api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/user/userSlice";

function PassValue() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLoginData = async () => {
    const urlParams = new URLSearchParams(window.location.search); //得到網址列
    const code = urlParams.get("code"); //得到code參數

    const loginState = await axios
      .post(GoogleLogin, { Code: code })
      .then((res) => res.data);
    console.log(loginState);

    const {
      data: { Photos, nickName },
    } = loginState;

    dispatch(setUser({ name: nickName, avatar: Photos }));

    if (loginState.message === "登入成功") {
      navigate("/home/index");
    }
  };

  useEffect(() => {
    getLoginData();
  }, []);
  return <></>;
}

export default PassValue;
