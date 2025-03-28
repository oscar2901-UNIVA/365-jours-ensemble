"use client";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

const FloatingHearts = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [pieces, setPieces] = useState(300); // 🔥 Más corazones al inicio (300 en lugar de 100)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    // 🔹 Detener los corazones después de 7 segundos
    const timer = setTimeout(() => {
      setPieces(0); // ❌ Detiene la generación de nuevos corazones
    }, 7000); // ⏳ Ahora dura 7 segundos

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={pieces} // 🎈 Más corazones en pantalla
      recycle={false} // ❌ No se regeneran después de caer
      gravity={0.2} // 📉 Caen suavemente
      wind={0}
      colors={["#ff0000", "#ff69b4", "#ff4d4d"]}
      drawShape={(ctx) => {
        ctx.scale(0.3, 0.3); // ❤️ Hacer los corazones más pequeños
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
        ctx.scale(3.3, 3.3); // 🔄 Restaurar tamaño normal
      }}
    />
  );
};

export default FloatingHearts;
