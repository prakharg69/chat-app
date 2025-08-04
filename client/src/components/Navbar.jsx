// Navbar.jsx
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#1e1f22] text-white px-6 py-3 shadow-md">
      {/* Logo with custom font */}
      <Link
        to="/"
        className="text-3xl font-bold text-pink-500 hover:text-pink-400 transition-all duration-200"
        style={{ fontFamily: "'Bungee Shade'" }}
      >
        Chatzilla
      </Link>

      {/* Settings Icon */}
      <Link to="/setting" className="hover:scale-110 transition-transform duration-200">
        <Settings className="w-6 h-6 text-gray-300 hover:text-white" />
      </Link>
    </nav>
  );
};

export default Navbar;
