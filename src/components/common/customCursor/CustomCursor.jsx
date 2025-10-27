import { useEffect, useRef } from "react";
import './CustomCursor.css';

export default function CustomCursor({
  size = 40,
  borderColor = "#fff",
  speed = 0.17, // 0 = smoother, 1 = instant
}) {
  const circleRef = useRef(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    const mouse = { x: 0, y: 0 };
    const prevMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    let currentScale = 0;
    let currentAngle = 0;
    let rafId;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      // MOVE (lerp)
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;
      const translate = `translate(${circle.x}px, ${circle.y}px)`;

      // SQUEEZE
      const dx = mouse.x - prevMouse.x;
      const dy = mouse.y - prevMouse.y;
      prevMouse.x = mouse.x;
      prevMouse.y = mouse.y;

      const velocity = Math.min(Math.hypot(dx, dy) * 4, 150);
      const targetScale = (velocity / 150) * 0.5; // 0..0.5
      currentScale += (targetScale - currentScale) * speed;
      const scale = `scale(${1 + currentScale}, ${1 - currentScale})`;

      // ROTATE
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      if (velocity > 20) currentAngle = angle;
      const rotate = `rotate(${currentAngle}deg)`;

      el.style.transform = `${translate} ${rotate} ${scale}`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    // Optional: hide on touch devices
    const onTouchStart = () => (el.style.display = "none");
    const onMouseEnter = () => (el.style.display = "block");
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter);

    // apply runtime CSS vars
    el.style.setProperty("--circle-size", `${size}px`);
    el.style.setProperty("--circle-border", borderColor);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [size, borderColor, speed]);

  return <div ref={circleRef} className="custom-cursor-circle" />;
}
