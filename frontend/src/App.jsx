import { useState } from "react";
import NotesApp from "./components/notesapp";
import SongInfo from "./components/songInfo";
import SoundcloudPlayer from "./components/soundcloud";
import Dj from "./components/dj";
import { playlists } from "./playlists";
import Radio from "./components/radio";
import "./App.css";

function App() {
  const [decade, setDecade] = useState(1990);

  const [currentSong, setCurrentSong] = useState({
    title: "",
    singer: "",
    decade,
  });

  return (
    <div className="app text-white bg-zinc-900">
      {/* Top Info Bar */}
      <SongInfo song={currentSong} decade={decade} setDecade={setDecade} />

      {/* Player in center (optional) */}
      <div className="flex items-center justify-center">
        <Radio decade={decade} setCurrentSong={setCurrentSong} />
      </div>

      {/* Notes and DJ at bottom */}

      <NotesApp />

      <div className="fixed bottom-8 right-8 pointer-events-auto">
        <Dj decade={decade} />
      </div>
    </div>
  );
}
export default App;
