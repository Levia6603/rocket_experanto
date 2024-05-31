import { useState } from "react";
import { CallPage, EnterPage, Label, Video } from "./style";

function VideoChat() {
  const [callStart, setCallStart] = useState(false);
  const [current, setCurrent] = useState(true);
  return (
    <>
      {callStart ? (
        <CallPage>
          <Label>
            <p>123</p>
          </Label>
          <Video
            $current={current}
            autoPlay
            playsInline
            muted
            onClick={() => {
              setCurrent(false);
            }}
          />
          <Video $current={!current} autoPlay playsInline />
        </CallPage>
      ) : (
        <EnterPage>
          <div>
            <h2>Enter your room ID</h2>
            <label>
              <input type="text" />
              <button
                type="button"
                onClick={() => {
                  setCallStart(true);
                }}
              >
                Enter
              </button>
            </label>
            <p>or</p>
            <button type="button">Create Room</button>
          </div>
        </EnterPage>
      )}
    </>
  );
}

export default VideoChat;
