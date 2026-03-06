import { Link } from "react-router-dom";

export default function Gallery() {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Modern Luxury Villa",
      description: "5 Bedroom villa with private pool and smart home features.",
      link: "/properties/1",
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Contemporary Family Home",
      description: "Spacious 4 bedroom home in a serene neighborhood.",
      link: "/properties/2",
    },
    {
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      title: "Elegant City Apartment",
      description: "3 Bedroom apartment with skyline views.",
      link: "/properties/3",
    },
    {
      image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
      title: "Executive Mansion",
      description: "Luxury mansion with premium interior finishes.",
      link: "/properties/4",
    },
    {
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
      title: "Suburban Comfort Home",
      description: "Perfect family home with landscaped garden.",
      link: "/properties/5",
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      title: "Minimalist Modern House",
      description: "Open concept living with natural lighting.",
      link: "/properties/6",
    },
    {
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      title: "Waterfront Property",
      description: "Exclusive property with breathtaking water views.",
      link: "/properties/7",
    },
    {
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      title: "Classic Brick Residence",
      description: "Timeless design in a prime location.",
      link: "/properties/8",
    },
    {
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      title: "Luxury Penthouse Suite",
      description: "Top floor penthouse with panoramic city view.",
      link: "/properties/9",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* Header Section */}
      <div className="relative h-[600px] flex items-center justify-center px-6">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Header Content */}
        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-3">
            Properties Gallery
          </h2>

          {/* Yellow underline */}
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded"></div>
        </div>

      </div>

      {/* Gallery Grid */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-900"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Caption */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {property.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <Link
                  to={property.link}
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                >
                  See more about this property
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}