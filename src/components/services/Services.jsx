import './Services.css'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon.png'
import serviceOne from '../../assets/images/hero/hero1.jpg'
import serviceTwo from '../../assets/images/hero/hero2.jpg'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} // animate once when ~40% visible
    >
      {/* Top Row */}
      <div className="row">
        <div className="col-md-6">
          <motion.h2 className="services-heading" variants={itemUp}>
            Our Staffing & HR Solutions
          </motion.h2>
        </div>
        <div className="col-md-6">
          <motion.div
            className="d-flex flex-column align-items-end justify-content-end h-100"
            variants={itemUp}
          >
            <p className="services-description">
              We provide a complete range of recruitment and HR services designed to meet your unique workforce needs.
            </p>
            <button className="services-btn">
              Explore Our Services
              <img src={ArrowRightIcon} alt="Arrow Right Icon" width={34} height={34} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="row">
        <div className="col-md-6">
          <motion.div className="services-card" variants={itemUp}>
            <div className="row h-100">
              <div className="col-md-6">
                <div className="services-card-image-container">
                  <img src={serviceOne} className="services-card-image" alt="Permanent Staffing" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column gap-3 justify-content-between h-100">
                  <h4 className="services-card-heading">Permanent Staffing</h4>
                  <div>
                    <p className="services-card-description">
                      Find the right people for long-term success. We help businesses recruit qualified,
                      reliable, and culturally aligned professionals for permanent roles, ensuring your team
                      grows stronger with every hire.
                    </p>
                    <button className="services-btn">
                      Learn More
                      <img src={ArrowRightIcon} alt="Arrow Right Icon" width={34} height={34} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-md-6">
          <motion.div className="services-card" variants={itemUp}>
            <div className="row h-100">
              <div className="col-md-6">
                <div className="services-card-image-container">
                  <img src={serviceTwo} className="services-card-image" alt="HR Consulting" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column gap-3 justify-content-between h-100">
                  <h4 className="services-card-heading">HR Consulting</h4>
                  <div>
                    <p className="services-card-description">
                      Optimize your people strategy. Our HR consulting services help businesses improve hiring
                      practices, employee retention, organizational structure, and workforce policies for
                      sustained growth and efficiency.
                    </p>
                    <button className="services-btn">
                      Learn More
                      <img src={ArrowRightIcon} alt="Arrow Right Icon" width={34} height={34} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Services
