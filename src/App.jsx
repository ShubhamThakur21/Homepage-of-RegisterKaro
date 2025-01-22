


import BlogCards from './pages/BlogCards'
import Header from './pages/Header'
import Navbar from './pages/Navbar'

import Services from './pages/NewSeicves'
import Footer from './pages/Footer '


import WhyChooseUs from './pages/WhyChooseUs'

import TestimonialSwiper from './pages/TestimonialSwiper'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
const App = () => {
  return (
    <div>
     
      <Router>
      <Header/>
      <Navbar />
      {/* <HeroSection /> */}
      <Routes>
        <Route path="/" element={  <Home />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/blog" element={<BlogCards />} />
        <Route path="/contact" element={<WhyChooseUs />} />
        <Route path="/about" element={<TestimonialSwiper />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App

