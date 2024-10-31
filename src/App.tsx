import { useRef, useState } from "react";

import videoSrc from "./assets/video.mp4";

function App() {
  const video = useRef<HTMLVideoElement>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const toggleVideoPlaying = () => {
    setIsVideoPlaying(!isVideoPlaying);

    if (isVideoPlaying) {
      video.current?.pause();
    } else {
      video.current?.play();
    }
  };

  const togglePictureInPicture = async () => {
    setIsPictureInPicture(!isPictureInPicture);

    if (isPictureInPicture) {
      document.exitPictureInPicture();
    } else {
      try {
        await video.current?.requestPictureInPicture();
      } catch (err) {
        alert(err);
      }
    }
  };

  const toggleVideoMuted = () => {
    setIsVideoMuted(!isVideoMuted);

    if (video.current) {
      if (isVideoMuted) {
        video.current.volume = 1;
      } else {
        video.current.volume = 0;
      }
    }
  };

  return (
    <main>
      <h1>Hello tsx</h1>
      <div>
        <div className="flex">
          <button onClick={toggleVideoPlaying}>
            {isVideoPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={togglePictureInPicture}>
            {isPictureInPicture ? "Turn off PiP" : "Turn on PiP"}
          </button>
          <button onClick={toggleVideoMuted}>
            {isVideoMuted ? "Unmute Video" : "Mute Video"}
          </button>
        </div>

        <video controls src={videoSrc} ref={video} />
      </div>
    </main>
  );
}

export default App;
