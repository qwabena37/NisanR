import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [dateTime, setDateTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Date & Time
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-500 font-semibold"
      : scrolled
      ? "text-gray-700 hover:text-yellow-500 transition"
      : "text-white hover:text-yellow-400 transition";

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Date & Time */}
      <div
        className={`text-yellow-500 text-sm py-2 text-center transition-all duration-500 ${
          scrolled ? "bg-gray-900" : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        {dateTime.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        | {dateTime.toLocaleTimeString()}
      </div>

      {/* Navbar */}
      <nav
        className={`transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className={`flex items-center gap-2 text-2xl font-bold ${
              scrolled ? "text-yellow-500" : "text-yellow-400"
            }`}
          >
            <FaBuilding />
            Nisan
            <span className={scrolled ? "text-gray-800" : "text-white"}>
              Realty
            </span>
          </NavLink>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://www.tiktok.com/@nisanrealty123?_r=1&_t=ZS-93pj6cgN2n7/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FaTiktok size={18} />
            </a>

            <a
              href="https://www.facebook.com/share/1H3wWbyGWz/?mibextid=wwXIfr/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-blue-600"
                  : "text-gray-300 hover:text-blue-300"
              }`}
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/nisan.realty123?igsh=MTAzc2V3MGhoOWR2Mg==/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-pink-500"
                  : "text-gray-300 hover:text-pink-300"
              }`}
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://youtube.com/@nisan_realty?si=0Al1n6l-MNxRdjbw/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-red-600"
                  : "text-gray-300 hover:text-red-300"
              }`}
            >
              <FaYoutube size={18} />
            </a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 font-medium">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/locations" className={linkClass}>
              Locations
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              Our Properties
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </ul>

          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute right-4 top-full mt-2 w-64 bg-white shadow-xl rounded-xl p-6 flex flex-col gap-5 font-medium">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/locations"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Locations
            </NavLink>
            <NavLink
              to="/gallery"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Our Properties
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 pt-4 border-t">
              <FaTiktok />
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}



