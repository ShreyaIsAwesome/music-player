import React from "react";

function SongInfo({songName, color}){
    return (
        <div className="title-block">
            <h1>{songName}</h1>
            <p className="genre" style={color={color}}>Synthwave</p>
        </div>
    )
}

export default SongInfo