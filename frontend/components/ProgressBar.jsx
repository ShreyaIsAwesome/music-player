import React from "react";

function ProgressBar({ bgcolor, barcolor, played, remaining, progress }) {
  return (
    <div className="progress-wrapper">
        <div className="progress-container" style={{ backgroundColor: bgcolor }}>
            <div
                className="progress-bar"
                style={{
                width: `${progress}%`,
                backgroundColor: barcolor,
                height: "10px",
                transition: "width 0.5s linear"
                }}
            ></div>
        </div>
        <div className="progress-time" style={{color:barcolor}}>
            <span>{played}</span>
            <span>{remaining}</span>
        </div>
    </div>
  );
}

export default ProgressBar;