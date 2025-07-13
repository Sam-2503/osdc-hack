import { useState, useEffect, useRef } from "react";

export default function Dj({ decade }) {
  const [message, setMessage] = useState(
    `It's Pop FM ${decade} — the vibes are totally tubular!`
  );
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef(null);

  const fetchAIMessage = async () => {
    setLoading(true);
    const API_KEY = "cTlEJEptX5fHzDoNjKd3KtiColjpFTn0cYPsOjEq";
    const prompt = `You are a radio DJ in the year ${decade}. Say something fun and catchy also take the name of last two letters of years like 90s,80s in no more than 10 words.`;

    try {
      const res = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "command-r-plus",
          prompt: prompt,
          max_tokens: 30,
          temperature: 0.9,
        }),
      });

      const data = await res.json();
      const aiMessage =
        (data.generations && data.generations[0]?.text?.trim()) ||
        "🎙️ DJ is spinning vinyl silence. Try again!";
      setMessage(aiMessage);
    } catch (err) {
      setMessage("🎙️ DJ crashed into static. Try again later!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAIMessage();

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      fetchAIMessage();
    }, 30000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [decade]);

  return (
    <div className="flex flex-col items-end">
      <div className="flex justify-end mt-8">
        <div className="relative bg-gray-800 rounded-2xl px-5 py-4 max-w-xs shadow-lg text-white">
          <span className="font-bold text-cyan-300 mr-2">
            🎙️ <span className="text-white">DJ</span>
            <span className="text-lime-400 text-sm ml-2">
              (Powered By Cohere AI)
            </span>
            :
          </span>
          <span className="block mt-2">
            {loading ? "📻 Tuning in..." : message}
          </span>
          <span className="absolute right-[-10px] top-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-gray-800"></span>
        </div>
      </div>
    </div>
  );
}