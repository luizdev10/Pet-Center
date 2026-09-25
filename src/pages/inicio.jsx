import fundo1 from "../assets/img/imginicio.png";

function Inicio() {
  return (
    <section
      id="inicio"
      className="overflow-hidden bg-[#F7F1E1] px-5 pb-12 pt-28 font-['Inter'] md:px-10 md:pb-20 md:pt-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Pet Center
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
            O cuidado que seu pet merece, pertinho de você.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
            Unimos carinho, tecnologia e profissionais especializados para
            cuidar da saúde e da alegria do seu melhor amigo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/558888597138?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Fale conosco
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-700 px-6 py-3 font-semibold text-orange-800 transition hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Conheça nossos serviços
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-600">
            Atendimento atencioso para pets e tutores.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-orange-200/70" />

          <img
            src={fundo1}
            alt="Pet recebendo carinho e cuidados"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
          />

          
        </div>
      </div>
    </section>
  );
}

export default Inicio;