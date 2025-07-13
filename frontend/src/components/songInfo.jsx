import { useState, useEffect } from "react";
import heartFilled from "../assets/heart-filled.svg";
import heartOutline from "../assets/white-heart.svg";
import { clickSound } from "../utils/clickSound";

export default function SongInfo({ song, decade, setDecade, stationKey }) {
  const key = `liked-${stationKey}`;
  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState("");
  const [powerOn, setPowerOn] = useState(true);

  useEffect(() => {
    function handlePowerEvent(e) {
      if (typeof e.detail === "boolean") setPowerOn(e.detail);
    }
    window.addEventListener("radio-power", handlePowerEvent);
    return () => window.removeEventListener("radio-power", handlePowerEvent);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(key);

    setLiked(saved === "true");
  }, [key]);

  const handleClick = () => {
    if (!powerOn) return;
    const newVal = !liked;
    setLiked(newVal);
    localStorage.setItem(key, newVal);
    window.dispatchEvent(new CustomEvent("favorites-updated"));
    clickSound();
    setMessage(
      newVal ? "This station is now favorited" : "Station unfavorited"
    );
    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <div className="relative w-full h-28">
      <div className="absolute top-4 left-4 flex items-center">
        <button
          className="heart-button"
          onClick={handleClick}
          disabled={!powerOn}
          style={!powerOn ? { opacity: 0.5, cursor: "not-allowed" } : {}}
        >
          <div className="heart-scale-wrapper">
            <img
              src={liked ? heartFilled : heartOutline}
              alt="Heart"
              className="heart-icon"
            />
          </div>
        </button>
        {message && (
          <div className="fade-message ml-2 text-xs text-white bg-black/60 px-2 py-1 rounded">
            {message}
          </div>
        )}
      </div>

      <div
        className="absolute left-1/2 top-1/2 md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{
          textShadow: `
      -1px -1px 0 #000,
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000
    `,
        }}
      >
        <h2>NOW PLAYING</h2>
        <p
          className="text-green-500"
          style={{
            textShadow: `
      -1px -1px 0 #000,
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000
    `,
          }}
        >
          {song.singer ? `${song.singer} — ${song.title}` : song.title}
        </p>
      </div>

      <div className="absolute top-4 right-4 flex gap-2 items-center">
        <button
          className="nes-btn"
          onClick={() => {
            const newDecade = Math.max(1970, decade - 10);
            setDecade(newDecade);
            clickSound();
          }}
        >
          Prev
        </button>
        <div className="nes-container is-rounded text-center w-32 h-24 flex flex-col justify-center">
          <p className="text-xs">You're in the decade:</p>
          <p className="text-red-600 text-base">{song.decade || decade}s</p>
        </div>
        <button
          className="nes-btn"
          onClick={() => {
            const newDecade = Math.min(2020, decade + 10);
            setDecade(newDecade);
            clickSound();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
