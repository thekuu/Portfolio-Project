import react from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/My-Works/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
const App = () => {
  return (
    <div className = "app">
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Mywork/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}
export default App