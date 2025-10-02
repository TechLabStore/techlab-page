import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer
      className="text-white py-6 px-4 border-t-2 border-t-neutral-800"
      style={{ padding: "6px"}}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around md:h-35 md:items-center">
        <div className="flex items-center gap-1">
          <img src={logo} alt="TechLab Logo" className="h-10" />
          <h1 className="font-extrabold text-lg">
            TechLab
            <br />
          </h1>
        </div>

        <div className="text-center">
          <p>© 2025 TechLab Store. Todos os direitos reservados.</p>
        </div>

        <div className="md:flex gap-5 flex-row hidden">
          <ul className="flex flex-col gap-3 justify-center items-start md:flex-col">
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
                Produtos
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/Yt6bcW7JHC"
                className="relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                Discord
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 justify-center items-start md:flex-col">
            <li>
              <a className="cursor-default relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300">
                Bots
              </a>
            </li>
            <li>
              <a className="cursor-default relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300">
                WebSites
              </a>
            </li>
            <li>
              <a className="cursor-default relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300">
                Automações
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
