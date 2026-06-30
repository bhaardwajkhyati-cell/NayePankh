"use client";
import Image from "next/image";

export default function VolunteerHero() {
  return (
    <section className="relative overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-100 dark:from-gray-950 dark:via-black dark:to-gray-900" />

      {/* Decorative dots */}
      <div className="absolute top-24 left-8 grid grid-cols-3 gap-2 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400 dark:bg-orange-500" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Join the
            <span className="block text-orange-500 dark:text-orange-400">NayePankh</span>
            Family
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-7 max-w-md">
            Together we can create lasting change in the lives of children
            and communities in need.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("volunteer-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Become a Volunteer
            <span>→</span>
          </button>

          {/* Avatars + count */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full border-2 border-white dark:border-black bg-orange-200 overflow-hidden relative">
                <Image src="/Image/children.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-white dark:border-black bg-orange-300 overflow-hidden relative">
                <Image src="/Image/children.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-white dark:border-black bg-orange-400 overflow-hidden relative">
                <Image src="/Image/children.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">800+</strong> volunteers already making a difference
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[60px] bg-gradient-to-r from-orange-400 to-amber-400 blur-2xl opacity-30 dark:opacity-15 scale-105" />
            <div className="relative overflow-hidden rounded-[60px] border-4 border-orange-300 dark:border-orange-500/40 shadow-2xl">
              <Image
                src="/Image/children.jpg"
                alt="Volunteer with children"
                width={700}
                height={700}
                className="object-cover w-full h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}