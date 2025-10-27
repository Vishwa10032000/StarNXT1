// Hero.jsx
import { useRef } from "react";
import "./Hero.css";
import heroOne from "../../assets/images/hero/hero1.jpg";
import heroTwo from "../../assets/images/hero/hero2.jpg";
import heroThree from "../../assets/images/hero/hero3.jpg";
import { motion, useMotionValue, useSpring } from "framer-motion";

// --- Smooth tilt that eases OUT properly ---
function SmartTilt({ children, max = 15, scale = 1.03, className }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sc = useMotionValue(1);

  const rxs = useSpring(rx, { stiffness: 170, damping: 20, mass: 0.4 });
  const rys = useSpring(ry, { stiffness: 170, damping: 20, mass: 0.4 });
  const scs = useSpring(sc, { stiffness: 170, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max);     // yaw
    rx.set(-py * max);    // pitch
  };

  const onEnter = () => sc.set(scale);
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    sc.set(1);
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.div
        style={{
          rotateX: rxs,
          rotateY: rys,
          scale: scs,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const defaultOptions = {
  reverse: true,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const heroData = {
    heading: "Smart Workforce Solutions, Built for Modern Businesses.",
    subheading:
      "From global talent placement to HR outsourcing — we deliver tailored, efficient, and compliant recruitment services across industries and borders.",
    images: [
      { id: 1, src: heroOne, alt: "hero-1" },
      { id: 2, src: heroTwo, alt: "hero-2" },
      { id: 3, src: heroThree, alt: "hero-3" },
    ],
  };

  return (
    <motion.section
      id="home"
      className="hero"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="hero-content">
        <motion.h1 className="hero-heading" variants={itemUp}>
          {heroData.heading}
        </motion.h1>
        <motion.p className="hero-subheading" variants={itemUp}>
          {heroData.subheading}
        </motion.p>
      </div>

      <motion.div className="hero-images" variants={container}>
        {heroData.images.map((img) => (
          <SmartTilt className="hero-tilt" key={img.id} max={18} scale={1.04}>
            <motion.div className="hero-image-container" variants={itemUp}>
              <img src={img.src} alt={img.alt} className="hero-image" />
            </motion.div>
          </SmartTilt>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
