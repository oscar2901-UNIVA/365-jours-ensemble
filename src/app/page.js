"use client"; 

import { useState, useEffect } from "react";

export default function Home() {
  const [daysCount, setDaysCount] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-04-07");
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    setDaysCount(diffDays);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
      <h1 className="text-4xl font-bold">💖 365 Jours Ensemble 💖</h1>
      <p className="text-2xl">
        Han pasado <span className="text-pink-500 font-bold">{daysCount}</span> días desde el 7 de abril de 2024. 🥰
      </p>
    </div>
  );
}
