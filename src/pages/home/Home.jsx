
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import Testimonial from '../../components/testimonial/Testimonial'
import Contact from '../../components/contact/Contact'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default Home