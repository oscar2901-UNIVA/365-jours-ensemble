"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const places = [
  { name: "📍 Lugar donde nos conocimos", coords: [48.8566, 2.3522] }, // París (ejemplo)
  { name: "💑 Nuestro primer viaje", coords: [41.9028, 12.4964] }, // Roma (ejemplo)
  { name: "🍽️ Nuestra primera cena juntos", coords: [40.7128, -74.0060] } // Nueva York (ejemplo)
];

export default function Map() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">📍 Nuestros Lugares Especiales</h2>

      <MapContainer center={[48.8566, 2.3522]} zoom={5} className="h-[500px] w-full rounded-lg shadow-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {places.map((place, index) => (
          <Marker key={index} position={place.coords}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
