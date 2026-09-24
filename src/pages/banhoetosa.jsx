import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function BanhoTosa() {
  const [modalAgendar, setmodalAgendar] = useState(false)
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
        <section id="banhoetosa" className="w-full h-full bg-[#F7F1E1] flex px-8 lg:justify-around">
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
              <a href="#" className="bg-orange-500 p-3 text-white text-sm flex text-center items-center rounded-md cursor-pointer font-['Inter'] font-semibold text-capitalize hover:bg-orange-400">Agendar Banho</a>
              <a href="#servicos" className=" p-3 font-['Inter'] text-capitalize  text-sm flex text-center items-center border-2 border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">Conhecer Serviçoes</a>
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
        <section className="w-full h-full bg-orange-100 font-['Inter']" id="servicos">
          <div className="flex flex-col justify-center items-center px-4 pt-5 ">
            <p className="text-orange-500 font-['Inter'] text-sm">NOSSOS SERVIÇOS</p>
            <h1 className="text-center font-bold text-4xl pt-5 pb-1 md:text-5xl font-['Inter']">Tudo para manter seu pet bem cuidado.</h1>
            <p className="text-orange-600 text-md w-80 text-center md:text-lg">Escolha o serviços para as necessidades do seu pet.</p>
            <p className="text-[10px] w-80 text-center font-light">Lembrando que os precos podem ser alterados conforme o tamanho do pet.</p>
          </div>
          {servicos.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3 border border-gray-100 mx-3 my-3 ">
              <h4 className="hidden">{item.nome}</h4>

              <p className="font-light text-gray-600 text-sm leading-relaxed">
                {item.descricao}
              </p>

              <div className="flex items-center justify-between mt-1 border-t border-gray-50 pt-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide">a partir de</span>
                  <span className="font-bold text-lg text-gray-800">{item.preco}</span>
                </div>

                <button onClick={() => setmodalAgendar(true)} className="bg-orange-500 px-4 py-2 text-white text-sm text-center rounded-lg cursor-pointer font-['Inter'] font-semibold hover:bg-orange-400 transition-colors shadow-sm">
                  Agendar Banho
                </button>

                {modalAgendar && (
                  <div className="fixed inset-0 bg-blur backdrop-blur-[1px] flex items-center justify-center">
                    <div className="w-[300px] h-[500px] bg-white border border-gray-300 rounded-lg p-2 flex flex-col ">
                      <h3 className="flex justify-center">Agendar Serviço</h3>
                      <div className="px-4 py-4 flex ">
                        <form>
                          <div>
                            <label htmlFor="nome">Seu Nome</label>
                            <input type="text" placeholder="Digite seu nome" />
                          </div>
                          <div>
                            <label htmlFor="nome">Nome do Pet</label>
                            <input type="text" placeholder="Digite o nome do pet" />
                          </div>
                          <div>
                            <label htmlFor="nome">Data de Preferência</label>
                            <input type="date" placeholder="Digite a data" />
                          </div>
                          <div>
                            <label htmlFor="nome">Horario de Preferência</label>
                            <input type="time" placeholder="Digite seu nome" />
                          </div>
                          <div>
                            <label htmlFor="nome">Telefone</label>
                            <input type="text" placeholder="Digite seu telefone" />
                          </div>
                          <button type="submit">Agendar</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}