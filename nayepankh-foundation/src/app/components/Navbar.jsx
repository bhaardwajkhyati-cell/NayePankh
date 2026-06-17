export default function Navbar(){
return (

    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-orange-400/20 bg-orange-500/10 backdrop-blur-lg shadow-[0_0_30px_rgba(251,146,60,0.15)] rounded-[10%]">
  
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/10 to-transparent animate-shimmer"></div>

  <div className="relative flex justify-between items-center px-8 py-4">
    <span className="text-orange-400 font-bold text-2xl tracking-wide">
      NayePankh
    </span>

    <div className="flex gap-8">
      <a
        href="#hero"
        className="text-orange-200 hover:text-orange-400 transition duration-300"
      >
        Home
      </a>

      <a
        href="#about"
        className="text-orange-200 hover:text-orange-400 transition duration-300"
      >
        About
      </a>

      <a
        href="#contact"
        className="text-orange-200 hover:text-orange-400 transition duration-300"
      >
        Contact
      </a>
    </div>
  </div>

</nav>
  
 )
}