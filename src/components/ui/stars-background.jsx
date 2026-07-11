"use client";
import React, { useEffect, useRef } from "react";

export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let stars = [];

    const createStars = () => {
      const area = canvas.width * canvas.height;
      const numStars = Math.floor(area * starDensity);
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          twinkleSpeed:
            Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) + minTwinkleSpeed,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        if (allStarsTwinkle || Math.random() < twinkleProbability) {
          star.opacity += star.twinkleSpeed * 0.01 * star.twinkleDir;
          if (star.opacity >= 1) {
            star.opacity = 1;
            star.twinkleDir = -1;
          } else if (star.opacity <= 0) {
            star.opacity = 0;
            star.twinkleDir = 1;
          }
        }
        
        // Add slow upward drift
        star.y -= 0.1;
        if (star.y < 0) {
          star.y = canvas.height;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // In light theme, render soft indigo sparkles. In dark theme, render white stars.
        const isDark = document.documentElement.classList.contains("dark");
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${star.opacity})`
          : `rgba(99, 102, 241, ${star.opacity * 0.45})`;
        
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className || ""}`}
    />
  );
};
