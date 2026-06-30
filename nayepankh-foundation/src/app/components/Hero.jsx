"use client"
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section 
    id="hero" 
    className="relative overflow-hidden"  >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-100 dark:from-gray-950 dark:via-black dark:to-gray-900" />

      {/* Orange Glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-300/20 dark:bg-orange-600/10 blur-[120px]" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-amber-300/20 dark:bg-amber-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side */}
        <div className="flex-1">

          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-600 dark:text-orange-300">
            🌱 Volunteer With NayePankh
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Join the
            <span className="block text-orange-500 dark:text-orange-400">
              NayePankh Family
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 leading-8 max-w-xl">
            Every hour you give has the power to change someone's future.
            Become part of a community dedicated to education,
            compassion and creating lasting impact.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
  href="/volunteer"
  className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 transition inline-block text-center"
>
  Apply Now
</Link>
            <button className="rounded-full border border-orange-400 dark:border-orange-500 px-8 py-4 font-semibold text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-orange-400 to-amber-400 blur-3xl opacity-25 dark:opacity-15 scale-110" />

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/Image/children.jpg"
                alt="Volunteer"
                width={700}
                height={700}
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="h-24 bg-gradient-to-b from-transparent to-[#FFF8F3] dark:to-black" />
    </section>
  );
}