import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
import Home from './pages/home/Home'
import ScrollToHashElement from './utils/scrollToHashElement'
import CustomCursor from './components/common/customCursor/CustomCursor'

function App() {

  return (
    <div className='global'>
      <CustomCursor size={50} borderColor="#ffffff" speed={0.17} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToHashElement />
      <Footer />
    </div>

  )
}

export default App
