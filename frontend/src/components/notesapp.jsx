import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

export default function NotesApp() {
  const [note, setNote] = useState("");
  const [latestNote, setLatestNote] = useState("");

  const handleSubmit = async () => {
    const audio = new Audio("click.mp3");
    audio.play();
    if (!note.trim()) return;
    await addDoc(collection(db, "notes"), {
      content: note,
      timestamp: serverTimestamp(),
    });
    setNote("");
  };

  const fetchLatestNote = async () => {
    const q = query(
      collection(db, "notes"),
      orderBy("timestamp", "desc"),
      limit(1)
    );
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const latest = snapshot.docs[0].data();
      setLatestNote(latest.content);
    }
  };

  useEffect(() => {
    fetchLatestNote(); // fetch once on mount
    const interval = setInterval(fetchLatestNote, 10000); // fetch every 5 sec
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="p-4 text-white">
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
        <h2 className="text-xl font-bold mb-4">Radio Notes</h2>

        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your note..."
          className="text-white px-2 py-1 rounded mr-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-cyan-300 text-black px-3 py-1 rounded"
        >
          Send Note
        </button>
      </div>
      <div className="fixed top-36 left-4 w-md">
        <h3 className="font-semibold text-lime-400">📻 Latest Note:</h3>
        <p className="mt-2">{latestNote || "Fetching..."}</p>
      </div>
    </div>
  );
}
