"use client";
import { useState, useEffect } from "react";

const images = ["/bg-spring3.jpg", "/spring.jpg", "/rose.avif"];

export default function BackgroundSlider() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 max-w-screen relative">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImage ? 1 : 0,
            zIndex: index === currentImage ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
