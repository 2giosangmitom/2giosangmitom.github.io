"use client"
import { useEffect, useState } from "react";

export default function () {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="fixed -z-10 transition w-[35rem] h-[35rem] bg-blue-950 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
