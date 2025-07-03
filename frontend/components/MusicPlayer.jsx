import { motion } from "framer-motion";

import React from "react"
import AlbumArt from "./AlbumArt";
import SongInfo from "./SongInfo";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";

function MusicPlayer() {
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    const [isPlaying, setIsPlaying] = React.useState(false)
    const [music, setMusic] = React.useState({
        "backgroundImage": "clouds",
        "name": "Riptide",
        "audio": ".././audio/Vance Joy - Riptide (Lyrics).mp3",
        "duration": 198,
        "albumCover": "/images/pinkblue.jpg",
        "mainBg": "#e47676",
        "progBgColor": "#6e3c3c",
        "barColor": "#f8c7d0",
        "btnBgColor": "#ffccd521"
    })

    const [played, setPlayed] = React.useState(0);
    const [remaining, setRemaining] = React.useState(music.duration);
    const playedPercent = (played / music.duration) * 100

    const audioRef = React.useRef(null)

    const songList = [
        "Riptide",
        "Golden Hour",
        "Out Of My League",
    ]

    const songData = [
        {
            "backgroundImage": "clouds",
            "name": "Riptide",
            "audio": ".././audio/Vance Joy - Riptide (Lyrics).mp3",
            "duration": 198,
            "albumCover": "/images/pinkblue.jpg",
            "mainBg": "#e47676",
            "progBgColor": "#6e3c3c",
            "barColor": "#f8c7d0",
            "btnBgColor": "#ffccd521"
        },
        {
            "backgroundImage": "treesBG",
            "name": "Golden Hour",
            "audio": ".././audio/JVKE - golden hour (Lyrics) (320 kbps).mp3",
            "duration": 271,
            "albumCover": ".././images/sunsetwater.jpeg",
            "mainBg": "#772600",
            "progBgColor": "#351C01",
            "barColor": "#FFBC78",
            "btnBgColor": "#ffdfcc"
        },
        {
            "backgroundImage": "starsBG",
            "name": "Out Of My League",
            "audio": ".././audio/Fitz and The Tantrums - Out Of My League (HD).mp3",
            "duration": 208,
            "albumCover": ".././images/beach.jpg",
            "mainBg": "#001F53",
            "progBgColor": "#011435",
            "barColor": "#78C7FF",
            "btnBgColor": "#ccdfff"
        }
    ]

    function audioPlayPause() {
        if (isPlaying) {
            setIsPlaying(false)
            audioRef.current.pause()
        }
        else {
            setIsPlaying(true)
            audioRef.current.play()
        }
    }

    function handleTimeUpdate() {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            setPlayed(current);
            setRemaining(music.duration - current);

        }
    }

    function onNext() {
        var songNum = songList.indexOf(music.name);
        var newSong =
        songNum + 1 > 2 ? songList[0] : songList[songNum + 1];

        var newSongData = songData.find(song => song.name === newSong);

        setMusic(newSongData);
        setIsPlaying(false);
        setPlayed(0);
        setTimeout(() => {
            audioRef.current.play();
            setIsPlaying(true);
        }, 800);
    }

    function onPrev() {
        var songNum = songList.indexOf(music.name);
        var newSong =
        songNum - 1 < 0 ? songList[2] : songList[songNum - 1];

        var newSongData = songData.find(song => song.name === newSong);

        setMusic(newSongData);
        setIsPlaying(false);
        setPlayed(0);
        setTimeout(() => {
            audioRef.current.play();
            setIsPlaying(true);
        }, 800);
    }

    return (
  <div
    className="main"
    style={{
      backgroundImage: `url("/images/${music.backgroundImage}.png")`,
    }}
  >
    <motion.div
      key={music.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="player" style={{ backgroundColor: music.mainBg }}>
        <AlbumArt src={music.albumCover} />
        <div className="stack_player">
          <SongInfo songName={music.name} color={music.barColor} />
          <ProgressBar
            bgcolor={music.progBgColor}
            barcolor={music.barColor}
            played={formatTime(played)}
            remaining={formatTime(remaining)}
            progress={playedPercent}
          />
          <audio
            ref={audioRef}
            src={music.audio}
            onTimeUpdate={handleTimeUpdate}
          ></audio>
          <Controls
            isPlaying={isPlaying}
            onPlayPause={audioPlayPause}
            onNext={onNext}
            onPrev={onPrev}
            bgcolor={music.btnBgColor}
          />
        </div>
      </div>
    </motion.div>
  </div>
);
}

export default MusicPlayer