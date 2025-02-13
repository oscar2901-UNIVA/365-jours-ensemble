"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  { original: "/images/photo1.jpg", thumbnail: "/images/photo1.jpg" },
  { original: "/images/photo2.jpg", thumbnail: "/images/photo2.jpg" },
  { original: "/images/photo3.jpg", thumbnail: "/images/photo3.jpg" }
];

export default function Gallery() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">📸 Nuestra Galería de Recuerdos</h2>
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={true} />
    </div>
  );
}
