import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <nav className="flex justify-center items-center w-full h-20 bg-neutral-800">
      <div className="w-full max-w-2xl flex flex-row items-center">
        <img src={logo} className="h-10" alt="" />
        <h1 className="text-white font-extrabold ">TechLab</h1>
      </div>
      <ul className="flex gap-3.5 justify-between text-white">
        <li>
          <a
            className="relative pb-1.5 border-b-2 border-transparent transition-all duration-400 hover:border-white"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="relative pb-1.5 border-b-2 border-transparent transition-all duration-400 hover:border-white"
            href="#products"
          >
            Products
          </a>
        </li>
        <li>
          <a
            className="relative pb-1.5 border-b-2 border-transparent transition-all duration-400 hover:border-white"
            href="#contacts"
          >
            Contacts
          </a>
        </li>
        <li>
          <a
            className="relative pb-1.5 border-b-2 border-transparent transition-all duration-400 hover:border-white"
            href="#discord"
          >
            Discord
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
