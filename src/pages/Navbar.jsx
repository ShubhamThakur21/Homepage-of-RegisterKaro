import { Link } from "react-router-dom"; 
import reg from "../assets/christmas-hat-png-15 1.svg";
import reglogo from "../assets/logo_logo 1.png";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center justify-center relative">
        <div className="absolute left-[-25px] top-[-22px]">
          <img
            src={reg}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        <img
          src={reglogo}
          alt="Reg Logo"
          className="h-8 w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <Link
              to={item.path}
              className={`text-gray-700 hover:text-blue-800 font-medium ${
                item.name === "Our Services" ? "relative" : ""
              }`}
            >
              {item.name}
            </Link>
            {item.name === "Our Services" && (
              <div className="absolute left-0 hidden mt-2 bg-white border rounded-md shadow-md group-hover:block">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/services/service1">Service 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/services/service2">Service 2</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/services/service3">Service 3</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 hover:text-blue-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-md font-medium hover:bg-orange-600 transition">
          Talk An Expert
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
