export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
          Contact Us
        </h1>
        <p className="text-yellow-400">
          We’d love to help you find that dream home and own that land with pride. Reach out anytime.
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gray-950 p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-yellow-500 font-semibold mb-2">
              Our Office
            </h2>
            <p className="text-white">
              Nisan Realty<br />
              Spintex, Accra<br />
              Ghana
            </p>
          </div>

          <div className=" p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-yellow-500 font-semibold mb-2">
              Contact Details
            </h2>
            <p className="text-white">
              📞 +233 20 302 0239 <br />
              📞 +233 20 302 0239 <br />
              📞 +233 20 302 0239 <br />
              📧 Email: info@nisanrealty.com
            </p>
          </div>

          <div className=" p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-yellow-500 font-semibold mb-2">
              Business Hours
            </h2>
            <p className="text-white">
              Monday – Friday: 8:00 AM – 6:00 PM <br />
              Saturday: 9:00 AM – 3:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 rounded-xl shadow">
          <h2 className="text-xl text-yellow-500 font-semibold mb-4">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="button"
              className="w-full text-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
