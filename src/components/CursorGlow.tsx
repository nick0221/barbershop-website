"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Only on desktop with mouse
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsVisible(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[55]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gold/4 blur-[100px]"
        style={{
          left: springX,
          top: springY,
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
}
