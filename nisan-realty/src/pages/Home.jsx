import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaRobot, FaBuilding } from "react-icons/fa";
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
      image: "./properties/apartments/1.PNG",
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
      image: "./properties/apartments/2.PNG",
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
      image: "./properties/apartments/3.PNG",
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
      image: "./properties/lands/l1.PNG",
      description: "Titled land suitable for residential or investment purposes.",
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
      image: "./properties/lands/l2.PNG",
      description: "Well-documented land with strong appreciation potential.",
      url: "https://www.instagram.com/p/DTU0jqpDDYW/",
    },
    {
      id: 6,
      title: "Titled and Well Docummented Land",
      location: "Bortianor - Accra",
      price: 1500000,
      listingType: "sale",
      status: "available",
      category: "land",
      image: "./properties/lands/l3.PNG",
      description: "Titled and documented land for close to the Weija Lagoon.",
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
      image: "./properties/resorts/r1.PNG",
      description:
        "A tranquil beachfront haven located on the Central Region coast with villas overlooking the Atlantic Ocean.",
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
      image: "./properties/resorts/r2.PNG",
      description:
        "Manko View Beach Resort is one of the most aesthetic resorts in Ghana — serene and relaxing.",
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
      image: "./properties/resorts/r3.PNG",
      description:
        "A resort situated in the heart of the Central Region of Ghana, Gomoa Nsuaem.",
      url: "https://www.instagram.com/p/DOG548_DMft/",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderSection = (title, category, sectionId) => {
    const filtered = propertiesData.filter((p) => p.category === category);
    if (!filtered.length) return null;

    return (
      <section id={sectionId} className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
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
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img src={property.image} alt={property.title} className="h-60 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{property.title}</h3>
                <p className="text-slate-500 mt-2 text-sm">{property.location}</p>

                <p className="mt-4 text-lg font-bold text-amber-600">
                  {property.listingType === "sale"
                    ? `GHS ${property.price.toLocaleString()}`
                    : `GHS ${property.price.toLocaleString()} / month`}
                </p>

                <button
                  onClick={() => setSelectedProperty(property)}
                  className="mt-6 w-full bg-amber-600 text-white py-2.5 rounded-lg font-medium hover:bg-amber-700 transition"
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

      {/* HERO + PROPERTY SECTIONS */}
      {/* (Everything you already had remains unchanged) */}

      {renderSection("Apartments", "apartment", "apartments-section")}
      {renderSection("Lands", "land", "lands-section")}
      {renderSection("Resorts", "resort", "resorts-section")}

      {/* REAL ESTATE IMPACT SECTION */}

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-amber-600"
          >
            Our Real Estate Impact
          </motion.h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Helping individuals and investors secure luxury apartments,
            genuine documented lands and premium resort destinations
            across Ghana.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-amber-500 blur-xl opacity-10 group-hover:opacity-25 transition rounded-xl"></div>

              <div className="relative bg-white border border-amber-500 p-10 rounded-xl shadow-lg">
                <FaBuilding className="text-amber-600 text-3xl mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-amber-600">
                  <CountUp end={200} duration={2} />+
                </h3>
                <p className="mt-4 text-slate-700 font-medium">
                  Apartments Sold & Rented
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-amber-500 blur-xl opacity-10 group-hover:opacity-25 transition rounded-xl"></div>

              <div className="relative bg-white border border-amber-500 p-10 rounded-xl shadow-lg">
                <FaBuilding className="text-amber-600 text-3xl mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-amber-600">
                  <CountUp end={120} duration={2} />+
                </h3>
                <p className="mt-4 text-slate-700 font-medium">
                  Documented Lands Sold
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-amber-500 blur-xl opacity-10 group-hover:opacity-25 transition rounded-xl"></div>

              <div className="relative bg-white border border-amber-500 p-10 rounded-xl shadow-lg">
                <FaBuilding className="text-amber-600 text-3xl mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-amber-600">
                  <CountUp end={50} duration={2} />+
                </h3>
                <p className="mt-4 text-slate-700 font-medium">
                  Resorts Advertised
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}