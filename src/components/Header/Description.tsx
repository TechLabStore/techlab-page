function Description() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-4 md:px-0 gap-8"
    >
      <div className="flex flex-col items-center gap-4 text-white">
        <h1 className="text-center text-4xl md:text-7xl font-extrabold max-w-4xl leading-tight">
          Venha para a
          <br />
          <p className="mask-l-from-neutral-900">TechLab!</p>
        </h1>

        <p className="text-white text-center text font-light font max-w-xl leading-relaxed">
          A TechLab é uma loja especializada no desenvolvimento de Bots, Sites e
          Automações em geral. Entregamos diversas soluções com base no seu
          problema!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <a href="https://discord.gg/Yt6bcW7JHC">
          <button className="bg-neutral-700 text-white h-13 w-50 rounded-lg cursor-pointer transition-colors hover:bg-neutral-600">
            Entre na TechLab
          </button>
        </a>
        <a href="#products">
          <button className="bg-neutral-700 text-white h-13 w-50 rounded-lg cursor-pointer transition-colors hover:bg-neutral-600">
            Veja nossos produtos
          </button>
        </a>
      </div>
    </section>
  );
}

export default Description;
