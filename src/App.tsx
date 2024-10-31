import { useRef, useState } from "react";

import videoSrc from "./assets/video.mp4";

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);

  const video = useRef<HTMLVideoElement>(null);

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

  return (
    <main>
      <h1>Hello tsx</h1>
      <div>
        <div className="flex">
          <button onClick={toggleVideoPlaying}>
            {isVideoPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={togglePictureInPicture}>
            {isPictureInPicture
              ? "Return to normal screen"
              : "Turn on Picture in Picture"}
          </button>
        </div>

        <video controls src={videoSrc} ref={video} />
      </div>
    </main>
  );
}

export default App;
