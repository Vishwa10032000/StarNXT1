import { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaChevronUp,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function ScrollTopMenu({
  size = 54,
  stroke = 4,
  showAt = 160,
  bottom = 24,
  right = 24,
  spacing = 12,
}) {
  const { scrollY, scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 20, mass: 0.3 });

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > showAt)
    setOpen(y > showAt && open)
});

  const radius = (size - stroke) / 2 - 2;
  const circumference = 2 * Math.PI * radius;

  const handleTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleMenu = () => setOpen((o) => !o);

  const socials = [
    { id: "fb", icon: <FaFacebookF size={18} />, url: "https://facebook.com" },
    { id: "tw", icon: <FaTwitter size={18} />, url: "https://twitter.com" },
    { id: "ln", icon: <FaLinkedinIn size={20} />, url: "https://linkedin.com" },
    { id: "ig", icon: <FaInstagram size={22} />, url: "https://instagram.com" },
    { id: "ig", icon: <FaWhatsapp size={24} />, url: "https://instagram.com" },

  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom,
        right,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: spacing, // gap between ArrowUp and Menu button
      }}
    >
      {/* Arrow Up button (always aligned) */}
      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={handleTop}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "rgba(17,17,17,0.5)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          border: "none",
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
          color: "#fff",
        }}
      >
        <FaChevronUp />
      </motion.button>

      {/* Menu stack (relative container so absolute children align to it) */}
      <div style={{ position: "relative", width: size, height: size }}>
        {/* Social items absolutely stacked above the main button */}
        {socials.map((s, i) => {
          const offset = (i + 1) * (size + spacing);
          return (
            <motion.a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={open ? { opacity: 1, scale: 1, y: -offset } : { opacity: 0, scale: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: size - 10,
                height: size - 10,
                borderRadius: "50%",
                background: "var(--primary-color)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              }}
            >
              {s.icon}
            </motion.a>
          );
        })}

        {/* Main menu button with progress ring */}
        <motion.button
          type="button"
          onClick={toggleMenu}
          aria-label="Open social menu"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          style={{
            position: "absolute",
            inset: 0, // fill the 54x54 container
            borderRadius: "50%",
            background: "rgba(17,17,17,0.5)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            border: "none",
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
          }}
        >
          {/* Progress Ring */}
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            style={{ position: "absolute", inset: 0 }}
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={stroke}
              fill="none"
            />
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="var(--primary-color)"
              strokeWidth={stroke}
              fill="none"
              strokeLinecap="round"
              style={{
                pathLength: smooth,
                rotate: -90,
                originX: "50%",
                originY: "50%",
              }}
              strokeDasharray={circumference}
              strokeDashoffset={0}
            />
          </svg>

          {/* + rotates to x when open */}
          <motion.span
            aria-hidden
            style={{ fontSize: 18, color: "white", lineHeight: 1, zIndex: 1 }}
            initial={false}
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <FaPlus size={18} />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
