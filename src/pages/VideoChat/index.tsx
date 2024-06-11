import { useRef, useState } from "react";
import { BtnGroup, CallPage, EnterPage, Label, Video } from "./style";
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
import { firestore, pc } from "../../firebase/firebase";
import mute from "/mic-mute.svg";
import mic from "/mic.svg";
import cameraOff from "/camera-video-off.svg";
import camera from "/camera-video.svg";

interface RefProps {
  srcObject: MediaStream;
}

function VideoChat() {
  const [callStart, setCallStart] = useState(false);
  const [current, setCurrent] = useState(true);
  const [roomId, setRoomId] = useState("");
  const [enterText, setEnterText] = useState("");
  const [audioState, setAudioState] = useState(true);
  const [videoState, setVideoState] = useState(true);
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
    setAudioState(false);
  }

  function videoStateToggle() {
    setVideoState(false);
  }

  return (
    <>
      {callStart ? (
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
              <img src={audioState ? mic : mute} alt="" />
            </button>
            <button onClick={videoStateToggle}>
              <img src={videoState ? camera : cameraOff} alt="" />
            </button>
          </BtnGroup>
        </CallPage>
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
