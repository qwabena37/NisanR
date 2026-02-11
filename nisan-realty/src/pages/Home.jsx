import { useState } from "react";

const propertiesData = [
  {
    id: 1,
    title: "Modern Villa",
    location: "East Legon",
    price: 450000,
    listingType: "sale",
    status: "available",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "Shiashie",
    price: 3000,
    listingType: "rent",
    status: "rented",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    id: 3,
    title: "Elegant Mansion",
    location: "Adenta",
    price: 800000,
    listingType: "sale",
    status: "sold",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
  },
  {
    id: 4,
    title: "Executive Suite",
    location: "Tema",
    price: 2500,
    listingType: "rent",
    status: "available",
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
  },
  {
    id: 5,
    title: "Big and Bold",
    location: "Franko Estate",
    price: 800000,
    listingType: "sale",
    status: "available",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
  },
  {
    id: 6,
    title: "Comfortable Suite",
    location: "Tema",
    price: 2500,
    listingType: "rent",
    status: "occupied",
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
  },
  // Land Properties
  {
    id: 7,
    title: "Prime Land Plot",
    location: "Spintex",
    price: 120000,
    listingType: "sale",
    status: "available",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    id: 8,
    title: "Lakeside Land",
    location: "Weija",
    price: 95000,
    listingType: "sale",
    status: "available",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
  },
  {
    id: 9,
    title: "Hillside Land Plot",
    location: "Aburi",
    price: 150000,
    listingType: "sale",
    status: "sold",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
];

export default function Home() {
  const [locationFilter, setLocationFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [listingFilter, setListingFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredProperties = propertiesData.filter((property) => {
    return (
      (locationFilter === "" || property.location === locationFilter) &&
      (maxPrice === "" || property.price <= maxPrice) &&
      (listingFilter === "" || property.listingType === listingFilter) &&
      (statusFilter === "" || property.status === statusFilter)
    );
  });

  return (
    <div className="bg-gray-950 min-h-screen text-white">

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <h1 className="text-5xl font-bold text-yellow-500 tracking-wide">
          Luxury Living & Land Sales
        </h1>
        <p className="mt-4 text-gray-300">
          Discover exclusive properties and prime land plots with NisanRealty
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg grid md:grid-cols-4 gap-6">

          {/* Location */}
          <select
            onChange={(e) => setLocationFilter(e.target.value)}
            className="bg-gray-800 p-3 rounded text-white"
          >
            <option value="">All Locations</option>
            <option value="Tema">Tema</option>
            <option value="Shiashie">Shiashie</option>
            <option value="East Legon">East Legon</option>
            <option value="Adenta">Adenta</option>
            <option value="Spintex">Spintex</option>
            <option value="Weija">Weija</option>
            <option value="Aburi">Aburi</option>
            <option value="Franko Estate">Franko Estate</option>
          </select>

          {/* Max Price */}
          <input
            type="number"
            placeholder="Max Price"
            onChange={(e) => setMaxPrice(e.target.value)}
            className="bg-gray-800 p-3 rounded text-white"
          />

          {/* Sale or Rent */}
          <select
            onChange={(e) => setListingFilter(e.target.value)}
            className="bg-gray-800 p-3 rounded text-white"
          >
            <option value="">Sale or Rent</option>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>

          {/* Status */}
          <select
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800 p-3 rounded text-white"
          >
            <option value="">All Status</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="rented">Rented</option>
            <option value="occupied">Occupied</option>
          </select>

        </div>
      </section>

      {/* Property Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          {filteredProperties.map((property) => (
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
                <p className="text-gray-400 mt-2">{property.location}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold">
                    {property.listingType === "sale"
                      ? `GHS${property.price.toLocaleString()}`
                      : `GHS${property.price.toLocaleString()} / month`}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm capitalize ${
                      property.status === "available"
                        ? "bg-green-600"
                        : property.status === "sold"
                        ? "bg-red-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    {property.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-blue-400 capitalize">
                  {property.listingType === "sale" ? "For Sale" : "For Rent"}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
