"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHeart, FaPlane, FaGift, FaMusic, FaCamera } from "react-icons/fa";

const timelineData = [
  { date: "7 Abril 2024", title: "Nos conocimos ❤️", icon: <FaHeart />, color: "#e91e63" },
  { date: "15 Mayo 2024", title: "Nuestro primer viaje juntos ✈️", icon: <FaPlane />, color: "#3f51b5" },
  { date: "25 Diciembre 2024", title: "Nuestra primera Navidad 🎁", icon: <FaGift />, color: "#ff9800" },
  { date: "14 Febrero 2025", title: "Nuestra canción especial 🎶", icon: <FaMusic />, color: "#009688" },
  { date: "13 Marzo 2025", title: "Nuestra mejor foto 📸", icon: <FaCamera />, color: "#607d8b" }
];

export default function Timeline() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">📅 Nuestra Historia</h2>

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
      </VerticalTimeline>
    </div>
  );
}
