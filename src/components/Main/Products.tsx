import { Bot, Globe, Zap } from "lucide-react";

function Products() {
  return (
    <section
      id="products"
      className="flex flex-col items-center gap-10 py-20 px-4 h-full"
      style={{ margin: "16px" }}
    >
      <h1 className="text-center mask-radial-from-neutral-600 text-white text-4xl md:text-6xl font-extrabold">
        Nossos Produtos e Serviços
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-neutral-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 h-full">
          <div className="flex flex-col items-center gap-3 mb-4">
            <Bot size={48} className="text-white" style={{ margin: "12px" }} />
            <h2 className="text-white text-2xl font-bold">
              Bots Personalizados
            </h2>
          </div>
          <ul className="text-white text-sm md:text-base flex flex-col gap-2">
            <li>• Bots para servidores e comunidades do Discord</li>
            <li>• Sistemas de tickets para atendimento</li>
            <li>• Bots de moderação e administração</li>
            <li>• Soluções personalizadas sob medida</li>
          </ul>
        </div>

        <div className="bg-neutral-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center gap-3 mb-4">
            <Globe
              size={48}
              className="text-white"
              style={{ margin: "12px" }}
            />
            <h2 className="text-white text-2xl font-bold">Websites Modernos</h2>
          </div>
          <p className="text-white text-sm md:text-base text-center">
            Sites responsivos, rápidos e otimizados para qualquer dispositivo.
            Layouts modernos e totalmente personalizáveis.
          </p>
        </div>

        <div className="bg-neutral-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center gap-3 mb-4">
            <Zap size={48} className="text-white" style={{ margin: "12px" }} />
            <h2 className="text-white text-2xl font-bold">
              Automações Inteligentes
            </h2>
          </div>
          <p className="text-white text-sm md:text-base text-center">
            Automatize processos repetitivos e ganhe produtividade com scripts,
            integrações e fluxos sob medida.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Products;
