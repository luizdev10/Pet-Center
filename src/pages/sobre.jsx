import fotoFundo from "../assets/img/sobrefundo.webp";

function Sobre() {
    const servicos = [
        { id: 1, nome: "Consultas" },
        { id: 2, nome: "Cirurgia" },
        { id: 3, nome: "Castração" },
        { id: 4, nome: "Vacinação" },
        { id: 5, nome: "e muito mais!" }
    ];

    return (
        <section
            id="sobre"
            className="w-full min-h-screen bg-cream py-20 px-6 md:px-16 lg:px-24 flex items-center"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <span className="font-['Inter'] text-brand-700 text-sm font-semibold tracking-[0.2em] uppercase">
                                Sobre nós
                            </span>
                        </div>

                        <h2 className="text-3xl font-['Inter'] md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                            Mais do que uma clínica: a segunda casa do seu pet.
                        </h2>

                        <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                            A nossa história começou há 6 anos com um objetivo simples, mas poderoso: oferecer medicina veterinária de excelência com o amor e o carinho que os nossos animais merecem. Ao longo desta trajetória, crescemos, modernizamos o nosso espaço e formamos uma equipe apaixonada. Hoje, orgulhamo-nos de ser uma referência na região, acompanhando o seu melhor amigo desde os primeiros passos.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-stone-300">
                            <div>
                                <span className="block text-2xl md:text-3xl font-bold text-brand-700">+6 anos</span>
                                <span className="text-stone-500 text-sm">de experiência</span>
                            </div>
                            <div>
                                <span className="block text-2xl md:text-3xl font-bold text-brand-700">2 mil</span>
                                <span className="text-stone-500 text-sm">Pets atendidos</span>
                            </div>
                            <div>
                                <span className="block text-2xl md:text-3xl font-bold text-brand-700">100%</span>
                                <span className="text-stone-500 text-sm">Dedicação</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <img
                                src={fotoFundo}
                                alt="Ilustração comemorativa de 6 anos da clínica"
                                width="1100"
                                height="600"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                       
                    </div>
                </div>

                <div className="flex flex-col items-center gap-10 mt-8 font-['Inter']">
                    <div className="w-full flex flex-col items-center gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-700 leading-tight tracking-tight text-center">
                            Contamos com:
                        </h2>

                        <div className="flex gap-4 flex-wrap justify-center items-center">
                            {servicos.map((item, index) => (
                                <div key={item.id} className="flex items-center gap-4">
                                    <span className="font-semibold text-xl md:text-2xl text-brand-800">
                                        {item.nome}
                                    </span>
                                    {index !== servicos.length - 1 && (
                                        <span className="h-6 border-l-2 border-brand-400"></span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <a
                        href="#servicos"
                        className="px-8 py-3 bg-brand-700 border-2 border-brand-800 rounded-lg text-brand-50 text-xl font-bold hover:text-white hover:bg-brand-600 transition-colors"
                    >
                        Saiba mais
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Sobre;