import {
  FileText,
  ClipboardCheck,
  PhoneCall,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    icon: <FileText size={30} />,
    title: "Register",
    description: "Complete your volunteer application.",
  },
  {
    icon: <ClipboardCheck size={30} />,
    title: "Application Review",
    description: "Our team carefully reviews your submission.",
  },
  {
    icon: <PhoneCall size={30} />,
    title: "Interview",
    description: "We'll connect with you for a quick discussion.",
  },
  {
    icon: <HeartHandshake size={30} />,
    title: "Welcome",
    description: "Start making an impact with NayePankh.",
  },
];

export default function VolunteerJourney() {
  return (
    <section className="py-24 px-6 bg-[#FFF8F3] dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Your Volunteer Journey
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Joining NayePankh is simple. Here's what happens after
            you submit your application.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg dark:shadow-none dark:border dark:border-orange-400/10 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400 flex items-center justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>

              <div className="absolute top-6 right-6 text-orange-200 dark:text-orange-500/20 text-5xl font-bold">
                0{index + 1}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}