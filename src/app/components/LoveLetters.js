"use client";
import { useState, useEffect } from "react";
import loveLetters from "../data/loveLetters.json";

export default function LoveLetters() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const startDate = new Date("2024-04-07");
    const today = new Date();
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    const letter = loveLetters.find((l) => l.day === (diffDays % loveLetters.length) + 1);
    setMessage(letter ? letter.message : "Te amo cada día más. ❤️");
  }, []);

  return (
    <div className="p-8 text-center bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-4">💌 Carta de Amor del Día</h2>
      <p className="text-xl italic text-pink-500">{message}</p>
    </div>
  );
}
