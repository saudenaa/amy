import React, { useEffect, useRef } from "react";

/**
 * Lightweight trailing "snake" cursor made of dots that ease toward the pointer.
 * Respects reduced-motion.
 */
export default function Cursor() {
  const dotsRef = useRef([]);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: pos.current.x, y: pos.current.y });
  const raf = useRef(0);

  useEffect(() => {
    const prefersReduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) return;

    const dots = Array.from(document.querySelectorAll(".cursor-dot"));
    dotsRef.current = dots;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("pointermove", onMove);

    const tick = () => {
      // smooth follow
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      dotsRef.current.forEach((el, i) => {
        const k = 1 - i / dotsRef.current.length;
        const dx = (target.current.x - pos.current.x) * k;
        const dy = (target.current.y - pos.current.y) * k;
        el.style.transform = `translate3d(${pos.current.x + dx}px, ${
          pos.current.y + dy
        }px, 0)`;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <span className="cursor-dot" key={i} />
      ))}
    </>
  );
}
