export default function Location() {
  const locations = [
     {
      name: "East Legon",
      description: "Luxury apartments and premium villas in the capital city.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      name: "Shiashie",
      description: "Affordable and executive homes in the heart of the City.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    },
    {
      name: "Franko Estate",
      description: "Luxury apartments and premium villas in the capital city.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      name: "Spintex",
      description: "Affordable and executive homes in the City.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    },
    {
      name: "Tema",
      description: "Modern estates and waterfront properties.",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    {
      name: "Airport",
      description: "Luxurious houses and serene indiustrial living.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
          Our Locations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
            >
              <img
                src={location.image}
                alt={location.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400">
                  {location.name}
                </h3>
                <p className="text-gray-400 mt-3">
                  {location.description}
                </p>

                <button className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition">
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

