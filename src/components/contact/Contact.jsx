import './Contact.css'
import { motion, useReducedMotion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

const itemUp = (reduce = false) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }
  }
})

const Contact = () => {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="contact"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}  // animate once when 50% visible
    >
      <motion.h2 className="contact-heading" variants={itemUp(reduce)}>
        Let's Bring Your<br />
        <span style={{ color: 'var(--primary-color)' }}>Dream Team</span> to Life.
      </motion.h2>

      <motion.div className="contact-form" variants={itemUp(reduce)}>
        <motion.h5 className="contact-form-heading" variants={itemUp(reduce)}>
          Book a Free Consultation
        </motion.h5>
        <motion.p className="contact-form-description" variants={itemUp(reduce)}>
          Ready to discuss your hiring needs or career goals? Get in touch with Macro Employment today.
        </motion.p>

        <motion.form className="row" variants={container} onSubmit={(e) => e.preventDefault()}>
          <motion.div className="col-md-6" variants={itemUp(reduce)}>
            <input className="form-input" type="text" placeholder="Name" />
          </motion.div>
          <motion.div className="col-md-6" variants={itemUp(reduce)}>
            <input className="form-input" type="email" placeholder="Email" />
          </motion.div>
          <motion.div className="col-md-6" variants={itemUp(reduce)}>
            <input className="form-input" type="text" placeholder="Mobile No" />
          </motion.div>
          <motion.div className="col-md-6" variants={itemUp(reduce)}>
            <input className="form-input" type="text" placeholder="Location" />
          </motion.div>
          <motion.div className="col-md-12" variants={itemUp(reduce)}>
            <textarea rows={5} className="form-input" placeholder="How can we help you?" />
          </motion.div>
          <motion.div className="col-md-12 d-flex justify-content-center" variants={itemUp(reduce)}>
            <motion.button
              className="form-btn"
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit Information
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.section>
  )
}

export default Contact
