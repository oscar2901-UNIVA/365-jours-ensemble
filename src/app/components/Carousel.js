"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import styles from "./style/Carousel.module.css";
import { useRef } from "react";

// Imágenes estáticas que ya tenías
import imagen1 from "../../images/aeropuerto-encuentro.jpeg";
import imagen2 from "../../images/costa-rica.jpeg";
import imagen3 from "../../images/despedida.jpeg";
import imagen4 from "../../images/huaxtla.jpeg";
import imagen5 from "../../images/image5.jpeg";
import imagen6 from "../../images/paris.jpeg";
import imagen7 from "../../images/primeraCita.jpeg";
import imagen8 from "../../images/psg.jpeg";
import imagen9 from "../../images/puerto-escondido.jpeg";
import imagen10 from "../../images/puerto-vallarta.jpg";
import imagen11 from "../../images/queretaro.jpeg";

// Imágenes dinámicas (image1.jpeg hasta image45.jpeg)
const dynamicImages = Array.from({ length: 43 }, (_, i) =>
  require(`../../images/image${i + 1}.jpeg`)
);

// Unificamos todas las imágenes
const images = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
  imagen10,
  imagen11,
  ...dynamicImages,
];

export default function Carousel() {
  const timer = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    created() {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
    },
    destroyed() {
      clearInterval(timer.current);
    },
  });

  return (
    <>
      <h2 className="text-3xl font-bold mb-4 text-[#f783ac] text-center mt-20">
        Momentos importantes
      </h2>
      <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
        {images.map((img, idx) => (
          <div key={idx} className={`keen-slider__slide ${styles.slide}`}>
            <Image
              src={img}
              alt={`Foto ${idx + 1}`}
              fill
              className={styles.image}
              priority={idx === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
