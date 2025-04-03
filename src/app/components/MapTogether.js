"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function MapTogether() {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const L = await import("leaflet");

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/images/marker-icon-2x.png",
        iconUrl: "/images/marker-icon.png",
        shadowUrl: "/images/marker-shadow.png",
      });

      if (!mapRef.current && mapContainerRef.current) {
        mapRef.current = L.map(mapContainerRef.current).setView(
          [20.93660736628395, -103.39615067791014],
          5
        );

        // Capa del mapa
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);

        const loveTimeline = [
          // 2024
          {
            name: "✈️ Primer encuentro - Aeropuerto GDL",
            coords: [20.521, -103.31],
            date: "01/08/2023",
            type: "inicio",
            photo: "images/photos/aeropuerto-encuentro.jpeg",
          },
          {
            name: "💘 Cascadas de Huaxtla",
            coords: [20.93660736628395, -103.39615067791014],
            date: "02/03/2024",
            type: "confesion",
            photo: "images/photos/huaxtla.jpeg",
            desc: "El día que te dije 'Me gustas'",
          },
          {
            name: "🥂 Primera Cita - Altezza",
            coords: [20.674531639231738, -103.34696240191452],
            date: "07/03/2024",
            type: "primera-cita",
            photo: "images/photos/primeraCita.jpeg",
            desc: "Nuestro primera cita",
          },
          {
            name: "💍 Noviazgo - Puerto Vallarta",
            coords: [20.6534, -105.2253],
            date: "07/04/2024",
            type: "aniversario",
            photo: "images/photos/puerto-vallarta.jpg",
          },
          {
            name: "🌴 Costa Rica - Primer viaje",
            coords: [9.7489, -83.7534],
            date: "10/05/2024",
            type: "viaje",
            photo: "images/photos/costa-rica.jpeg",
          },
          {
            name: "🏄‍♀️ Puerto Escondido",
            coords: [15.8573, -97.07],
            date: "08/06/2024",
            type: "playa",
            photo: "images/photos/puerto-escondido.jpeg",
          },
          {
            name: "🏰 Querétaro juntos",
            coords: [20.5888, -100.3899],
            date: "14/06/2024",
            type: "cultural",
            photo: "images/photos/queretaro.jpeg",
          },
          {
            name: "😢 Despedida - Aero GDL",
            coords: [20.5218, -103.3112],
            date: "20/06/2024",
            type: "despedida",
            photo: "images/photos/despedida.jpeg",
          },

          {
            name: "❤️ Reencuentro - Lyon",
            coords: [45.7256, 5.0811],
            date: "16/10/2024",
            type: "reunion",
            photo: "images/photos/lyon.jpeg",
          },
          {
            name: "🗼 Torre Eiffel - París",
            coords: [48.8584, 2.2945],
            date: "19/10/2024",
            type: "viaje",
            photo: "images/photos/paris.jpeg",
          },
          {
            name: "⚽ Partido PSG - Parc des Princes",
            coords: [48.8414, 2.253],
            date: "19/10/2024",
            type: "deporte",
            photo: "images/photos/psg.jpeg",
          },
        ].sort((a, b) => {
          const dateA = a.date.split("/").reverse().join("-");
          const dateB = b.date.split("/").reverse().join("-");
          return new Date(dateA) - new Date(dateB);
        });

        // Iconos personalizados por categoría
        const customIcons = {
          confesion: { emoji: "💌", color: "#ff6b6b" },
          "primera-cita": { emoji: "🥂", color: "#f06595" },
          inicio: { emoji: "✈️", color: "#74b9ff" },
          romance: { emoji: "💋", color: "#e84393" },
          aniversario: { emoji: "💍", color: "#a29bfe" },
          viaje: { emoji: "🌴", color: "#00b894" },
          diversion: { emoji: "🎭", color: "#fd79a8" },
          playa: { emoji: "🏄‍♀️", color: "#0984e3" },
          cultural: { emoji: "🏰", color: "#6c5ce7" },
          despedida: { emoji: "😢", color: "#636e72" },
          reunion: { emoji: "❤️", color: "#d63031" },
          deporte: { emoji: "⚽", color: "#00cec9" },
        };

        // Añadir marcadores al mapa
        loveTimeline.forEach((place, index) => {
          const { emoji, color } = customIcons[place.type];

          const marker = L.marker(place.coords, {
            icon: L.divIcon({
              html: `
                <div style="
                  background: ${color};
                  width: 42px;
                  height: 42px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 20px;
                  border: 3px solid white;
                  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                  transform: rotate(${index * 15}deg);
                ">
                  ${emoji}
                </div>
              `,
              className: "",
              iconSize: [42, 42],
            }),
          }).addTo(mapRef.current);

          // Contenido del popup
          let popupContent = `
            <div style="
              font-family: -apple-system, sans-serif;
              max-width: 250px;
            ">
              <div style="
                background: ${color};
                color: white;
                padding: 8px 12px;
                border-radius: 8px 8px 0 0;
                font-weight: bold;
              ">
                ${place.name}
              </div>
              <div style="padding: 12px;">
                <p style="margin: 0 0 8px 0; color: #666;">
                  📅 ${place.date}${place.desc ? `<br>${place.desc}` : ""}
                </p>
          `;

          if (place.photo) {
            popupContent += `
              <img src="${place.photo}" style="
                width: 100%;
                height: auto;
                max-height: 200px;
                object-fit: cover;
                border-radius: 6px;
                border: 1px solid #eee;
                margin-bottom: 8px;
              "/>
            `;
          }

          popupContent += `</div></div>`;

          marker.bindPopup(popupContent);
        });

        // Línea que conecta los hitos en orden cronológico
        const line = L.polyline(
          loveTimeline.map((p) => p.coords),
          {
            color: "#ff69b4",
            weight: 3,
            dashArray: "10, 5",
            opacity: 0.7,
          }
        ).addTo(mapRef.current);
      }
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-rose-700">
        Nuestra Historia de Amor
      </h1>
      <p className="text-center text-lg text-rose-600 mb-8">
        Cada marcador representa un momento especial en nuestra relación
      </p>

      <div
        ref={mapContainerRef}
        className="h-[700px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white"
      />

      <div className="mt-8 text-center text-sm text-gray-500">
        Haz clic en cada marcador para ver los detalles
      </div>
    </div>
  );
}
