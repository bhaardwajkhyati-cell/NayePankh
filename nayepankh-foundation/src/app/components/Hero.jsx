import Image from "next/image";

export default function HeroSection() {
  return (
    <section id = "hero" className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-orange-400 tracking-[0.3em] uppercase mb-4">
            NayePankh Foundation
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Giving Wings
            <br />
            <span className="text-orange-400">
              to Every Dream
            </span>
          </h1>

          <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-2xl">
            We strive to uplift underprivileged communities
            through education, food assistance, and compassionate
            care, empowering individuals to build a brighter future.
          </p>

          <div className="flex flex-row flex-wrap gap-4">
            <button className="bg-orange-400 text-black px-8 py-4 rounded-full font-semibold bg-orange-500 hover:scale-105 transition-all duration-300 ">
              Become a Volunteer
            </button>

            <button className="border border-orange-400 text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-400 hover:text-black hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        {/* Right Side */}
        <div className="relative w-[500px] h-[600px] rounded-3xl p-[3px] animated-border">
            <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
                <Image
                    src="/Image/children.jpg"
                    alt="Children helped by NayePankh"
                    fill
                    className="rounded-3xl object-cover"
                />
            </div>
        </div>

      </div>
    </section>
  );
}