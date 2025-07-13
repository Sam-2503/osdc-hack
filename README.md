# Rad-Yo 🎙️

Welcome to **Rad-Yo**, a modern web radio experience that revives the golden era of music and technology!

> **This project was built for the OSDC Hackathon 2025 (osdchack25)!**

---

## 🎮 Theme

**Blast from the Past - Revive retro games, dead platforms, or vintage tech**

Rad-Yo is inspired by the nostalgia of classic radios, vintage music, and the playful spirit of old-school technology.  
Tune in, leave notes, and enjoy a digital throwback to the days of analog dials and timeless tunes.

---

## 🚀 Features

- **Decade Tuning:**  
  Choose your favorite decade (1970s–2020s) and instantly access playlists that capture the sound of the era.

- **Station Switching:**  
  Flip between Hindi, English, and Retro stations—each with its own unique playlist and frequency.

- **Realistic Radio Controls:**  
  Power on/off, tune stations, and adjust the volume just like a real radio.

- **Now Playing Info:**  
  See the current song and artist in a stylish info bar. Heart your favorite stations!
  
- **Favorites Toggle:**  
  Heart your favorite stations with a single click—toggle between red and white hearts, and see confirmation messages like “Station favorited!” when the radio is powered on.

- **Live Notes:**  
  Leave messages for other listeners and see the latest note in real time.

- **DJ & Soundcloud:**  
  Enjoy a virtual DJ powered by Cohere AI for even more music fun.

- **Retro UI:**  
  Pixel fonts, neon colors, and playful animations evoke the charm of classic gaming and tech.

---

## 🛠️ Tech Stack

- **Frontend:** React (with Vite)
- **Styling:** Tailwind CSS, NES.css, custom CSS
- **Realtime Notes:** Firebase Firestore
- **Audio:** HTML5 Audio API
- **Assets:** Public folder for music files

---

## 📦 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/rad-yo.git
   cd rad-yo/frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add your music files:**

   - Place `.mp3` or `.opus` files in `public/files/`
   - Update `src/playlists.js` with correct paths (e.g., `/files/song.opus`)

4. **Configure Firebase:**

   - Add your Firebase config to `src/firebase.js` for notes functionality.

5. **Run the app:**

   ```bash
   npm run dev
   ```

6. **Open in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

---

## ✨ Credits & Inspiration

- Inspired by classic radios, 8-bit games, and the joy of sharing music.
- Built with love for the OSDC community and all retro tech fans!
- Created for **osdchack25**.

---

## 📜 License

MIT License

---

Enjoy your trip down memory lane!  
**Rad-Yo** — Where vintage vibes meet modern tech
