import React from "react";

function Controls({ isPlaying, onPlayPause, onNext, onPrev, bgcolor}) {
  return (
    <div className="controls">
        <button onClick={onPrev}>
            <img src=".././images/backward.png"></img>
        </button>
        <button onClick={onPlayPause}>
            <img className="playBtn"
                src={isPlaying ? ".././images/pause-128.png" : ".././images/play-128.png"}></img>
        </button>
        <button onClick={onNext}>
            <img src="/images/forward.png"></img>
        </button>
    </div>
  );
}

export default Controls