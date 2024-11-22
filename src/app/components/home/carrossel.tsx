"use client";

import React, { useState } from "react";
import { Discord } from "../images/discord";
import { GitHub } from "../images/github";
import { SkelectonImage } from "../images/skelecton-image";

export const Carrossel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full overflow-hidden h-40 lg:h-64 mt-7 lg:mt-24 flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`flex items-center justify-center animate-[center-bounce_10s_ease-in-out_infinite] ${
            isHovered
              ? "[animation-play-state:paused]"
              : "[animation-play-state:running]"
          }`}
        >
          <div className={`gap-4 lg:flex hidden`}>
            <SkelectonImage size={140} />
            <SkelectonImage size={140} />
            <SkelectonImage size={140} />
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Discord size={150} />
            </div>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <GitHub size={150} />
            </div>
            <SkelectonImage size={140} />
            <SkelectonImage size={140} />
            <SkelectonImage size={140} />
          </div>

          <div className="gap-4 flex lg:hidden w-full">
            <SkelectonImage size={60} />
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Discord size={140} />
            </div>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <GitHub size={140} />
            </div>
            <SkelectonImage size={60} />
          </div>
        </div>
      </div>
    </div>
  );
};
