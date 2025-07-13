import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgGif from "./assets/bg-1970.gif";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12 font-retro overflow-hidden">
      {/* Background GIF */}
      <img
        src={bgGif}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-30 z-[-10] pointer-events-none"
      />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center w-full"
      >
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">RAD-YO</h1>
        <div className="h-1 w-20 bg-white my-4" />

        {/* Description */}
        <p className="text-base sm:text-lg max-w-4xl text-center mb-8 leading-relaxed">
          Rad-Yo is our love letter to vintage FM radios, except it lives in your browser (gotta stick to the theme).
          You can tune through decades, flip stations, leave unhinged notes for strangers who may or may not be bots.
          Station pulling up with your certified bangers back to back? Smash that heart button and save it!
          The UI is held together by tailwind, pixels, some fire backdrops and Daft Punk.
          We have power buttons. We have volume buttons. We’re up all night… mostly to get it working.
          Harder, better, faster, barely. Please clap.
        </p>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mb-10">
          This project is made by <span className="font-semibold">The Travellers</span>
        </p>

        {/* Social Icons: reduced bottom margin */}
        <section className="flex justify-center items-center gap-6 mb-4">
          <i className="nes-icon instagram is-large"></i>
          <i className="nes-icon github is-large"></i>
          <i className="nes-icon gmail is-large"></i>
          <i className="nes-icon linkedin is-large"></i>
        </section>

      {/* The End + Button with space controlled by space-y */}
 <div className="flex flex-col items-center space-y-12 mt-6">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80 }}
    className="text-5xl sm:text-6xl font-extrabold"
  >
    The End
  </motion.h2>

  <button
    onClick={() => navigate("/")}
    className="px-6 py-2 text-sm sm:text-base font-semibold rounded-full border border-white 
    hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
  >
    ⬅ Back to Home
  </button>
 </div>
      </motion.div>
    </div>
  );
}
