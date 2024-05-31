import { useState } from "react";
import { EnterPage } from "./style";

function VideoChat() {
  const [callStart, setCallStart] = useState(false);
  return <>{callStart ? <></> : <></>}</>;
}

export default VideoChat;
