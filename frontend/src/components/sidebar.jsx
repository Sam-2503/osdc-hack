import { useEffect, useState } from "react";

export function Sidebar() {
  const [likedStations, setLikedStations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
    refreshFavourites();
    window.addEventListener("favorites-updated", refreshFavourites);
    return () => {
      window.removeEventListener("favorites-updated", refreshFavourites);
    };
  }, []);

  return (
    <>
      {/* Favourites Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 left-4 px-5 py-3 
        bg-green-500 text-white font-bold rounded-full 
        shadow-lg hover:bg-green-400 hover:shadow-green-300 
        transition-all duration-300 ease-in-out z-50"
      >
        Favourites
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 p-4 flex flex-col justify-between
        bg-blue-300/50 text-black backdrop-blur-md 
        rounded-r-2xl shadow-lg z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Top Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Favourite Stations</h2>
          {likedStations.length === 0 ? (
            <p className="text-sm">No favourites yet.</p>
          ) : (
            <ul className="space-y-2">
              {likedStations.map((station, idx) => (
                <li
                  key={idx}
                  className="bg-white/80 rounded px-3 py-1 text-sm"
                >
                  {station}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Divider + Footer */}
        <div className="mt-6">
          <hr className="border-black/40 mb-3" />
          <div className="flex justify-end text-xs text-right text-black/80">
            <div className="text-[0.65rem]">
              <span className="block">&copy; 2025</span>
              <span className="block font-semibold">The Travellers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
