import { useState } from "react";
import { FaPhoneAlt, FaBuilding, FaWhatsapp, FaEnvelope, FaRobot } from "react-icons/fa";
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
      description:
        "A Newly Built 4-Bedrooms Home For Sale.",
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
      image:
        "./properties/lands/l1.PNG",
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
      image:
        "./properties/lands/l2.PNG",
      description:
        "Well-documented land with strong appreciation potential.",
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
      image:
        "./properties/lands/l3.PNG",
      description:
        "Titled and documented land for close to the Weija Lagoon.",
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
      image:
        "./properties/resorts/r1.PNG",
      description:
        "A tranquil, private beachfront haven located on the Central Regionâ€™s coast in Nyanyanor Village, approximately 52km (a one-hour drive) from Accra. This exclusive resort is nestled amidst lush greenery and coconut trees, overlooking the Atlantic Ocean. It features modern architecture with stone-walled courtyards and separate villas, each offering spacious indoor and outdoor living areas for optimum comfort",
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
      image:
        "./properties/resorts/r2.PNG",
      description:
        "Manko view beach resort is one of the most aesthetic resort in Ghana. Itâ€™s quiet, serene, and relaxing. Itâ€™s time to bag your bags.",
      url: "https://www.instagram.com/p/DODbIK3jE5u/",
    },
    {
      id: 9,
      title: "Gomoa Nsuaem Resort",
      location: "Gamoa Nsuaem",
      price: 1500000,
      listingType: "sale",
      status: "available",
      category: "resort",
      image:
        "./properties/resorts/r3.PNG",
      description:
        "This resort situated in the heart of the Central Region of Ghana, Gomoa Nsuaem.",
      url: "https://www.instagram.com/p/DOG548_DMft/",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderSection = (title, category, sectionId) => {
    const filtered = propertiesData.filter((property) => property.category === category);
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

      {/* HERO VIDEO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[80vh] md:h-screen overflow-hidden"
      >
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/promo-vid.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

 {/* NS & NC Buttons on bottom-left */}
<div className="absolute left-6 bottom-11 flex flex-col gap-3 md:gap-4 z-20">

  {/* NC */}
  <div className="relative group w-fit">
    <motion.a
      whileHover={{ scale: 1.1 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      href="https://nisa-nc.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 md:gap-2 
      text-sm md:text-base 
      text-white hover:text-yellow-500 transition font-medium"
    >
      <MdConstruction className="text-lg md:text-xl" /> Nisan Constructions
    </motion.a>

    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 bg-white shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
      <p className="font-semibold text-gray-800 flex items-center gap-2">
        <MdConstruction /> Nisan Constructions
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Premium building and construction services delivering high-quality structures.
      </p>
    </div>
  </div>

  {/* NS */}
  <div className="relative group w-fit">
    <motion.a
      whileHover={{ scale: 1.1 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
      href="https://nisa-ns.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 md:gap-2 
      text-sm md:text-base 
      text-white hover:text-yellow-500 transition font-medium"
    >
      <FaRobot className="text-lg md:text-xl" /> Nisan Solutions
    </motion.a>

    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 bg-white shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
      <p className="font-semibold text-gray-800 flex items-center gap-2">
        <FaRobot /> Nisan Solutions
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Business solutions and consultancy services tailored for your success.
      </p>
    </div>
  </div>

</div>

        {/* Floating Contact Icons on right */}
<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
  {[
    {
      type: "phone",
      icon: <FaPhoneAlt />,
      color: "bg-yellow-600",
      link: "tel:+233123456789",
    },
    {
      type: "whatsapp",
      icon: <FaWhatsapp />,
      color: "bg-green-500",
      link: "https://wa.me/233123456789",
    },
    {
      type: "email",
      icon: <FaEnvelope />,
      color: "bg-slate-800",
      link: "mailto:info@nisanrealty.com",
    },
  ].map((item) => (
    <a
      key={item.type}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        whileHover={{ scale: 1.15 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className={`${item.color} text-white p-4 rounded-full shadow-lg`}
      >
        {item.icon}
      </motion.button>
    </a>
  ))}
</div>
      </motion.section>

      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-center py-20 px-6"
      >
        <h1 className="font-semibold text-4xl md:text-5xl text-slate-900">
          Luxury Living | Land Sales | Resorts
        </h1>

        <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
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
          className="mt-8 bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
        >
          Explore Our Apartments
        </button>
      </motion.div>

      {/* PROPERTY SECTIONS */}
      {renderSection("Apartments", "apartment", "apartments-section")}
      {renderSection("Lands", "land", "lands-section")}
      {renderSection("Resorts", "resort", "resorts-section")}
      {/* REAL ESTATE IMPACT */}

<section className="bg-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">

    {/* Section Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-semibold text-yellow-700"
    >
      Our Real Estate Impact
    </motion.h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Helping individuals and investors secure premium apartments,
      genuine documented lands and exceptional resort destinations
      across Ghana.
    </p>

    {/* Stats Grid */}
    <div className="mt-16 grid md:grid-cols-3 gap-10">

      {/* Apartments Sold / Rented */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative group"
      >

        <div className="absolute inset-0 rounded-xl bg-yellow-500 blur-xl opacity-10 group-hover:opacity-25 transition"></div>

        <div className="relative bg-white border border-yellow-600 p-10 rounded-xl shadow-lg">

          <FaBuilding className="text-yellow-600 text-3xl mx-auto mb-4" />

          <h3 className="text-5xl font-bold text-yellow-700">
            <CountUp end={200} duration={2} />+
          </h3>

          <p className="mt-4 text-gray-700 font-medium">
            Apartments Sold & Rented
          </p>

        </div>
      </motion.div>

      {/* Documented Lands */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative group"
      >

        <div className="absolute inset-0 rounded-xl bg-yellow-500 blur-xl opacity-10 group-hover:opacity-25 transition"></div>

        <div className="relative bg-white border border-yellow-600 p-10 rounded-xl shadow-lg">

          <FaBuilding className="text-yellow-600 text-3xl mx-auto mb-4" />

          <h3 className="text-5xl font-bold text-yellow-700">
            <CountUp end={120} duration={2} />+
          </h3>

          <p className="mt-4 text-gray-700 font-medium">
            Documented Lands Sold
          </p>

        </div>
      </motion.div>

      {/* Resorts Advertised */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative group"
      >

        <div className="absolute inset-0 rounded-xl bg-yellow-500 blur-xl opacity-10 group-hover:opacity-25 transition"></div>

        <div className="relative bg-white border border-yellow-600 p-10 rounded-xl shadow-lg">

          <FaBuilding className="text-yellow-600 text-3xl mx-auto mb-4" />

          <h3 className="text-5xl font-bold text-yellow-700">
            <CountUp end={50} duration={2} />+
          </h3>

          <p className="mt-4 text-gray-700 font-medium">
            Resorts Promoted & Advertised
          </p>

        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white max-w-lg w-full rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {selectedProperty.title}
                </h2>
                <p className="mt-4 text-slate-600">{selectedProperty.description}</p>
                <a
                  href={selectedProperty.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center bg-amber-600 text-white py-2.5 rounded-lg font-medium hover:bg-amber-700 transition"
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