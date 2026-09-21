import fundo1 from "../assets/img/imginicio.png";
import mobile from "../assets/img/fundomobile.jpg"
function Inicio() {
    return (
        <section className="w-full h-screen flex items-center justify-center pt-20">
            <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat brightness-50 md:hidden"
                style={{ backgroundImage: `url(${mobile})`}}
            />

            <div className="flex gap-4 px-5 z-10">
                <div className=" flex flex-col gap-10">
                    <h1 className="text-4xl font-bold text-gray-200 md:text-teal-900">O cuidado que seu pet merece, pertinho de você!</h1>
                    <p className="text-gray-200 text-xl font-normal text-capitalize">Na Pet Center, unimos amor, tecnologia e profissionais especializados para garantir a saúde e a alegria do seu melhor amigo de asas ou quatro patas.</p>
                    <a href="https://wa.me/558888597138?text=Olá!%20Tudo%20bem." target="_blank" rel="noopener noreferrer" className="text-white text-2xl font-normal text-capitalize cursor-pointer bg-amber-600 p-4 rounded-md w-max hover:bg-amber-500 transition-colors cursor-pointer">Fale conosco pelo WhatsApp!</a>
                </div>
                <div className="w-full h-full md:flex hidden">
                    <img src={fundo1} alt="fundo-inicio" className="object-cover top-0 left-0 rounded-xl" />
                </div>
            </div>
        </section>
    )
}

export default Inicio;