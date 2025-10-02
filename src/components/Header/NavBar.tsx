import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative top-0 left-0 w-full h-20 px-4 md:px-8 flex justify-center items-center border-b-2 border-b-neutral-800 bg-neutral-900 z-50">
      <div className="flex flex-row items-center gap-4 md:gap-10 w-full max-w-3xl justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} className="h-10" alt="TechLab Logo" />
          <h1 className="text-white font-extrabold text-xl">TechLab</h1>
        </div>

        <ul
          className="hidden md:flex gap-6 text-white font-medium"
        >
          <li>
            <a
              className="relative pb-1.5 border-b-2 border-transparent transition-all duration-300 hover:border-white"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="relative pb-1.5 border-b-2 border-transparent transition-all duration-300 hover:border-white"
              href="#products"
            >
              Produtos
            </a>
          </li>
          <li>
            <a
              className="relative pb-1.5 border-b-2 border-transparent transition-all duration-300 hover:border-white"
              href="https://discord.gg/Yt6bcW7JHC"
            >
              Discord
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            paddingRight: "20px",
          }}
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-20 left-0 w-full shadow-lg md:hidden"
          style={{ paddingTop: "12px" }}
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium">
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-[#5c63f7] transition-colors"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-[#5c63f7] transition-colors"
                href="#products"
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-[#5c63f7] transition-colors"
                href="#discord"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
