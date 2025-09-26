import logo from "../../assets/logo.png";

function Footer() {
  return (
    <nav className="flex justify-around bg-neutral-800 h-40">
      <div className="text-white flex items-center">
        <img src={logo} alt="" className="h-10" />
        <h1 className="">TechLab</h1>
      </div>

      <div className="flex justify-center items-center text-white">
        <h1>© 2025 TechLab Store. All rights reserved.</h1>
      </div>
      <ul className="text-white flex flex-col gap-3.5 justify-center">
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
    </nav>
  );
}

export default Footer;
