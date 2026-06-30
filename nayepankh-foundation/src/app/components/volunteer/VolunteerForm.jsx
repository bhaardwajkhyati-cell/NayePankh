"use client";

export default function VolunteerForm() {
  return (
    <section id="volunteer-form" className="max-w-5xl mx-auto px-6 py-16 bg-[#FFF8F3]">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-10 grid lg:grid-cols-[1.4fr_1fr] gap-10 border border-transparent dark:border-orange-400/10">
        
        {/* Left: Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Volunteer <span className="text-orange-500 dark:text-orange-400">Application</span>
          </h2>

          {/* Step indicator */}
          <div className="flex items-center gap-3 mt-6 mb-2">
            <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center font-semibold">1</span>
            <span className="text-orange-500 dark:text-orange-400 font-medium">Step 1</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />
            <span className="w-7 h-7 rounded-full bg-gray-200 dark:bg-zinc-700 text-gray-500 dark:text-zinc-400 text-sm flex items-center justify-center font-semibold">2</span>
            <span className="text-gray-400 dark:text-zinc-500 font-medium">Step 2</span>
          </div>
          <p className="text-sm text-gray-400 dark:text-zinc-500 mb-6">Step 1 of 2 - Personal Information</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">Full Name</label>
              <input className="mt-1 w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-lg p-3" placeholder="Enter your full name" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">Age</label>
              <input className="mt-1 w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-lg p-3" placeholder="Enter your age" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">Email Address</label>
              <input className="mt-1 w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-lg p-3" placeholder="Enter your email" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">City</label>
              <input className="mt-1 w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-lg p-3" placeholder="Enter your city" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">Phone Number</label>
              <input className="mt-1 w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-lg p-3" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">Occupation</label>
              <input className="mt-1 w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-lg p-3" placeholder="Enter your occupation" />
            </div>
          </div>

          <button className="mt-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 text-white font-semibold">
            Continue to Next Step →
          </button>
        </div>

        {/* Right: Quote panel */}
        <div className="rounded-2xl bg-gradient-to-b from-orange-100 to-orange-50 dark:from-orange-500/10 dark:to-orange-500/5 p-8 flex flex-col justify-end relative overflow-hidden">
          <p className="text-lg italic text-gray-700 dark:text-zinc-200">
            "Alone we can do so little; together we can do so much."
          </p>
          <span className="mt-2 text-orange-500 dark:text-orange-400 font-medium">— Helen Keller</span>
        </div>
      </div>
    </section>
  );
}