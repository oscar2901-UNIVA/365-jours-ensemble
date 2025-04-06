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

  useEffect(() => {
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

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6 relative overflow-hidden">
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
        <div className="text-2xl md:text-3xl font-bold mb-6 min-h-[5rem] max-w-[20rem]">
          <Typewriter
            options={{
              strings: [
                "<span style='color: #f783ac'>No pensaba que funcionara así, no buscaba amor y un día te encontré.</span>",
                "<span style='color: #f783ac'>¡Te amo más que ayer, menos que mañana!</span>",
                "<span style='color: #f783ac'>La distancia no es nada cuando el amor es verdadero</span>",
                "<span style='color: #f783ac'>Eres mi persona favorita en todo el mundo </span>",
                "<span style='color: #f783ac'>Juntos aunque sea en la distancia</span>",
                "<span style='color: #f783ac'>je t'aime mon amour</span>",
                "<span style='color: #f783ac'>Pronto estaré en tus brazos</span>",
                "<span style='color: #f783ac'>Eres mi sueño hecho realidad</span>",
                "<span style='color: #f783ac'>Mi corazón siempre está contigo</span>",
                "<span style='color: #f783ac'>Eras esa historia que no quiero saber el final.</span>",
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
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200 mb-6 w-[20rem]"
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
      </motion.div>
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
