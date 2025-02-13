"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Cargar MapContainer y componentes de Leaflet solo en el cliente
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const places = [
  { name: "📍 Lugar donde nos conocimos", coords: [48.8566, 2.3522] }, // París
  { name: "💑 Nuestro primer viaje", coords: [41.9028, 12.4964] }, // Roma
  { name: "🍽️ Nuestra primera cena juntos", coords: [40.7128, -74.0060] } // Nueva York
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
