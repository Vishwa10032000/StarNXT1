import "./Header.css";
import Logo from "../../../assets/StarNXTLogo.svg"; 
import ContactIcon from "../../../assets/icons/ContactIcon.png"; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollTopMenu from "../../common/scrollTopProress/ScrollTopProress";
import ThemeToggle from "../../common/themeToggle/ThemeToggle";

const Header = () => {
  return (
    <><motion.header 
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="header-container">
        {/* Logo */}
        <Link className="text-decoration-none" to={{ pathname: '/', hash: '#home' }}><motion.div 
          className="header-logo"
          whileHover={{ scale: 1.05 }}
        >
          <img src={Logo} alt="Logo" />
        </motion.div></Link>

        {/* Contact Button */}
        <motion.div className="d-flex align-items-center gap-2">
          <ThemeToggle/>
          <Link className="text-decoration-none" to={{ pathname: '/', hash: '#contact' }}><motion.button 
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={ContactIcon} 
              alt="Contact Icon" 
              width={28} 
              height={28} 
            />
           <span className="contact-btn-text"> Contact Us</span>
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
    <ScrollTopMenu />
    </>
  );
};

export default Header;
