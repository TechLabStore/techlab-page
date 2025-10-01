import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer
      className="text-white py-6 px-4 border-t-2 border-t-neutral-800"
      style={{ padding: "12px" }}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around md:h-35 md:items-center">
        <div className="flex items-center gap-1">
          <img src={logo} alt="TechLab Logo" className="h-10" />
          <h1 className="font-extrabold text-lg">TechLab</h1>
          {
            // <span style={{ fontSize: "8px" }} className="text-gray-400">Entre no nosso Discord!</span>
          }
        </div>

        <div className="text-center">
          <p>© 2025 TechLab Store. All rights reserved.</p>
        </div>

        <ul className="flex flex-col gap-3 justify-center items-center md:flex-col">
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
              href="#discord"
              className="relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
