import { DiscIcon } from "lucide-react";

function Description() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-0 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-white text-center text-4xl md:text-6xl font-extrabold font-poppins max-w-4xl leading-tight">
          Venha para a TechLab!
        </h1>

        <p className="text-white text-center text-lg font-light font-poppins max-w-xl leading-relaxed">
          A TechLab é uma loja especializada no desenvolvimento de Bots, Sites e
          Automações em geral. Entregamos diversas soluções com base no seu
          problema!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <button className="bg-neutral-700 text-white h-13 w-50 rounded-lg cursor-pointer transition-colors hover:bg-neutral-600">
          Entre na TechLab
        </button>
        <button className="bg-neutral-700 text-white h-13 w-50 rounded-lg cursor-pointer transition-colors hover:bg-neutral-600">
          Veja nossos produtos
        </button>
      </div>
    </div>
  );
}

export default Description;
