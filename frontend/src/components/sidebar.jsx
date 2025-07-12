import { useEffect, useState } from "react";

export function Sidebar() {
  const [likedStations, setLikedStations] = useState([]);

  function refreshFavourites() {
    const stations = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("liked-") && localStorage.getItem(key) === "true") {
        stations.push(key.replace("liked-", ""));
      }
    }
    setLikedStations(stations);
  }

  useEffect(() => {
    refreshFavourites(); // Load on mount

    // Listen to updates
    window.addEventListener("favorites-updated", refreshFavourites);
    return () => {
      window.removeEventListener("favorites-updated", refreshFavourites);
    };
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="nes-btn is-success drawer-button fixed bottom-[-9em] left-8"
        >
          Favourites
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-blue-300 text-base-content min-h-full">
          <li className="font-bold text-lg text-center mb-2 text-[#cc8f26]">
            Favourite Stations
          </li>
          <div className="mt-4">
            {!likedStations.length ? (
              <li className="text-sm">No favourites yet</li>
            ) : (
              likedStations.map((station, idx) => <li key={idx}>{station}</li>)
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}
