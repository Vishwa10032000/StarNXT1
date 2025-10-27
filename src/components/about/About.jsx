import './About.css'
import StarsIcon from '../../assets/icons/StarsIcon.png'
import SingaporeFlag from '../../assets/flags/Singapore.png'
import MyanmarFlag from '../../assets/flags/Myanmar.png'
import VietnamFlag from '../../assets/flags/Vietnam.png'
import MalaysiaFlag from '../../assets/flags/Malaysia.png'
import IndiaFlag from '../../assets/flags/India.png'
import PhilippinesFlag from '../../assets/flags/Philippines.png'
import BangladeshFlag from '../../assets/flags/Bangladesh.png'
import { motion, useReducedMotion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            // controls the stagger for children
            staggerChildren: 0.15,
            // small delay so heading/subheading finish first
            delayChildren: 0.1,
        },
    },
}



const flagsWrap = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07 }
    }
}

const flagItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const About = () => {
    const reduce = useReducedMotion();

    const itemUp = {
        hidden: { opacity: 0, y: reduce ? 0 : 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };
    const countries = [
        { name: 'Singapore', flag: SingaporeFlag },
        { name: 'Myanmar', flag: MyanmarFlag },
        { name: 'Vietnam', flag: VietnamFlag },
        { name: 'Malaysia', flag: MalaysiaFlag },
        { name: 'India', flag: IndiaFlag },
        { name: 'Philippines', flag: PhilippinesFlag },
        { name: 'Bangladesh', flag: BangladeshFlag },
    ];

    return (
        <motion.section
            id="about"
            className="about"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }} // 👈 animate once when 50% in view
        >
            <motion.p className="about-title" variants={itemUp}>
                <img src={StarsIcon} width={34} height={34} alt="Stars Icon" />
                Who We Are
            </motion.p>

            <div className='row'>
                <div className='col-md-6'>
                    <motion.h2 className="about-heading" variants={itemUp}>
                        Your Trusted Recruitment<br /> & Staffing Partner.
                    </motion.h2>
                </div>

                <div className='col-md-6 d-flex align-items-end'>
                    <motion.p className='about-description' variants={itemUp}>
                        At Macro Employment, we connect skilled professionals with businesses worldwide. Powered by AI technology and guided by human expertise, we deliver fast, reliable, and fully compliant recruitment solutions.
                    </motion.p>
                </div>

                <div className='col-md-7'>
                    <motion.div className='about-card1' variants={itemUp}>
                        <h3 className='about-card1-description'>
                            We blend AI-powered recruitment tools with human expertise to deliver smarter, faster, and fully compliant hiring solutions.
                        </h3>
                    </motion.div>
                </div>

                <div className='col-md-5'>
                    <motion.div className='about-card2' variants={itemUp}>
                        <h3 className='about-card2-heading'>Our Vision</h3>
                        <p className='about-card2-description'>
                            To redefine recruitment by bridging global talent with meaningful opportunities, ensuring ethical and sustainable employment practices.
                        </p>
                    </motion.div>
                </div>

                <div className='col-md-5'>
                    <motion.div className='about-card2' variants={itemUp}>
                        <h3 className='about-card2-heading'>Our Mission</h3>
                        <p className='about-card2-description'>
                            To deliver transparent, technology-driven staffing solutions that empower both employers and jobseekers worldwide.
                        </p>
                    </motion.div>
                </div>

                <div className="col-md-7">
                    <motion.div className="about-card2" variants={itemUp}>
                        <h3 className="about-card2-heading">Serving clients across:</h3>

                        <motion.div
                            className="about-card2-countries"
                            variants={flagsWrap}
                        >
                            {countries.map((c) => (
                                <motion.p
                                    key={c.name}
                                    className="about-card2-country"
                                    variants={flagItem}
                                >
                                    <img
                                        src={c.flag}
                                        alt={c.name}
                                        className="country-flag"
                                        width={28}
                                        height={28}
                                        loading="lazy"
                                    />
                                    {c.name}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default About
