"use client";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function Counter() {
  const [daysCount, setDaysCount] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-04-07");
    const currentDate = new Date();
    const diffDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    setDaysCount(diffDays);
  }, []);

  const throwConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#ff1493", "#ff007f", "#ff85a2"]
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">💖 365 Jours Ensemble 💖</h2>
      <p className="text-xl">
        Han pasado <span className="text-pink-500 font-bold">{daysCount}</span> días desde el 7 de abril de 2024. 🥰
      </p>
      <button onClick={throwConfetti} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg">
        🎉 ¡Festejar!
      </button>
    </div>
  );
}
