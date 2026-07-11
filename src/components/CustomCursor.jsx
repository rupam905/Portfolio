import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const theme = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest(".card-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  // Light theme: vivid indigo, fully solid and visible
  const lightColors = {
    bgHover: "rgba(99, 102, 241, 0.2)",
    bgNormal: "rgba(99, 102, 241, 1)",
    borderHover: "2px solid rgba(99, 102, 241, 1)",
    shadowHover: "0 0 24px 6px rgba(99, 102, 241, 0.5)",
    shadowNormal: "0 0 12px 4px rgba(99, 102, 241, 0.7)",
  };

  // Dark theme: glowing violet
  const darkColors = {
    bgHover: "rgba(167, 139, 250, 0.2)",
    bgNormal: "rgba(139, 92, 246, 0.8)",
    borderHover: "2px solid rgba(167, 139, 250, 1)",
    shadowHover: "0 0 24px 6px rgba(167, 139, 250, 0.6)",
    shadowNormal: "0 0 12px 4px rgba(139, 92, 246, 0.9)",
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 8),
        y: mousePosition.y - (isHovering ? 20 : 8),
        width: isHovering ? 40 : 16,
        height: isHovering ? 40 : 16,
        backgroundColor: isHovering ? colors.bgHover : colors.bgNormal,
        border: isHovering ? colors.borderHover : "2px solid transparent",
        boxShadow: isHovering ? colors.shadowHover : colors.shadowNormal,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.08,
      }}
    />
  );
};
