"use client";
import { useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

export default function Counter() {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Calcula el tiempo exacto juntos (CORREGIDO)
  useEffect(() => {
    // Fecha de aniversario a la 1:00 AM (UTC)
    const anniversaryDate = new Date("2024-04-07T01:00:00Z").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - anniversaryDate;

      setTimeTogether({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Confetti mejorado con efectos especiales
  const throwConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#ff1493", "#ff007f", "#ff85a2", "#f72585"],
      shapes: ["circle", "heart"],
    });

    // Confetti adicional con dirección diferente
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4"],
      });
    }, 250);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff1493"],
      });
    }, 400);

    // Efecto de corazones gigantes
    if (clickCount > 2) {
      confetti({
        particleCount: 5,
        spread: 70,
        origin: { y: 0.3 },
        shapes: ["heart"],
        scalar: 3,
      });
    }

    setClickCount((prev) => prev + 1);
    setShowLoveMessage(true);
    setTimeout(() => setShowLoveMessage(false), 5000); // Mensajes duran 5 segundos
  }, [clickCount]);

  // Mensajes aleatorios de amor (actualizados)
  const loveMessages = [
    "¡Te amo más que ayer! 💖",
    "La distancia no es nada cuando el amor es verdadero ✈️",
    "Eres mi persona favorita en todo el mundo 🌎",
    "Juntos aunque sea en la distancia 💌",
    "Mon amour, je t'attends avec impatience 🗼",
    "Pronto estaré en tus brazos 🤗",
    "Eres mi sueño hecho realidad 🌟",
    "De México a Francia, mi corazón viaja contigo 💘",
  ];

  const randomMessage =
    loveMessages[Math.floor(Math.random() * loveMessages.length)];

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Corazones flotantes mejorados */}

      {/* Efecto de brillo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-pink-200 opacity-20 blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-rose-300 opacity-15 blur-3xl animate-float-delay"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-md w-full"
      >
        {/* Typewriter con animación lenta */}
        <div className="text-2xl md:text-3xl font-bold mb-6 min-h-[3rem]">
          <Typewriter
            options={{
              strings: [
                "<span style='color: #e83b8e; text-shadow: 0 2px 4px rgba(232, 59, 142, 0.3)'>❤️ Un Amor Sin Fronteras</span>",
                "<span style='color: #d6336c'>365 Días de Felicidad</span>",
                "<span style='color: #c2255c'>Mon Cœur Est à Toi</span>",
                "<span style='color: #e64980'>De México a Francia con Amor</span>",
                "<span style='color: #f06595'>Je t'aime plus chaque jour</span>",
                "<span style='color: #d6336c'>Amor a Distancia, Corazón Cerca</span>",
                "<span style='color: #e83b8e'>7 Avril: Notre Jour Spécial</span>",
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 30,
              cursor: "<span style='color: #f783ac'>💘</span>",
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).changeDelay(60).start();
            }}
          />
        </div>

        {/* Contador de tiempo con animación */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200 mb-6"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Nuestro tiempo juntos
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <TimeUnit value={timeTogether.days} label="Días" emoji="🌹" />
            <TimeUnit value={timeTogether.hours} label="Horas" emoji="💕" />
            <TimeUnit value={timeTogether.minutes} label="Minutos" emoji="🕊️" />
            <TimeUnit
              value={timeTogether.seconds}
              label="Segundos"
              emoji="⚡"
            />
          </div>
        </motion.div>

        {/* Mensaje especial */}
        <p className="text-lg mb-6 text-pink-700">
          Desde el <span className="font-bold">7 de abril de 2024</span>, cada
          instante contigo ha sido mágico ✨
        </p>

        {/* Botón con efecto */}
     {/*    <motion.button
          onClick={throwConfetti}
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)",
          }}
          className="relative mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full shadow-lg font-medium text-lg overflow-hidden"
        >
          <span className="relative z-10">🎉 ¡Celebrar nuestro amor!</span>
          <motion.span
            className="absolute inset-0 bg-white opacity-0 hover:opacity-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
          />
        </motion.button> */}

        {/* Mensaje de amor que aparece */}
        <AnimatePresence>
          {showLoveMessage && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-3 bg-pink-100 border border-pink-300 rounded-lg text-pink-700"
            >
              {randomMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Efecto especial después de varios clicks */}
      {clickCount > 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-pink-50/50"></div>
        </motion.div>
      )}
    </div>
  );
}

function TimeUnit({ value, label, emoji }) {
  return (
    <motion.div
      className="bg-pink-50/50 rounded-xl p-3"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl font-bold text-rose-600 flex items-center justify-center gap-2">
        {value}
        <span className="text-2xl">{emoji}</span>
      </div>
      <div className="text-sm text-pink-700 mt-1">{label}</div>
    </motion.div>
  );
}
