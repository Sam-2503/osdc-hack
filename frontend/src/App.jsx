import { useState } from "react";
import SongInfo from "./components/songInfo";
import Radio from "./components/radio";
import NotesApp from "./components/notesapp";
import Dj from "./components/dj";
import { Sidebar } from "./components/sidebar";
import "./App.css";

function App() {
  const [decade, setDecade] = useState(1990);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    singer: "",
    decade: 1990,
    stationKey: "",
  });
  const [stationKey, setStationKey] = useState("");

  return (
    <div className="app text-white bg-zinc-900">
      {/* Top Info Bar */}
      <SongInfo
        song={currentSong}
        decade={decade}
        setDecade={setDecade}
        stationKey={stationKey}
      />

      {/* Radio in Center */}
      <div className="flex items-center justify-center">
        <Radio
          decade={decade}
          setCurrentSong={setCurrentSong}
          setStationKey={setStationKey}
        />
      </div>

      {/* Notes and DJ */}
      <Sidebar />
      <NotesApp />
      <div className="fixed bottom-8 right-8 pointer-events-auto">
        <Dj decade={decade} />
      </div>
    </div>
  );
}

export default App;
