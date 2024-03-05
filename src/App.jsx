import './App.css'
import Header from './components/header'
import Banner from './components/banner'
import About from './components/about'
import Skills from './components/skills'
import Portfolio from './components/Portfolio'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <>
      <body className='bg-white'>
        {/* Section Header */}
        <Header />
        {/* Section Banner */}
        <Banner />
        {/* Section About */}
        <About />
        {/* Section Skills */}
        <Skills />
        {/* Section Portfolio */}
        <Portfolio />
        {/* Section Contact */}
        <Contact />
        {/* Section Footer */}
        <Footer />
      </body >
    </>
  )
}

export default App
