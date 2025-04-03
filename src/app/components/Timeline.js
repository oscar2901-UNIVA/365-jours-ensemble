"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaHeart,
  FaPlane,
  FaGift,
  FaMusic,
  FaCamera,
  FaFlag,
} from "react-icons/fa";

const timelineData = [
  {
    date: "1 Agosto 2023",
    title: "Primer encuentro en GDL ✈️",
    icon: <FaPlane />,
    color: "#74b9ff",
  },
  {
    date: "2 Marzo 2024",
    title: "Te dije 'Me gustas' 💌",
    icon: <FaHeart />,
    color: "#ff6b6b",
  },
  {
    date: "7 Marzo 2024",
    title: "Nuestra primera cita 🥂",
    icon: <FaHeart />,
    color: "#f06595",
  },
  {
    date: "7 Abril 2024",
    title: "Empezamos nuestra relación 💍",
    icon: <FaGift />,
    color: "#a29bfe",
  },
  {
    date: "10 Mayo 2024",
    title: "Nuestro primer viaje: Costa Rica 🌴",
    icon: <FaPlane />,
    color: "#00b894",
  },
  {
    date: "8 Junio 2024",
    title: "Puerto Escondido juntos 🏄‍♀️",
    icon: <FaCamera />,
    color: "#0984e3",
  },
  {
    date: "14 Junio 2024",
    title: "Querétaro, más recuerdos 🏰",
    icon: <FaCamera />,
    color: "#6c5ce7",
  },
  {
    date: "20 Junio 2024",
    title: "Despedida en el aeropuerto 😢",
    icon: <FaPlane />,
    color: "#636e72",
  },
  {
    date: "16 Octubre 2024",
    title: "Reencuentro en Lyon ❤️",
    icon: <FaHeart />,
    color: "#d63031",
  },
  {
    date: "19 Octubre 2024",
    title: "Visita a la Torre Eiffel 🗼",
    icon: <FaCamera />,
    color: "#ff7675",
  },
  {
    date: "19 Octubre 2024",
    title: "Partido del PSG ⚽",
    icon: <FaFlag />,
    color: "#00cec9",
  },
  {
    date: "26 Octubre 2024",
    title: "Primera vez en Dijon 🐰 Conocí a Pistache",
    icon: <FaHeart />,
    color: "#e91e63",
  },
  {
    date: "7 Noviembre 2024",
    title: "Te regalé a Baguette 🥖 Un mes más juntos",
    icon: <FaGift />,
    color: "#ff9800",
  },
  {
    date: "16 Noviembre 2024",
    title: "Viajamos a Londres 🇬🇧",
    icon: <FaPlane />,
    color: "#3f51b5",
  },
  {
    date: "17 Noviembre 2024",
    title: "Partido en Inglaterra ⚽",
    icon: <FaFlag />,
    color: "#00cec9",
  },
  {
    date: "23 Noviembre 2024",
    title: "Conocimos la nieve en Chamonix ❄️",
    icon: <FaCamera />,
    color: "#2196f3",
  },
  {
    date: "5 Diciembre 2024",
    title: "Show de luces en Lyon 🎆",
    icon: <FaMusic />,
    color: "#9c27b0",
  },
  {
    date: "8 Diciembre 2024",
    title: "Otra despedida 😢",
    icon: <FaPlane />,
    color: "#607d8b",
  },
  {
    date: "25 Diciembre 2024",
    title: "Navidad a distancia 🎄 Pero juntos en corazón",
    icon: <FaGift />,
    color: "#8d6e63",
  },
  {
    date: "31 Diciembre 2024",
    title: "Año nuevo juntos en alma ✨",
    icon: <FaHeart />,
    color: "#6a1b9a",
  },
  {
    date: "9 Enero 2025",
    title: "Tu cumpleaños 🎂 Te dejé un regalo en tu depa",
    icon: <FaGift />,
    color: "#f06292",
  },
  {
    date: "25 Enero 2025",
    title: "Rumbo al reencuentro ✈️",
    icon: <FaPlane />,
    color: "#4db6ac",
  },
  {
    date: "29 Enero 2025",
    title: "Mi cumpleaños juntos ❤️",
    icon: <FaHeart />,
    color: "#f44336",
  },
  {
    date: "30 Enero 2025",
    title: "Primer partido del Lyon ⚽",
    icon: <FaFlag />,
    color: "#3f51b5",
  },
  {
    date: "2 Febrero 2025",
    title: "Volvimos a París 🗼",
    icon: <FaCamera />,
    color: "#7986cb",
  },
  {
    date: "10 Febrero 2025",
    title: "Un día difícil para ti... pero estuve contigo 💪",
    icon: <FaHeart />,
    color: "#c62828",
  },
  {
    date: "14 Febrero 2025",
    title: "Nuestro primer San Valentín juntos 💘",
    icon: <FaHeart />,
    color: "#d81b60",
  },
  
];

export default function Timeline() {
  return (
    <div className="p-8 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 text-rose-400">
        📅 Nuestra Historia
      </h2>

      <VerticalTimeline>
        {timelineData.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: event.color, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid ${event.color}` }}
            date={event.date}
            iconStyle={{ background: event.color, color: "#fff" }}
            icon={event.icon}
          >
            <h3 className="text-xl font-bold">{event.title}</h3>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "#f195d8", color: "#fff" }}
          icon={<FaHeart />}
        >
          <h3 className="text-xl font-bold">
            Y esto... solo es el comienzo 💫
          </h3>
          <p className="mt-2 text-green">
            Hemos compartido viajes, emociones, despedidas, reencuentros y
            muchas primeras veces. Cada paso nos ha unido más, y aunque ya hay
            una gran historia escrita, lo mejor aún está por venir. Gracias por
            cada momento, por tu amor, por tu risa y por ser mi hogar en
            cualquier parte del mundo. Te amo... y seguiremos construyendo esto,
            día con día 💖
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
