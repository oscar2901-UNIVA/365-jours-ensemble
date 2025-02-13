"use client";
import { useSpring, animated } from "@react-spring/web";

export default function Playlist() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <animated.div style={fadeIn} className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">
        🎶 Nuestra Playlist Especial 🎶
      </h2>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/082LNLMz0QbeoBGOFx5JqW?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </animated.div>
  );
}
