import { useState } from "react";
import { Frame, ProcessBar } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { toggleToast } from "../../../redux/toastState/toastStateSlice";
import { RootStateType } from "../../../redux";

function Toast() {
  const text = useSelector((state: RootStateType) => state.toast.text);
  const [isShow, setIsShow] = useState(true);
  const dispatch = useDispatch();

  function toggleState() {
    setIsShow(!isShow);
  }

  return (
    <Frame
      $isShow={isShow}
      onAnimationEnd={() => {
        if (!isShow) {
          toggleState();
          dispatch(toggleToast());
        }
      }}
    >
      <div>
        <p>{text}</p>
      </div>
      <ProcessBar onAnimationEnd={toggleState}></ProcessBar>
    </Frame>
  );
}
export default Toast;
