import { useEffect, useState } from "react";
import fundomobile from "../assets/img/fundomobile.webp";

export default function BanhoTosa() {
  const [modalAgendar, setModalAgendar] = useState(false);
  const [servicoDesejado, setServicoDesejado] = useState("");

  useEffect(() => {
    if (modalAgendar) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [modalAgendar]);

  function abrirAgendamento(servico) {
    setServicoDesejado(servico);
    setModalAgendar(true);
  }

  function enviarWhatsBanho(event) {
    event.preventDefault();
    const dados = new FormData(event.currentTarget);
    const obter = (campo) => String(dados.get(campo) ?? "");

    const mensagem = `Olá, tudo bem? Gostaria de agendar um serviço.

Serviço: ${servicoDesejado}
Nome do tutor: ${obter("nomeTutor")}
Nome do pet: ${obter("nomePet")}
Telefone: ${obter("telefone")}
Porte: ${obter("porte")}
Raça: ${obter("raca")}

Quanto ficaria o serviço?`.trim();

    const urlEnvio =
      "https://wa.me/5500000000000?text=" + encodeURIComponent(mensagem);

    window.open(urlEnvio, "_blank", "noopener,noreferrer");
  }

  const servicos = [
    {
      nome: "Banho",
      descricao: "Banho completo com produtos de alta qualidade",
      preco: "R$ 50,00",
    },
    {
      nome: "Tosa",
      descricao: "Tosa completa com produtos de alta qualidade",
      preco: "R$ 50,00",
    },
    {
      nome: "Hidratação",
      descricao: "Hidratação completa com produtos de alta qualidade",
      preco: "R$ 50,00",
    },
    {
      nome: "Banho e Tosa Completa",
      descricao: "Banho e Tosa completa com produtos de alta qualidade",
      preco: "R$ 50,00",
    },
  ];

  return (
    <>
      <main>
        <section
          id="banhoetosa"
          className="w-full h-full bg-[#FBF0E2] flex px-8 lg:justify-around scroll-mt-24"
        >
          <div className="pt-12 w-full lg:w-120 ">
            <p className="text-brand-700 font-['Inter'] text-sm">
              {" "}
              ESTÉTICA PREMIUM
            </p>
            <h2 className="font-bold text-4xl pt-5 pb-1 md:text-5xl font-['Inter'] ">
              Cuidado, carinho e bem-estar para seu pet
            </h2>

            <div className="flex items-center md:pt-8">
              <p className="text-stone-600 text-sm md:text-lg">
                Oferecemos banho, tosa e estética pensados para manter seu pet
                limpo, saudável e confortável.
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => abrirAgendamento("Banho")}
                className="bg-brand-700 p-3 text-white text-sm flex text-center items-center rounded-md cursor-pointer font-['Inter'] font-semibold capitalize hover:bg-brand-600"
              >
                Agendar Banho
              </button>
              <a
                href="#servicos"
                className=" p-3 font-['Inter'] capitalize text-sm flex text-center items-center border-2 border-brand-700 rounded-md hover:bg-brand-700 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Conhecer Serviços
              </a>
            </div>

            <div className="pt-3 pb-2 flex justify-around md:gap-2 font-light">
              <p className="text-[12px] md:text-sm">Atendimento Personalizado</p>
              <p className="text-[12px] md:text-sm">Produtos de Qualidade</p>
              <p className="text-[12px] md:text-sm">Ambiente Seguro</p>
            </div>
          </div>

          <div className="p-5 hidden md:flex items-center">
            <img
              src={fundomobile}
              alt="Banho e Tosa"
              width="1100"
              height="1513"
              loading="lazy"
              decoding="async"
              className="h-80 w-80 lg:w-140 lg:h-100 object-cover rounded-3xl shadow-md"
            />
          </div>
        </section>

        <section
          id="servicos"
          className="w-full h-full bg-brand-50 font-['Inter'] py-4 scroll-mt-24"
        >
          <div className="flex flex-col justify-center items-center px-4 pt-10">
            <p className="text-brand-700 font-['Inter'] text-sm">
              NOSSOS SERVIÇOS
            </p>
            <h2 className="text-center font-bold text-4xl pt-5 pb-1 md:text-5xl font-['Inter']">
              Tudo para manter seu pet bem cuidado.
            </h2>
            <p className="text-brand-700 text-md w-80 text-center md:text-lg lg:w-100">
              Escolha os serviços para as necessidades do seu pet.
            </p>
            <p className="text-[10px] w-80 text-center font-light">
              Lembrando que os preços podem ser alterados conforme o tamanho do
              pet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-4xl mx-auto">
            {servicos.map((item) => (
              <div
                key={item.nome}
                className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border border-stone-100 w-full"
              >
                <h3 className="font-bold text-lg text-stone-800">
                  {item.nome}
                </h3>

                <p className="font-light text-stone-600 text-sm leading-relaxed">
                  {item.descricao}
                </p>

                <div className="flex items-center justify-between mt-1 border-t border-stone-100 pt-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-400 uppercase tracking-wide">
                      a partir de
                    </span>
                    <span className="font-bold text-lg text-stone-800">
                      {item.preco}
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => abrirAgendamento(item.nome)}
                    className="bg-brand-700 px-4 py-2 text-white text-sm text-center rounded-lg cursor-pointer font-['Inter'] font-semibold hover:bg-brand-600 transition-colors shadow-sm"
                  >
                    Agendar Banho
                  </button>
                </div>
              </div>
            ))}
          </div>

          {modalAgendar && (
            <div
              className="fixed inset-0 z-[500] flex items-center justify-center bg-black/30 px-4 py-6"
              onClick={() => setModalAgendar(false)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="titulo-agendamento"
                className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setModalAgendar(false)}
                  aria-label="Fechar formulário"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-2xl text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
                >
                  &times;
                </button>

                <div className="mb-6 pr-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                    Agendamento
                  </p>

                  <h3
                    id="titulo-agendamento"
                    className="mt-1 text-2xl font-bold text-stone-800"
                  >
                    Agendar serviço
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-stone-500">
                    Preencha seus dados e entraremos em contato para confirmar o
                    atendimento.
                  </p>
                </div>

                <form className="flex flex-col gap-4 font-['Inter']" onSubmit={enviarWhatsBanho}>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="nomeTutor"
                      className="text-sm font-medium text-stone-700"
                    >
                      Seu nome
                    </label>

                    <input
                      id="nomeTutor"
                      name="nomeTutor"
                      type="text"
                      placeholder="Digite seu nome"
                      className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="nomePet"
                      className="text-sm font-medium text-stone-700"
                    >
                      Nome do pet
                    </label>

                    <input
                      id="nomePet"
                      name="nomePet"
                      type="text"
                      placeholder="Digite o nome do pet"
                      className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="telefone"
                      className="text-sm font-medium text-stone-700"
                    >
                      Telefone
                    </label>

                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(XX) XXXXX-XXXX"
                      className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="porte" className="text-sm font-medium text-stone-700">
                      Porte do pet
                    </label>

                    <select
                      id="porte"
                      name="porte"
                      className="rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-700 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                      required
                    >
                      <option value="" disabled>
                        Selecione o porte
                      </option>
                      <option value="Pequeno">Pequeno</option>
                      <option value="Médio">Médio</option>
                      <option value="Grande">Grande</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="raca" className="text-sm font-medium text-stone-700">
                      Raça
                    </label>

                    <input
                      id="raca"
                      name="raca"
                      type="text"
                      placeholder="Digite a raça do pet"
                      className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                      required
                    />
                  </div>
                  <p className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-sm leading-relaxed text-stone-700">
                    <strong>Privacidade:</strong> ao continuar, os dados
                    informados serão incluídos no texto de uma mensagem de
                    WhatsApp dirigida ao estabelecimento para responder ao seu
                    pedido ou agendamento. O site não envia esses dados a um
                    backend próprio. O WhatsApp abrirá a mensagem preenchida
                    para você revisar e enviar; evite incluir informações
                    sensíveis. Consulte a{" "}
                    <a
                      href="#privacidade"
                      onClick={() => setModalAgendar(false)}
                      className="font-semibold text-brand-800 underline underline-offset-2 hover:text-brand-900"
                    >
                      política de privacidade
                    </a>
                    .
                  </p>
                  <p className="text-center text-[10px] text-red-500">
                    *Os valores podem sofrer alterações conforme o tamanho do pet*
                  </p>

              
                  <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setModalAgendar(false)}
                      className="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-600 transition hover:bg-stone-100"
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                      Agendar pelo WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}