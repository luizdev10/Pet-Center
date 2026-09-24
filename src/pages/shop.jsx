import { useState } from "react";

const produtos = [
  {
    id: 1,
    nome: "Bola Colorida",
    preco: "R$ 19,90",
    imagem: "/images/bola.jpg",
  },
  {
    id: 2,
    nome: "Mordedor para Cães",
    preco: "R$ 29,90",
    imagem: "/images/mordedor.jpg",
  },
  {
    id: 3,
    nome: "Ratinho de Pelúcia",
    preco: "R$ 14,90",
    imagem: "/images/ratinho.jpg",
  },
  {
    id: 4,
    nome: "Arranhador para Gatos",
    preco: "R$ 89,90",
    imagem: "/images/arranhador.jpg",
  },
  {
    id: 5,
    nome: "Corda para Cachorro",
    preco: "R$ 24,90",
    imagem: "/images/corda.jpg",
  },
  {
    id: 6,
    nome: "Bolinha com Guizo",
    preco: "R$ 12,90",
    imagem: "/images/bolinha-guizo.jpg",
  },
  {
    id: 7,
    nome: "Osso de Borracha",
    preco: "R$ 34,90",
    imagem: "/images/osso.jpg",
  },
  {
    id: 8,
    nome: "Túnel para Gatos",
    preco: "R$ 69,90",
    imagem: "/images/tunel.jpg",
  },
  {
    id: 9,
    nome: "Frisbee para Cães",
    preco: "R$ 39,90",
    imagem: "/images/frisbee.jpg",
  },
];

function comprarProduto(produto) {
  const telefone = "5511987654321";

  const mensagem = `Olá! Tenho interesse no produto:

${produto.nome}
Preço: ${produto.preco}

Gostaria de saber mais informações.`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
    mensagem
  )}`;

  window.open(url, "_blank");
}

export default function Shop() {
  const produtosPorPagina = 4;
  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const indiceFinal = indiceInicial + produtosPorPagina;

  const produtosVisiveis = produtos.slice(
    indiceInicial,
    indiceFinal
  );

  const totalDePaginas = Math.ceil(
    produtos.length / produtosPorPagina
  );

  return (
    <section
      id="shop"
      className="bg-orange-50 px-5 py-16 md:px-10 lg:px-20 font-['Inter']"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="font-semibold text-orange-500">
            Produtos para seu pet
          </span>

          <h2 className="mt-2 text-3xl font-bold text-stone-800 md:text-4xl">
            Brinquedos e acessórios
          </h2>

          <p className="mt-4 text-stone-600">
            Escolha seu produto favorito e fale conosco pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {produtosVisiveis.map((produto) => (
            <article
              key={produto.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-stone-800">
                  {produto.nome}
                </h3>

                <strong className="mt-3 block text-xl text-orange-500">
                  {produto.preco}
                </strong>

                <button
                  onClick={() => comprarProduto(produto)}
                  className="mt-5 w-full rounded-xl bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-600"
                >
                  Comprar pelo WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            onClick={() =>
              setPaginaAtual((pagina) => pagina - 1)
            }
            disabled={paginaAtual === 1}
            className="rounded-lg bg-white px-4 py-2 text-stone-700 shadow disabled:cursor-not-allowed disabled:opacity-40"
          >
            Anterior
          </button>

          {Array.from({ length: totalDePaginas }, (_, index) => {
            const numeroDaPagina = index + 1;

            return (
              <button
                key={numeroDaPagina}
                onClick={() => setPaginaAtual(numeroDaPagina)}
                className={`h-10 w-10 rounded-lg font-semibold ${
                  paginaAtual === numeroDaPagina
                    ? "bg-orange-500 text-white"
                    : "bg-white text-stone-700 hover:bg-orange-100"
                }`}
              >
                {numeroDaPagina}
              </button>
            );
          })}

          <button
            onClick={() =>
              setPaginaAtual((pagina) => pagina + 1)
            }
            disabled={paginaAtual === totalDePaginas}
            className="rounded-lg bg-white px-4 py-2 text-stone-700 shadow disabled:cursor-not-allowed disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      </div>
    </section>
  );
}