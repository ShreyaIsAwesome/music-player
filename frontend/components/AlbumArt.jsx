import React from "react";

function AlbumArt({src}){
    return (
        <div className="album-art">
            <img src={src}/>
        </div>
    )
}

export default AlbumArt;