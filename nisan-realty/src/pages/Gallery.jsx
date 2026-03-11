import { Link } from "react-router-dom";

export default function Gallery() {
  const properties = [
    {
      image: "./images/gallery/g1.PNG",
      title: "Modern Endowed Home",
      description: "Its One of a Kind, An Endowed Home, Perfect for the Family, Perfect for Productivity. A 4.5 bedroom house for sale in the heart of Spintex, Community 20.",
      link: "https://www.instagram.com/p/DTCb2ejDIVO/",
    },
    {
      image: "./images/gallery/g2.PNG",
      title: "Elegant Abode",
      description: "Spacious 5.5 bedroom home at Adjiringanor.",
      link: "https://www.instagram.com/p/DQXeD3ADJ1_/",
    },
    {
      image: "./images/gallery/g3.PNG",
      title: "Majestic City Apartment",
      description: "An aesthetic 4.5-bedroom mansion is a masterpiece of contemporary design, offering unmatched luxury, smart technology and resort-style amenities. Perfect for high-net-worth individuals, expats or investors seeking an elite lifestyle in Accra. home features: Swimming pool, Study room and Laundry ",
      link: "https://www.instagram.com/p/DOxGU5QiKV6/",
    },
    {
      image: "./images/gallery/g4.PNG",
      title: "Prestigious Mansion",
      description: "A prestigious mansion in East Legon Adjiringanor, Accra, epitomizes luxury living with its exquisite design and high-end features. This magnificent property boasts spacious en-suite bedrooms, with some versions offering up to seven bedrooms and 2 boy’s quarters, all finished with top-quality materials and elegant wardrobes. The mansion is perfectly furnished with premium fittings, including modern appliances in fully fitted kitchens, air conditioning, washing machines, and generators for uninterrupted comfort.",
      link: "https://www.instagram.com/p/DOw3j4GiCZ-/",
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
<div className="relative h-[600px] flex items-center justify-center px-6 overflow-hidden">

  {/* Background Image with fade-in */}
  <img
    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-70 filter brightness-50 animate-fade-in-slow"
  />

  {/* Header Content */}
  <div className="relative text-center max-w-3xl mx-auto animate-slide-up">
    <h2 className="text-4xl font-bold text-white mb-3">
      Properties Gallery
    </h2>

    {/* Yellow underline with pulse */}
    <div className="w-24 h-1 bg-yellow-500 mx-auto rounded animate-pulse"></div>
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