'use client'
import {useState , useEffect}from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import NextImage from 'next/image'

export default function Home(){
  const [showSplash , setShowSplash] = useState(true)
  const [splashPhase, setSplashPhase] = useState('in')
  useEffect(() => {
    const fadeOut = setTimeout(() => setSplashPhase('out'), 6000)
    const hide = setTimeout(() => setShowSplash(false), 3000)
   return () => { clearTimeout(fadeOut); clearTimeout(hide) }
  }, [])

  if(showSplash){
    return(
    <section className={`relative w-full overflow-hidden flex flex-col items-center justify-center h-screen bg-black ${splashPhase === 'in' ? 'fade-in' : 'fade-out'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_70%)]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <NextImage
          src="/Image/neyepankh_logo.jpg"
          alt="NayePankh Logo"
          width={400}
          height={300}
          className="object-contain opacity-15 mix-blend-luminosity rounded-full"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-8">
          <h1 className="relative z-10 text-7xl text-orange-400 mb-8 cursive-title">
            NayePankh
          </h1>
      </div>
    </section>)
    
    
  }

  return (
  <main className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 fade-in">
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <Footer/>
  </main>
)
  
}