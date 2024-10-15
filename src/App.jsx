import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import ContactUs from './components/Contactus'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar title="Juventus" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bEen4iq0wM72DGyuWcZOX8aJTHGeBWWk7w&s" />
      <Hero />
      <About />
      <Products />
      <Reviews />
      <ContactUs />
      <Footer />
      
    </>
  )
}

export default App