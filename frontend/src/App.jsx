import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesApp from "./components/notesapp";
import SongInfo from "./components/songInfo";
import Dj from "./components/dj";
import Radio from "./components/radio";
import { Sidebar } from "./components/sidebar";
import About from "./About"; // 🔹 Create this page
import "./App.css";

import bg1970 from "./assets/bg-1970.gif";
import bg1980 from "./assets/bg-1980.gif";
import bg1990 from "./assets/bg-1990.gif";
import bg2000 from "./assets/bg-2000.gif";
import bg2010 from "./assets/bg-2010.gif";
import bg2020 from "./assets/bg-2020.gif";

const gifMap = {
  1970: bg1970,
  1980: bg1980,
  1990: bg1990,
  2000: bg2000,
  2010: bg2010,
  2020: bg2020,
};

function HomePage() {
  const [decade, setDecade] = useState(1990);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    singer: "",
    decade,
    stationKey: "",
  });
  const [stationKey, setStationKey] = useState("");

  return (
    <div className="relative app min-h-screen overflow-hidden text-white">
      <div className="sm:px-4 lg:px-4">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img
            src={gifMap[decade]}
            alt={`Background for ${decade}s`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>

        <SongInfo
          song={currentSong}
          decade={decade}
          setDecade={setDecade}
          stationKey={stationKey}
        />

        <div className="flex items-center justify-center">
          <Radio
            decade={decade}
            setCurrentSong={setCurrentSong}
            setStationKey={setStationKey}
          />
        </div>
        <Sidebar />
        <NotesApp />
        <div className="fixed bottom-8 right-8 sm:right-8">
          <Dj decade={decade} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
