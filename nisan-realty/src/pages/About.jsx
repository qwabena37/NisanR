export default function About() {
  return (
    <div className="bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-80">
        <img
          src="./properties/apartments/2.PNG"
          alt="Nisan Realty Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-500">
            Who We Are
          </h1>
        </div>
      </section>

      {/* History, Vision, Mission */}
      <section className="py-16 px-3 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:items-stretch">
        
        {/* Image with Yellow Outline */}
<div className="h-full md:-ml-6">
  <div className="h-full border-4 border-yellow-500 rounded-xl overflow-hidden shadow-lg">
    <img
      src="./properties/apartments/3.PNG"
      alt="About Nisan Realty"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        {/* Content same height as image */}
        <div className="flex flex-col justify-between h-full space-y-6">
          
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our History
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              Nisan Realty was founded with a commitment to delivering trusted
              and premium real estate solutions. Over the years, we have built
              a reputation for excellence, integrity and customer satisfaction
              across residential, commercial and land sales markets.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our Vision
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              To become a leading real estate brand known for innovation,
              reliability and transforming property ownership experiences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our Mission
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              To provide secure, transparent and high-value property
              investments while delivering exceptional service that builds
              lasting relationships with our clients.
            </p>
          </div>

        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <img
                src="./team/T1.PNG"
                alt="CEO"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-500"
              />
              <h3 className="text-xl font-semibold">Soraya James</h3>
              <p className="text-yellow-500 text-sm">Chief Executive Officer</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <img
                src="/images/team2.jpg"
                alt="Sales Manager"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-500"
              />
              <h3 className="text-xl font-semibold">Akosua Owusu</h3>
              <p className="text-yellow-500 text-sm">Sales Manager</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <img
                src="/images/team3.jpg"
                alt="Marketing Lead"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-500"
              />
              <h3 className="text-xl font-semibold">David Asare</h3>
              <p className="text-yellow-500 text-sm">Marketing Lead</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}