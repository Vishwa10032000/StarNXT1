import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "./Testimonial.css";
import StarsIcon from "../../assets/icons/StarsIcon.png";
import profileOne from "../../assets/images/testimonials/profiles/profile1.jpg";


const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemUp = (reduce = false) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] },
  },
});

const slideContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const Testimonial = () => {
  const reduce = useReducedMotion();

  const testimonials = [
    {
      id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      position: "CEO, Company",
      profile: profileOne,
      image: profileOne,
    },
    {
      id: 2,
      description: "Aliquam bibendum felis sed magna tincidunt.",
      name: "Jane Smith",
      position: "Founder, Startup",
      profile: profileOne,
      image: profileOne,
    },
    {
      id: 3,
      description: "Curabitur id libero vel odio volutpat viverra.",
      name: "Michael Johnson",
      position: "Manager, Corp",
      profile: profileOne,
      image: profileOne,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  // autoplay
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testimonials.length]);

  const t = testimonials[activeIndex];

  return (
    <motion.div
      className="testimonial"
      variants={sectionContainer}
      initial="hidden"
      whileInView="show"            // animate when in view
      viewport={{ once: true, amount: 0.4 }} // and only once
    >
      {/* Title + Subtitle */}
      <motion.p className="testimonial-title" variants={itemUp(reduce)}>
        <img src={StarsIcon} width={34} height={34} alt="Stars Icon" />
        Testimonial
      </motion.p>

      <motion.h2 className="testimonial-subtitle" variants={itemUp(reduce)}>
        Trusted by Businesses & Professionals
      </motion.h2>

      {/* Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          className="testimonial-wrapper"
          variants={slideContainer}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="row">
            <div className="col-md-6">
              <motion.div
                className="testimonial-image-container"
                variants={itemUp(reduce)}
              >
                <img
                  src={t.image}
                  alt={`${t.name} testimonial`}
                  className="testimonial-image"
                  width="100%"
                />
              </motion.div>
            </div>

            <div className="col-md-6">
              <motion.div className="testimonial-card" variants={itemUp(reduce)}>
                <motion.p
                  className="testimonial-card-description"
                  variants={itemUp(reduce)}
                >
                  {t.description}
                </motion.p>

                <motion.div
                  className="testimonial-card-profile"
                  variants={itemUp(reduce)}
                >
                  <img
                    src={t.profile}
                    className="testimonial-card-profile-image"
                    alt={`${t.name} profile`}
                  />
                  <div className="testimonial-card-profile-text">
                    <h3 className="testimonial-card-profile-name">{t.name}</h3>
                    <p className="testimonial-card-profile-position">
                      {t.position}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <motion.div
        className="testimonial-indicators"
        variants={itemUp(reduce)}
        role="tablist"
        aria-label="Testimonials"
      >
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`testimonial-panel-${index}`}
            className={`line ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            variants={itemUp(reduce)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
