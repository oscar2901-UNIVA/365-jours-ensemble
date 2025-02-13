"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <div className="p-8 text-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-4">💖 Un mensaje especial para ti</h2>
      <div className="text-2xl text-pink-500 font-semibold">
        <Typewriter
          options={{
            strings: [
              "Eres lo mejor que me ha pasado. ❤️",
              "Cada día a tu lado es un regalo. 🎁",
              "Te amo más de lo que las palabras pueden expresar. 💕"
            ],
            autoStart: true,
            loop: true,
            delay: 50
          }}
        />
      </div>
    </div>
  );
}
