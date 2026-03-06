import { motion } from "framer-motion";

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
  <motion.img
    src="/src/assets/who.png"
    alt="Nisan Realty Building"
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 6 }}
  />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-yellow-500"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h1>
        </div>
      </section>

      {/* History, Vision, Mission */}
      <section className="py-16 px-3 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:items-stretch">

        {/* Image */}
        <motion.div
          className="h-full md:-ml-6"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="h-full border-4 border-yellow-500 rounded-xl overflow-hidden shadow-lg">
            <img
              src="./properties/apartments/3.PNG"
              alt="About Nisan Realty"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col justify-between h-full space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our History
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              Nisan Realty was founded with a commitment to delivering trusted
              and premium real estate solutions. Over the years, we have built
              a reputation for excellence, integrity and customer satisfaction
              across residential, commercial and land sales markets.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our Vision
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              To become a leading real estate brand known for innovation,
              reliability and transforming property ownership experiences.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our Mission
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              To provide secure, transparent and high-value property
              investments while delivering exceptional service that builds
              lasting relationships with our clients.
            </p>
          </motion.div>

        </motion.div>

      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6 bg-gray-800">

        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-yellow-500 mb-12"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {[{
              name: "Soraya James",
              role: "Chief Executive Officer",
              img: "./team/T1.PNG"
            },
            {
              name: "Akosua Owusu",
              role: "Sales Manager",
              img: "/images/team2.jpg"
            },
            {
              name: "David Asare",
              role: "Marketing Lead",
              img: "/images/team3.jpg"
            }].map((member, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-xl p-6 shadow-lg"
              >

                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-500"
                />

                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="text-yellow-500 text-sm">{member.role}</p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

    </div>
  );
}