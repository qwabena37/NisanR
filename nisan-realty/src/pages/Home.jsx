import { useState } from "react";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null);

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
      url: "https://www.tiktok.com/@nisanrealty123/video/7552468302652575032?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
      url: "https://www.tiktok.com/@nisanrealty123/video/7549157944466656517?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
      url: "https://www.tiktok.com/@nisanrealty123/video/7598969146390351116?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
      url: "https://www.tiktok.com/@nisanrealty123/video/7595251612105461004?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
      url: "https://www.tiktok.com/@nisanrealty123/video/7594403299365850424?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
      url: "https://www.tiktok.com/@nisanrealty123/video/7594403236300229900?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
        "A tranquil, private beachfront haven located on the Central Region’s coast in Nyanyanor Village, approximately 52km (a one-hour drive) from Accra. This exclusive resort is nestled amidst lush greenery and coconut trees, overlooking the Atlantic Ocean. It features modern architecture with stone-walled courtyards and separate villas, each offering spacious indoor and outdoor living areas for optimum comfort",
      url: "https://www.tiktok.com/@nisanrealty123/video/7544508590099369272?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
        "Manko view beach resort is one of the most aesthetic resort in Ghana. It’s quiet, serene, and relaxing. It’s time to bag your bags.",
      url: "https://www.tiktok.com/@nisanrealty123/video/7545044795949960453?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
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
      url: "https://www.tiktok.com/@nisanrealty123/video/7546142699087318278?is_from_webapp=1&sender_device=pc&web_id=7606334219082810888",
    },
  ];

  const renderSection = (title, category, sectionId) => {
    const filtered = propertiesData.filter(
      (property) => property.category === category
    );

    if (filtered.length === 0) return null;

    return (
      <section
        id={sectionId}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-yellow-500 mb-10">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-500">
                  {property.title}
                </h3>
                <p className="text-gray-400 mt-2">
                  {property.location}
                </p>

                <p className="mt-4 font-semibold">
                  {property.listingType === "sale"
                    ? `GHS${property.price.toLocaleString()}`
                    : `GHS${property.price.toLocaleString()} / month`}
                </p>

                <button
                  onClick={() => setSelectedProperty(property)}
                  className="mt-5 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                >
                  View Property Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
  <h1 className="font-bold text-yellow-500 whitespace-nowrap text-[clamp(1.5rem,5vw,3rem)]">
    Luxury Living | Land Sales | Resorts
  </h1>

  <p className="mt-6 text-gray-300 mx-auto leading-relaxed text-center 
               text-[clamp(0.9rem,3vw,1.125rem)] 
               max-w-3xl px-4 break-words">
  Discover exclusive properties with NisanRealty — where luxury, comfort and 
  strategic investment opportunities come together to create exceptional 
  living experiences.
</p>

  <p className="mt-4 text-yellow-500 font-semibold tracking-wide whitespace-nowrap text-[clamp(0.9rem,2.5vw,1.125rem)]">
    Your Dream . Our Dream
  </p>
</section>

      {/* VIDEO SECTION - Apartments Promo */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="/videos/promo-vid.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
            <a href="/gallery">Discover Luxury Apartments</a>
            
          </h2>

          <p className="mt-4 max-w-2xl text-gray-200">
            Experience world-class living in prime locations
            across Ghana.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("apartments-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Explore Our Apartments
          </button>
        </div>
      </section>

      {/* APARTMENTS */}
      {renderSection("Apartments", "apartment", "apartments-section")}

      {/* LANDS */}
      {renderSection("Lands", "land", "lands-section")}

      {/* RESORTS */}
      {renderSection("Resorts", "resort", "resorts-section")}

      {/* MODAL */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50">
          <div className="bg-gray-900 max-w-lg w-full rounded-xl overflow-hidden shadow-2xl">

            <img
              src={selectedProperty.image}
              alt={selectedProperty.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-500">
                {selectedProperty.title}
              </h2>

              <p className="mt-4 text-gray-300">
                {selectedProperty.description}
              </p>

              <a
                href={selectedProperty.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full text-center bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                View Full Property Page
              </a>

              <button
                onClick={() => setSelectedProperty(null)}
                className="mt-4 w-full bg-red-600 py-2 rounded-lg hover:bg-red-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}