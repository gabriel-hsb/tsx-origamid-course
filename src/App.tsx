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
      video.current.muted = !video.current?.muted;
    }
  };
  const toggleVideoFaster = () => {
    const videoRate = video.current;

    switch (videoRate?.playbackRate) {
      case 1: {
        videoRate.playbackRate = 2;
        break;
      }
      case 2: {
        videoRate.playbackRate = 3;
        break;
      }
      case 3: {
        videoRate.playbackRate = 1;
        break;
      }
    }
  };

  const jumpAhead = () => {
    if (video.current) {
      video.current.currentTime += 2;
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
          <button onClick={toggleVideoFaster}>Alternate Speed</button>
          <button onClick={jumpAhead}>+2s</button>
        </div>

        <video controls src={videoSrc} ref={video} />
      </div>
    </main>
  );
}

export default App;
