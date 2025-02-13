"use client";
import Counter from "./components/Counter";
import Playlist from "./components/Playlist";
import Timeline from "./components/Timeline";
import Map from "./components/Map";
import Gallery from "./components/Gallery";
import LoveLetters from "./components/LoveLetters";
import TypewriterEffect from "./components/Typewriter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <Counter />
      <Playlist />
      <Timeline />
      <Map />
      <Gallery />
      <LoveLetters />
      <TypewriterEffect />
    </div>
  );
}
