export default function Location() {
  const locations = [
    {
      name: "East Legon",
      description: "Luxury apartments and premium villas in one of Accra’s most prestigious neighborhoods.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      name: "Shiashie",
      description: "Executive homes and modern apartments close to shopping malls and business centers.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    },
    {
      name: "Franko Estate",
      description: "Quiet gated community offering elegant homes and a secure living environment.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      name: "Spintex",
      description: "Affordable and executive housing options with easy access to major roads.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    },
    {
      name: "Tema",
      description: "Modern estates, waterfront properties and family friendly neighborhoods.",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    {
      name: "Airport",
      description: "Premium luxury residences located close to the international airport.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* Hero Header */}
      <div className="relative h-[500px] flex items-center justify-center"> 

        <img
          src="./src/assets/location.png"
          alt="Location Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our Locations
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mb-6"></div>

          <p className="max-w-xl mx-auto text-gray-200">
            Explore prime real estate locations where we offer premium homes,
            land investments and luxury living opportunities.
          </p>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-500/10 transition duration-500 group"
            >
              
              <div className="overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400">
                  {location.name}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {location.description}
                </p>

                <button className="mt-5 px-5 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition transform hover:scale-105">
                  View Properties
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}