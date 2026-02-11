export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Property Gallery
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <img
              src={url}
              alt={`Property ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
