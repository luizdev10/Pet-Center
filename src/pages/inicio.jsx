import fundo1 from "../assets/img/imginicio.webp";

function Inicio() {
  return (
    <section
      id="inicio"
      className="overflow-hidden bg-brand-50 px-5 pb-12 pt-28 font-['Inter'] md:px-10 md:pb-20 md:pt-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            Juavet
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
            O cuidado que seu pet merece, pertinho de você.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
            Solução completa para quem você ama: clínica, farmácia e estética
            premium em um só lugar.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Clínica", "Farmácia", "Estética Premium"].map((pilar) => (
              <span
                key={pilar}
                className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800"
              >
                {pilar}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5588933002233?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-800 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
            >
              Fale conosco
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-700 px-6 py-3 font-semibold text-brand-800 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
            >
              Conheça nossos serviços
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-600">
            Atendimento atencioso para pets e tutores.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-brand-300/60" />

          <img
            src={fundo1}
            alt="Pet recebendo carinho e cuidados"
            width="1100"
            height="825"
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
          />

          
        </div>
      </div>
    </section>
  );
}

export default Inicio;