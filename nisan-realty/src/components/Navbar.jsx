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

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <header className="sticky top-0 z-50 shadow">
      {/* Date & Time */}
      <div className="bg-gray-900 text-white text-sm py-2 text-center">
        {dateTime.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        | {dateTime.toLocaleTimeString()}
      </div>

      {/* Navbar */}
      <nav className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          >
            <FaBuilding />
            Nisan<span className="text-gray-800">Realty</span>
          </NavLink>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition hover:scale-110">
              <FaTiktok size={18} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition hover:scale-110">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition hover:scale-110">
              <FaYoutube size={18} />
            </a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 font-medium">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About Us</NavLink>
            <NavLink to="/locations" className={linkClass}>Locations</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown - Right Aligned */}
        {menuOpen && (
          <div className="md:hidden absolute right-4 top-full mt-2 w-64 bg-white shadow-xl rounded-xl p-6 flex flex-col gap-5 font-medium">

            <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/locations" className={linkClass} onClick={() => setMenuOpen(false)}>Locations</NavLink>
            <NavLink to="/gallery" className={linkClass} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>

            {/* Social Icons - Mobile */}
            <div className="flex justify-center gap-6 pt-4 border-t">
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                <FaTiktok size={18} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition">
                <FaYoutube size={18} />
              </a>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
}
