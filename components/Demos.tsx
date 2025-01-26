"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Demos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const scrollHintTimer = setTimeout(() => {
      setShowScrollHint(false);
    }, 3000);

    return () => clearTimeout(scrollHintTimer);
  }, []);

  const slides = [
    {
      background: "bg-gradient-to-b from-sky-600 to-blue-900 text-white",
      title: "PS4 Controller",
      iframe: "./splats/controller-viewer.html",
    },
    {
      background: "bg-gradient-to-b from-blue-500 to-blue-800 text-white",
      title: "Red Backpack",
      iframe: "./splats/backpack-viewer.html",
    },
    {
      background: "bg-gradient-to-b from-blue-800 to-blue-950 text-white",
      title: "Outdoor Chair",
      iframe: "./splats/chair-viewer.html",
    },
    {
      background: "bg-gradient-to-b from-blue-300 to-blue-600 text-white",
      title: "Laptop",
      iframe: "./splats/laptop-viewer.html",
    },
    {
      background: "bg-gradient-to-b from-cyan-500 to-blue-800 text-white",
      title: "Sunglasses",
      iframe: "./splats/sunglasses-viewer.html",
    },
    {
      background: "bg-gradient-to-b from-indigo-500 to-blue-800 text-white",
      title: "Mosquito Repellant",
      iframe: "./splats/spray-viewer.html",
    },
  ];

  return (
    <div className="relative h-screen overflow-y-scroll scroll-smooth">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            sticky top-0 h-screen flex flex-col items-center justify-center 
            ${slide.background} relative
          `}
        >
          <h2 className="text-4xl font-bold mb-8">{slide.title}</h2>

          <iframe src={slide.iframe} height="60%" width="60%" />

          <div
            className={`
              absolute bottom-10 flex flex-col items-center 
              transition-all duration-500 
              "opacity-100 animate-bounce" : "opacity-50"}
            `}
          >
            <p className="mb-2 text-sm">Scroll Down</p>
            <ChevronDown className="animate-bounce" />
          </div>
        </div>
      ))}
    </div>
  );
}
