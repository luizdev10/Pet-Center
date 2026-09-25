import { useEffect, useState } from "react";


export default function BanhoTosa() {
  const [modalAgendar, setmodalAgendar] = useState(false)
  const [servisoDesejado, setservicoDesejado] = useState("")

  useEffect(() => {
    if (modalAgendar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalAgendar]);

  const [form, setForm] = useState({
  nomeTutor: "",
  nomePet: "",
  telefone: "",
  porte: "",
  raca: "",

});

function armazenarform(event){
  const {name, value} = event.target;

  setForm((prev)=>({
    ...prev, [name]:value,
  }))
}

  function enviarwhatsbanho(event) {
    event.preventDefault();

    const mensagem = `Olá tudo bem? eu gostaria de agendar um serviço.

    Serviço: ${servisoDesejado}
    nome do tutor: ${form.nomeTutor}
    nome do pet: ${form.nomePet}
    telefone: ${form.telefone}
    porte: ${form.porte}
    raça: ${form.raca}
   quanto ficaria o serviço?
    `.trim();


    const urlEnvio = "https://wa.me/5588988853140?text=" + encodeURIComponent(mensagem);

    window.open(urlEnvio, "_blank");


  }


  const servicos = [
    {
      nome: "Banho",
      descricao: "Banho completo com produtos de alta qualidade",
      preco: "R$ 50,00"
    },
    {
      nome: "Tosa",
      descricao: "Tosa completa com produtos de alta qualidade",
      preco: "R$ 50,00"
    },
    {
      nome: "Hidratação",
      descricao: "Hidratação completa com produtos de alta qualidade",
      preco: "R$ 50,00"
    },
    {
      nome: "Banho e Tosa Completa",
      descricao: "Banho e Tosa completa com produtos de alta qualidade",
      preco: "R$ 50,00"
    }
  ]
  return (
    <>
      <main>
        <section id="banhoetosa" className="w-full h-full bg-[#F7F1E1] flex px-8 lg:justify-around scroll-mt-24">
          <div className="pt-12 w-full lg:w-120 ">

            <p className="text-orange-500 font-['Inter'] text-sm">  BANHO & TOSA</p>
            <h1 className="font-bold text-4xl pt-5 pb-1 md:text-5xl font-['Inter'] ">Cuidado, carinho e bem-estar para seu pet</h1>


            <div className="flex items-center md:pt-8">
              <p className="text-gray-600 text-sm md:text-lg">
                Oferecemos serviços de banho e tosa pensados para manter seu pet limpo, saudável e confortável.
              </p>
              <div className="p-5 md:hidden">
                <div className="h-45 w-45 bg-amber-900">

                </div>
              </div>
            </div>


            <div className="pt-4 flex gap-4">
              <a href="#servicos" className="bg-orange-500 p-3 text-white text-sm flex text-center items-center rounded-md cursor-pointer font-['Inter'] font-semibold text-capitalize hover:bg-orange-400">Agendar Banho</a>
              <a href="#servicos" className=" p-3 font-['Inter'] text-capitalize  text-sm flex text-center items-center border-2 border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">Conhecer Serviços</a>
            </div>


            <div className="pt-3 pb-2 flex justify-around md:gap-2 font-light">
              <p className="text-[12px] md:text-sm">Atendimento Personalizado</p>
              <p className="text-[12px] md:text-sm">Produtos de Qualidade</p>
              <p className="text-[12px] md:text-sm">Ambiente Seguro</p>
            </div>



          </div>

          <div className="p-5 hidden md:flex items-center">
            <div className="h-80 w-80  lg:w-140 lg:h-120 bg-amber-600">

            </div>
          </div>


        </section>
        <section id="servicos" className="w-full h-full bg-orange-100 font-['Inter'] py-4 scroll-mt-24" >
          <div className="flex flex-col justify-center items-center px-4 pt-10">
            <p className="text-orange-500 font-['Inter'] text-sm">NOSSOS SERVIÇOS</p>
            <h1 className="text-center font-bold text-4xl pt-5 pb-1 md:text-5xl font-['Inter']">Tudo para manter seu pet bem cuidado.</h1>
            <p className="text-orange-600 text-md w-80 text-center md:text-lg lg:w-100">Escolha o serviços para as necessidades do seu pet.</p>
            <p className="text-[10px] w-80 text-center font-light">Lembrando que os precos podem ser alterados conforme o tamanho do pet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-4xl mx-auto">
          {servicos.map((item) => (
            <div key={item.nome} className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border border-gray-100 w-full">
              <h4 className="hidden lg:flex font-bold">{item.nome}</h4>

              <p className="font-light text-gray-600 text-sm leading-relaxed">
                {item.descricao}
              </p>

              <div className="flex items-center justify-between mt-1 border-t border-gray-50 pt-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide">a partir de</span>
                  <span className="font-bold text-lg text-gray-800">{item.preco}</span>
                </div>

                <button onClick={() => { setmodalAgendar(true); setservicoDesejado(item.nome) }} className="bg-orange-500 px-4 py-2 text-white text-sm text-center rounded-lg cursor-pointer font-['Inter'] font-semibold hover:bg-orange-400 transition-colors shadow-sm">
                  Agendar Banho
                </button>
              </div>
            </div>
          ))}
          </div>

          {modalAgendar && (
            <div
              className="fixed inset-0 z-500 flex items-center justify-center bg-black/30 px-4 py-6"
              onClick={() => setmodalAgendar(false)}
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
                  onClick={() => setmodalAgendar(false)}
                  aria-label="Fechar formulário"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-2xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  &times;
                </button>

                <div className="mb-6 pr-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                    Agendamento
                  </p>

                  <h3
                    id="titulo-agendamento"
                    className="mt-1 text-2xl font-bold text-gray-800"
                  >
                    Agendar serviço
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Preencha seus dados e entraremos em contato para confirmar o
                    atendimento.
                  </p>
                </div>

                <form className="flex flex-col gap-4 font-['Inter']" onSubmit={enviarwhatsbanho}>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="nomeTutor"
                      className="text-sm font-medium text-gray-700"
                    >
                      Seu nome
                    </label>

                    <input
                      id="nomeTutor"
                      name="nomeTutor"
                      value={form.nomeTutor}
                      onChange={armazenarform}
                      type="text"
                      placeholder="Digite seu nome"
                      className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="nomePet"
                      className="text-sm font-medium text-gray-700"
                    >
                      Nome do pet
                    </label>

                    <input
                      id="nomePet"
                      name="nomePet"
                      value={form.nomePet}
                      onChange={armazenarform}
                      type="text"
                      placeholder="Digite o nome do pet"
                      className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="telefone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Telefone
                    </label>

                    <input
                      id="telefone"
                      name="telefone"
                      value={form.telefone}
                      onChange={armazenarform}
                      type="tel"
                      placeholder="(XX) XXXXX-XXXX"
                      className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="porte" className="text-sm font-medium text-gray-700">
                      Porte do pet
                    </label>

                    <select
                      id="porte"
                      name="porte"
                      value={form.porte}
                      onChange={armazenarform}
                      className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
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
                    <label htmlFor="raca" className="text-sm font-medium text-gray-700">
                      Raça
                    </label>

                    <input
                      id="raca"
                      name="raca"
                      value={form.raca}
                      onChange={armazenarform}
                      type="text"
                      placeholder="Digite a raça do pet"
                      className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      required
                    />
                  </div>
                  <p className="text-center text-[10px] text-red-500">
                    *Os valores podem sofrer alterações conforme o tamanho do pet*
                  </p>

              
                  <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setmodalAgendar(false)}
                      className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
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