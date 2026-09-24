import fundo1 from "../assets/img/imginicio.png";

function Inicio() {
    return (
        <section id="inicio" className="w-full h-screen flex items-center justify-center pt-20 bg-[#F7F1E1] md:bg-transparent">

            <div className="flex gap-4 px-5 z-10 font-['Inter']">
                <div className=" flex flex-col gap-10 md:gap-6 justify-center">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-emerald-950 md:text-6xl">O cuidado que seu pet merece, pertinho de você!</h1>
                    <p className="text-gray-600 text-xl font-normal text-capitalize md:text-2xl md:text-stone-700">Na Pet Center, unimos amor, tecnologia e profissionais especializados para garantir a saúde e a alegria do seu melhor amigo de asas ou quatro patas.</p>
                    <a href="https://wa.me/558888597138?text=Olá!%20Tudo%20bem." target="_blank" rel="noopener noreferrer" className="text-white text-2xl font-normal text-capitalize cursor-pointer bg-orange-500 p-4 rounded-md w-max hover:bg-orange-400 md:bg-orange-600 md:hover:bg-orange-500 md:hover:text-emerald-950 transition-all duration-300 shadow-lg hover:shadow-xl">Fale conosco pelo WhatsApp!</a>
                    <a href="#servicos" className="text-white text-2xl font-normal text-capitalize cursor-pointer bg-orange-500 p-4 rounded-md w-max hover:bg-orange-400 md:bg-orange-600 md:hover:bg-orange-500 md:hover:text-emerald-950 transition-all duration-300 shadow-lg hover:shadow-xl">Serviços</a>
                </div>
                <div className="w-full h-full md:flex hidden">
                    <img src={fundo1} alt="fundo-inicio" className="object-cover top-0 left-0 rounded-xl" />
                </div>
            </div>
        </section>
    )
}

export default Inicio;