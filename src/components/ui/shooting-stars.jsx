"use client";
import React, { useEffect, useRef } from "react";

export const ShootingStars = ({
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 2,
  className,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    class ShootingStar {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.length = Math.random() * 120 + 40;
        // Slower speed for a more elegant look
        this.speed = Math.random() * 1.5 + 0.5;
        
        // Angle between 20 and 40 degrees (down-right)
        this.angle = (Math.random() * 20 + 20) * (Math.PI / 180); 
        this.opacity = 1;
        // Increase wait time so they don't spawn as frequently
        this.wait = initial ? Math.random() * 400 : Math.random() * 400 + 100;

        if (initial) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          // Spawn from top or left edge
          if (Math.random() > 0.5) {
            this.x = -this.length;
            this.y = Math.random() * canvas.height;
          } else {
            this.x = Math.random() * canvas.width;
            this.y = -this.length;
          }
        }
      }

      update() {
        if (this.wait > 0) {
          this.wait--;
          return;
        }

        // Move in the direction of the angle (Down-Right)
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);

        // If it goes off screen, reset it
        if (this.x > canvas.width + this.length || this.y > canvas.height + this.length) {
          this.reset();
        }
      }

      draw() {
        if (this.wait > 0) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // The gradient starts at the head (0,0) and fades to the tail (-length, 0)
        const gradient = ctx.createLinearGradient(0, 0, -this.length, 0);
        gradient.addColorStop(0, starColor);
        gradient.addColorStop(0.1, trailColor);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        
        // Draw the tail
        ctx.beginPath();
        ctx.moveTo(0, starHeight / 2);
        ctx.lineTo(-this.length, 0);
        ctx.lineTo(0, -starHeight / 2);
        ctx.closePath();
        ctx.fill();

        // Draw the bright head
        ctx.beginPath();
        ctx.arc(0, 0, starHeight, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.fill();

        ctx.restore();
      }
    }

    let stars = [];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Initialize stars once canvas has size
        stars = Array.from({ length: 15 }, () => new ShootingStar());
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starColor, trailColor, starWidth, starHeight]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className || ""}`}
    />
  );
};
