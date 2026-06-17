'use client'
import {useState , useEffect}from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

export default function Home(){
  const [showSplash , setShowSplash] = useState(true)
  const [splashPhase, setSplashPhase] = useState('in')
  useEffect(() => {
    const fadeOut = setTimeout(() => setSplashPhase('out'), 2000)
    const hide = setTimeout(() => setShowSplash(false), 3000)
   return () => { clearTimeout(fadeOut); clearTimeout(hide) }
  }, [])

  if(showSplash){
    return<>
    <section className={`flex flex-col items-center justify-center h-screen bg-black ${splashPhase === 'in' ? 'fade-in' : 'fade-out'}`}>
      <h1 className="text-5xl font-bold text-orange-400 mb-4">WELCOME TO NAYEPANKH!</h1>
      <p className =" text-orange-200 text-lg mb-6">Giving wings to the underprivileged through food, education, and care.</p>
    </section>
    </>
  }

  return (
  <main className="min-h-screen bg-black text-white pt-28">
  <Navbar/>
  <HeroSection/>
  <AboutSection/>
  <Footer/>
  </main>
)
  
}