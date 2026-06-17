export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black dark:bg-zinc-950 dark:text-white transition-colors duration-300 border-t border-orange-400/30">

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Contact <span className="text-orange-400">Us</span>
          </h2>

          <p className="mt-4 text-gray-700 dark:text-zinc-300">
            We'd love to hear from you. Reach out for volunteering,
            partnerships, internships, or general inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-zinc-900 p-8 rounded-3xl border border-orange-400/20">
            <h3 className="text-2xl font-semibold text-orange-400 mb-6">
              Contact Details
            </h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                <span className="font-semibold text-white">
                  Phone:
                </span>{" "}
                +91 8318500748
              </p>

              <p>
                <span className="font-semibold text-white">
                  Official Email:
                </span>{" "}
                contact@nayepankh.com
              </p>

              <p>
                <span className="font-semibold text-white">
                  Careers & Internships:
                </span>{" "}
                career@nayepankh.com
              </p>

              <p>
                <span className="font-semibold text-white">
                  Address:
                </span>{" "}
                104A/279, P Road, Kanpur,
                Uttar Pradesh, India
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-orange-400/20">
            <h3 className="text-2xl font-semibold text-orange-400 mb-6">
              Legal Information
            </h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                <span className="font-semibold text-white">
                  Society Registration Number:
                </span>{" "}
                KAP/04397/2021-2022
              </p>

              <p>
                <span className="font-semibold text-white">
                  Tax Status:
                </span>{" "}
                80G & 12A Certified NGO
              </p>

              <p>
                <span className="font-semibold text-white">
                  Affiliation:
                </span>{" "}
                Registered under the Indian Society Act, 1860,
                and affiliated with NITI Aayog.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Footer */}
      <div className="border-t border-orange-400/20">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-orange-400">
              NayePankh Foundation
            </h3>

            <p className="text-sm text-zinc-400 mt-2">
              © {new Date().getFullYear()} NayePankh Foundation.
              All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <a
              href="/terms"
              className="hover:text-orange-400 transition"
            >
              Terms & Conditions
            </a>

            <a
              href="/privacy"
              className="hover:text-orange-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="/refund"
              className="hover:text-orange-400 transition"
            >
              Cancellation & Refund Policy
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}