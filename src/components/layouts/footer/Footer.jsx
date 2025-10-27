import { Link } from 'react-router-dom'
import './Footer.css'
import StarNXTLogo from '../../../assets/StarNXTLogo.svg'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="row">
        <div className="col-md-10 mb-3">
          <motion.img
            src={StarNXTLogo}
            className="footer-logo"
            alt="StarNXT Logo"
            variants={itemUp}
          />
          <motion.p className="footer-description" variants={itemUp}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
        </div>

        <div className="col-md-2 mb-3">
          <motion.nav
            className="footer-link"
            aria-label="Footer navigation"
            variants={itemUp}
          >
            <div className="d-flex flex-column">
              {/* Use pathname + hash so these work from any route */}
              <Link className="footer-link" to={{ pathname: '/', hash: '#home' }}>Home</Link>
              <Link className="footer-link" to={{ pathname: '/', hash: '#about' }}>About</Link>
              <Link className="footer-link" to="/services">Services</Link>
              <Link className="footer-link" to={{ pathname: '/', hash: '#contact' }}>Contact</Link>
            </div>
          </motion.nav>
        </div>

        <motion.h1 className="footer-title" variants={itemUp}>STARNXT</motion.h1>

        <div className="row">
          <div className="col-md-7 mb-3">
            <motion.span className="footer-copyright" variants={itemUp}>
              © {year} StarNXT. All rights reserved.
            </motion.span>
          </div>
          <div className="col-md-5">
            <motion.span
              className="d-flex gap-3 flex-wrap justify-content-between"
              variants={itemUp}
            >
              <Link className="footer-link" to="/terms">Terms of Service</Link>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
