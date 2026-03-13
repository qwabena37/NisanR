import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaRobot,
  FaBuilding,
} from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [openContact, setOpenContact] = useState(null);

  const propertiesData = [
    {
      id: 1,
      title: "Exquisite 5.5 Bedroom Luxury Home",
      location: "Lakeside",
      price: 450000,
      listingType: "sale",
      status: "available",
      category: "apartment",
      image: "/properties/apartments/1.PNG",
      description:
        "Luxury 5.5 bedroom home with cinema, swimming pool, study space, laundry and standby generator.",
      url: "https://www.instagram.com/p/DOxC29XCBDA/",
    },
    {
      id: 2,
      title: "Ultra-modern 4.5 Bedroom Townhouse",
      location: "North Legon",
      price: 3000,
      listingType: "sale",
      status: "available",
      category: "apartment",
      image: "/properties/apartments/2.PNG",
      description:
        "Ultra-modern townhouse with smart technology, swimming pool and security post.",
      url: "https://www.instagram.com/p/DOwzs9PjOqX/",
    },
    {
      id: 3,
      title: "A Newly Built 4 Bedroom Home For Sale.",
      location: "East Legon Hills",
      price: 3000,
      listingType: "sale",
      status: "available",
      category: "apartment",
      image: "/properties/apartments/3.PNG",
      description: "A Newly Built 4-Bedrooms Home For Sale.",
      url: "https://www.instagram.com/p/DAlCiGaq417/",
    },
    {
      id: 4,
      title: "Prime 6-Acre Hilltop Land",
      location: "Kwabenya - Accra",
      price: 120000,
      listingType: "sale",
      status: "available",
      category: "land",
      image: "/properties/lands/l1.PNG",
      description:
        "Titled land suitable for residential or investment purposes.",
      url: "https://www.instagram.com/p/DTOA6xJjLIF/",
    },
    {
      id: 5,
      title: "Fully-documented Land For Sale",
      location: "Atomic Pillar 2",
      price: 95000,
      listingType: "sale",
      status: "available",
      category: "land",
      image: "/properties/lands/l2.PNG",
      description:
        "Well-documented land with strong appreciation potential.",
      url: "https://www.instagram.com/p/DTU0jqpDDYW/",
    },
    {
      id: 6,
      title: "Titled and Well Documented Land",
      location: "Bortianor - Accra",
      price: 1500000,
      listingType: "sale",
      status: "available",
      category: "land",
      image: "/properties/lands/l3.PNG",
      description:
        "Titled and documented land close to the Weija Lagoon.",
      url: "https://www.instagram.com/p/DTU1UzHDIqu/",
    },
    {
      id: 7,
      title: "Big Blue Resort",
      location: "Kasoa",
      price: 150000,
      listingType: "sale",
      status: "available",
      category: "resort",
      image: "/properties/resorts/r1.PNG",
      description:
        "A tranquil private beachfront haven located on the Central Region’s coast in Nyanyanor Village, about 52km from Accra.",
      url: "https://www.instagram.com/p/DN_ttSOjKzL/",
    },
    {
      id: 8,
      title: "Manko Resort",
      location: "Kasoa",
      price: 150000,
      listingType: "sale",
      status: "available",
      category: "resort",
      image: "/properties/resorts/r2.PNG",
      description:
        "Manko View Beach Resort is one of the most aesthetic resorts in Ghana. It's quiet, serene and relaxing.",
      url: "https://www.instagram.com/p/DODbIK3jE5u/",
    },
    {
      id: 9,
      title: "Gomoa Nsuaem Resort",
      location: "Gomoa Nsuaem",
      price: 1500000,
      listingType: "sale",
      status: "available",
      category: "resort",
      image: "/properties/resorts/r3.PNG",
      description:
        "A resort located in the heart of the Central Region of Ghana, Gomoa Nsuaem.",
      url: "https://www.instagram.com/p/DOG548_DMft/",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderSection = (title, category, sectionId) => {
    const filtered = propertiesData.filter(
      (property) => property.category === category
    );

    if (!filtered.length) return null;

    return (
      <section id={sectionId} className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-slate-900 mb-12 border-l-4 border-amber-600 pl-4"
        >
          {title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {filtered.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold">{property.title}</h3>

                <p className="text-slate-500 mt-2 text-sm">
                  {property.location}
                </p>

                <p className="mt-4 text-lg font-bold text-amber-600">
                  {property.listingType === "sale"
                    ? `GHS ${property.price.toLocaleString()}`
                    : `GHS ${property.price.toLocaleString()} / month`}
                </p>

                <button
                  onClick={() => setSelectedProperty(property)}
                  className="mt-6 w-full bg-amber-600 text-white py-2.5 rounded-lg hover:bg-amber-700 transition"
                >
                  View Property Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/promo-vid.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

      </section>

      {/* HERO TEXT */}
      <div className="bg-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Luxury Living | Land Sales | Resorts
        </h1>

        <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg">
          Discover exclusive properties with NisanRealty — where luxury,
          comfort and strategic investment opportunities come together to
          create exceptional living experiences.
        </p>

        <p className="mt-4 text-amber-600 font-medium tracking-wide">
          Your Dream . Our Dream
        </p>

        <button
          onClick={() =>
            document
              .getElementById("apartments-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
        >
          Explore Our Apartments
        </button>
      </div>

      {renderSection("Apartments", "apartment", "apartments-section")}
      {renderSection("Lands", "land", "lands-section")}
      {renderSection("Resorts", "resort", "resorts-section")}

      {/* IMPACT SECTION */}

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-amber-600">
            Our Real Estate Impact
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">

            <div className="bg-white border border-amber-500 p-10 rounded-xl shadow-lg">
              <FaBuilding className="text-amber-600 text-3xl mx-auto mb-4" />
              <h3 className="text-5xl font-bold text-amber-600">
                <CountUp end={200} duration={2} />+
              </h3>
              <p className="mt-4 font-medium">Apartments Sold & Rented</p>
            </div>

            <div className="bg-white border border-amber-500 p-10 rounded-xl shadow-lg">
              <FaBuilding className="text-amber-600 text-3xl mx-auto mb-4" />
              <h3 className="text-5xl font-bold text-amber-600">
                <CountUp end={120} duration={2} />+
              </h3>
              <p className="mt-4 font-medium">Documented Lands Sold</p>
            </div>

            <div className="bg-white border border-amber-500 p-10 rounded-xl shadow-lg">
              <FaBuilding className="text-amber-600 text-3xl mx-auto mb-4" />
              <h3 className="text-5xl font-bold text-amber-600">
                <CountUp end={50} duration={2} />+
              </h3>
              <p className="mt-4 font-medium">Resorts Advertised</p>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-semibold">
                  {selectedProperty.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {selectedProperty.description}
                </p>

                <a
                  href={selectedProperty.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-amber-600 text-white py-2.5 rounded-lg hover:bg-amber-700 transition"
                >
                  View Full Property Page
                </a>

                <button
                  onClick={() => setSelectedProperty(null)}
                  className="mt-4 w-full bg-slate-800 text-white py-2.5 rounded-lg hover:bg-slate-900 transition"
                >
                  Close
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}