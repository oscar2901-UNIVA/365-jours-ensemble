"use client";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

const FloatingHearts = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [pieces, setPieces] = useState(300);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);

      const timer = setTimeout(() => {
        setPieces(0);
      }, 7000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Confetti
      width={windowSize.width || 1920} // Evita errores en SSR
      height={windowSize.height || 1080}
      numberOfPieces={pieces}
      recycle={false}
      gravity={0.2}
      wind={0}
      colors={["#ff0000", "#ff69b4", "#ff4d4d"]}
      drawShape={(ctx) => {
        ctx.scale(0.3, 0.3);
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
        ctx.scale(3.3, 3.3);
      }}
    />
  );
};

export default FloatingHearts;
