import { useEffect, useRef, useState } from "react";
import {
  BtnGroup,
  CallPage,
  Chat,
  Container,
  EnterPage,
  InputGroup,
  Label,
  Message,
  Video,
} from "./style";
import {
  addDoc,
  collection,
  DocumentReference,
  DocumentData,
  onSnapshot,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { dbRef, firestore, pc } from "../../firebase/firebase";
import { child, onValue, push } from "firebase/database";
import mute from "/mic-mute.svg";
import mic from "/mic.svg";
import cameraOff from "/camera-video-off.svg";
import camera from "/camera-video.svg";
import chatIcon from "/chat-text.svg";
import sendIcon from "/sendIcon.svg";

interface RefProps {
  srcObject: MediaStream;
}

type MessageList = { name: string; message: string }[];

function VideoChat() {
  const url = new URLSearchParams(window.location.search);
  const chatId = url.get("roomid");
  const roomRef = child(dbRef, chatId || "rooms");

  const [callStart, setCallStart] = useState(false);
  const [current, setCurrent] = useState(true);
  const [roomId, setRoomId] = useState("");
  const [enterText, setEnterText] = useState("");
  const [audioState, setAudioState] = useState(true);
  const [videoState, setVideoState] = useState(true);
  const [inputChat, setInputChat] = useState("");
  const [messageList, setMessageList] = useState<MessageList>([]);
  const [chatState, setChatState] = useState(false);
  const localRef = useRef<RefProps>();
  const remoteRef = useRef<RefProps>();

  async function collectIceCandidate(
    roomRef: DocumentReference<DocumentData, DocumentData>,
    localName: string,
    remoteName: string
  ) {
    const candidatesRef = collection(roomRef, localName);
    try {
      pc.onicecandidate = async (event) => {
        event.candidate &&
          (await addDoc(candidatesRef, event.candidate.toJSON()));
        pc.onicecandidateerror = (err) => {
          console.log("error", err);
        };
        const remoteCandidateRef = collection(roomRef, remoteName);
        onSnapshot(remoteCandidateRef, (snap) => {
          snap.docChanges().forEach(async (change) => {
            if (change.type === "added") {
              const data = change.doc.data();
              await pc.addIceCandidate(new RTCIceCandidate(data));
            }
          });
        });
      };
    } catch (err) {
      console.log(err);
    }
  }

  async function createRoom() {
    setCallStart(true);
    const constants = { audio: true, video: true };
    const mediaStream = await navigator.mediaDevices.getUserMedia(constants);
    const remoteStream = new MediaStream();
    const roomRef = await addDoc(collection(firestore, "rooms"), {});
    setRoomId(roomRef.id);

    collectIceCandidate(roomRef, "hostCandidate", "guestCandidate");

    mediaStream.getTracks().forEach((track) => {
      pc.addTrack(track, mediaStream);
    });
    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    if (localRef.current && mediaStream) {
      localRef.current.srcObject = mediaStream;
    }
    if (remoteRef.current) {
      remoteRef.current.srcObject = remoteStream;
    }

    const offerDescription = await pc.createOffer();
    const offer = {
      type: offerDescription.type,
      sdp: offerDescription.sdp,
    };

    await pc.setLocalDescription(offerDescription);
    await setDoc(roomRef, { offer });

    onSnapshot(roomRef, async (snapshot) => {
      const data = snapshot.data();
      if (data?.answer && !pc.currentRemoteDescription) {
        const rtcSessionDescription = new RTCSessionDescription(data.answer);
        await pc.setRemoteDescription(rtcSessionDescription);
      }
    });
  }
  async function enterRoom(roomId: string) {
    setCallStart(true);
    const constants = { audio: true, video: true };
    const mediaStream = await navigator.mediaDevices.getUserMedia(constants);
    const remoteStream = new MediaStream();
    const roomRef = doc(firestore, "rooms", roomId);
    const roomSnapshot = await getDoc(roomRef);

    if (!roomSnapshot.exists()) {
      alert("無此房間!");
      return;
    }

    collectIceCandidate(roomRef, "guestCandidate", "hostCandidate");

    mediaStream.getTracks().forEach((track) => {
      pc.addTrack(track, mediaStream);
    });
    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    if (localRef.current && mediaStream) {
      localRef.current.srcObject = mediaStream;
    }
    if (remoteRef.current) {
      remoteRef.current.srcObject = remoteStream;
    }

    const offer = roomSnapshot.data()?.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offer));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };
    await updateDoc(roomRef, { answer });
  }

  async function copyText() {
    await navigator.clipboard.writeText(roomId).then(() => {
      alert("copy!!");
    });
  }

  function micStateToggle() {
    const audioTracks = localRef.current?.srcObject.getAudioTracks();
    if (audioTracks && audioTracks.length > 0) {
      audioTracks[0].enabled = !audioTracks[0].enabled;
    }
    setAudioState((prev) => !prev);
  }

  function videoStateToggle() {
    const videoTracks = localRef.current?.srcObject.getVideoTracks();
    if (videoTracks && videoTracks.length > 0) {
      videoTracks[0].enabled = !videoTracks[0].enabled;
    }
    setVideoState((prev) => !prev);
  }

  function toggleChat() {
    setChatState((prev) => !prev);
  }

  useEffect(() => {
    chatId &&
      onValue(roomRef, async (snap) => {
        const data = await snap.val();
        setMessageList(Object.values(data));
      });
  }, []);

  return (
    <>
      {callStart ? (
        <Container>
          <CallPage>
            <Label onClick={copyText}>
              <p>{roomId}</p>
            </Label>
            <Video
              ref={localRef as React.LegacyRef<HTMLVideoElement>}
              $current={current}
              autoPlay
              playsInline
              muted
              onClick={() => {
                setCurrent(false);
              }}
            />
            <Video
              ref={remoteRef as React.LegacyRef<HTMLVideoElement>}
              $current={!current}
              autoPlay
              playsInline
              onClick={() => {
                setCurrent(true);
              }}
            />
            <BtnGroup>
              <button onClick={micStateToggle}>
                <img src={audioState ? mic : mute} alt="mic" />
              </button>
              <button onClick={videoStateToggle}>
                <img src={videoState ? camera : cameraOff} alt="camera" />
              </button>
              <button onClick={toggleChat}>
                <img src={chatIcon} alt="chatroomIcon" />
              </button>
            </BtnGroup>
          </CallPage>
          {chatState && (
            <Chat>
              <div>
                <ul>
                  {messageList.map((obj, i) => (
                    <Message
                      key={i}
                      $idenity={obj.name === localStorage.getItem("name")}
                    >
                      {obj.message}
                    </Message>
                  ))}
                </ul>
                <InputGroup
                  onSubmit={(e) => {
                    e.preventDefault();
                    push(roomRef, {
                      name: localStorage.getItem("name"),
                      message: inputChat,
                    });
                    setInputChat("");
                  }}
                >
                  <input
                    type="text"
                    value={inputChat}
                    onChange={(e) => {
                      setInputChat(e.target.value);
                    }}
                  />
                  <button>
                    <img src={sendIcon} alt="send" />
                  </button>
                </InputGroup>
              </div>
            </Chat>
          )}
        </Container>
      ) : (
        <EnterPage>
          <div>
            <h2>Enter your room ID</h2>
            <label>
              <input
                type="text"
                value={enterText}
                onChange={(e) => {
                  setEnterText(e.target.value);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  enterRoom(enterText);
                }}
              >
                Enter
              </button>
            </label>
            <p>or</p>
            <button type="button" onClick={createRoom}>
              Create Room
            </button>
          </div>
        </EnterPage>
      )}
    </>
  );
}

export default VideoChat;
