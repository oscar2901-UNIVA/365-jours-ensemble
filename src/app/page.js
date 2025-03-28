"use client";
import Counter from "./components/Counter";
import Playlist from "./components/Playlist";
import Timeline from "./components/Timeline";

import Gallery from "./components/Gallery";
import LoveLetters from "./components/LoveLetters";
import TypewriterEffect from "./components/Typewriter";
import dynamic from "next/dynamic";
import FloatingHearts from "./components/FloatingHearts";
const MapTogether = dynamic(() => import("./components/MapTogether"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-pink-50 animate-pulse rounded-xl" />
  ),
});

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-rose-100 flex flex-col items-center p-6 relative overflow-hidden">
      <FloatingHearts density={20} />
      <Counter />
      <MapTogether />
      <Playlist />

      {/* <Map /> 
      
      
      <Playlist />
      <Timeline />
      <Gallery />
      <LoveLetters />
      <TypewriterEffect />
      */}
    </div>
  );
}
