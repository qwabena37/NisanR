import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6 overflow-hidden">

      {/* Page Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
        className="text-center mb-16"
      >
        <h1 className="text-4xl mt-10 font-bold text-yellow-500 mb-6">
          Contact Us
        </h1>
        <p className="text-yellow-400 max-w-2xl mx-auto">
          We’d love to help you find your dream home and secure prime land investments.
          Reach out to us anytime — we are here to serve you.
        </p>
      </motion.div>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          className="space-y-8"
        >
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/10 transition"
          >
            <h2 className="text-xl text-yellow-500 font-semibold mb-2">
              Our Office
            </h2>
            <p>
              Nisan Realty<br />
              Spintex, Accra<br />
              Ghana
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/10 transition"
          >
            <h2 className="text-xl text-yellow-500 font-semibold mb-2">
              Contact Details
            </h2>
            <p>
              📞 +233 20 302 0239 <br />
              📞 +233 20 302 0239 <br />
              📞 +233 20 302 0239 <br />
              📧 info@nisanrealty.com
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/10 transition"
          >
            <h2 className="text-xl text-yellow-500 font-semibold mb-2">
              Business Hours
            </h2>
            <p>
              Monday – Friday: 8:00 AM – 6:00 PM <br />
              Saturday: 9:00 AM – 3:00 PM
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.6}
          className="bg-gray-900 p-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-xl text-yellow-500 font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            ></textarea>

            <button
              type="button"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}