import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-neutral-800 px-6 md:px-12 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <img src={logo} className="h-10" alt="TechLab Logo" />
          <h1 className="text-white font-extrabold text-xl md:text-2xl font-poppins">
            TechLab
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a
              href="#home"
              className="relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#discord"
              className="relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Discord
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={38} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-neutral-900 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-white">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#discord"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
