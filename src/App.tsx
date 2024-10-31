import { useRef, useState } from "react";

import videoSrc from "./assets/video.mp4";

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const video = useRef<HTMLVideoElement>(null);

  const playOrPauseVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);

    if (isVideoPlaying) {
      video.current?.pause();
    } else {
      video.current?.play();
    }
  };

  return (
    <main>
      <h1>Hello tsx</h1>
      <div>
        <div className="flex">
          <button onClick={playOrPauseVideo}>
            {isVideoPlaying ? "Pause" : "Play"}
          </button>
        </div>

        <video controls src={videoSrc} ref={video} />
      </div>
    </main>
  );
}

export default App;
