// Navbar.jsx
import { Link } from "react-router-dom";
import { LogOut, Settings, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const {logout}=useAuthStore()

  return (
    <nav className="flex items-center justify-between bg-[#1e1f22] text-white px-6 py-3 shadow-md">
      {/* Logo with custom font */}
      <Link
        to="/"
        className="text-3xl font-bold text-blue-400 hover:text-blue-900 transition-all duration-200"
        style={{ fontFamily: "'Bungee Shade'" }}
      >
        Chatzilla
      </Link>

      {/* Settings Icon */}
      <div className="flex gap-2 text-blue-300">
        <Link to="/setting" className="flex gap-1 ">
        <Settings className="w-6 h-6" />
        Settings
      </Link>
      <Link to="/profile"  className="flex gap-1 ">
            <User className="w-6 h-6"></User>
            Profile
      </Link>
      <button className="flex gap-1" onClick={logout} >
        <LogOut></LogOut>
        Logout
      </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
