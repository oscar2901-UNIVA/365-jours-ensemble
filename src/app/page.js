"use client";
import Counter from "./components/Counter";
import Playlist from "./components/Playlist";
import Timeline from "./components/Timeline";
import Map from "./components/Map";
import Gallery from "./components/Gallery";
import LoveLetters from "./components/LoveLetters";
import TypewriterEffect from "./components/Typewriter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6"
    >
      <iframe
        src="https://share.icloud.com/photos/068WLMQH-H-QZvxnQTzQi1WpQ"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <Counter />
      <Playlist />
      <Timeline />
      <Map />
      <Gallery />
      <LoveLetters />
      <TypewriterEffect />
    </motion.div>
  );
}
