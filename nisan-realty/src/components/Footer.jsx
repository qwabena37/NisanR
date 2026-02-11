import { NavLink } from "react-router-dom";

export default function Footer() {
  const linkStyle =
    "text-gray-400 hover:text-white transition duration-300";

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">
            NisanRealty
          </h3>
          <p className="text-gray-400">
            Your trusted real estate partner delivering quality homes
            and investment opportunities across Ghana.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={linkStyle}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkStyle}>About</NavLink>
            </li>
            <li>
              <NavLink to="/locations" className={linkStyle}>Locations</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={linkStyle}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-semibold mb-3">Our Locations</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Accra</li>
            <li>Kumasi</li>
            <li>Tema</li>
            <li>Cape Coast</li>
            <li>Takoradi</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400">info@nisanrealty.com</p>
          <p className="text-gray-400">+233 123 456 789</p>
          <p className="text-gray-400 mt-2">Accra, Ghana</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} NisanRealty. All rights reserved.
      </div>
    </footer>
  );
}
