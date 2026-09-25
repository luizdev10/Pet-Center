import { Clock3, MapPin, PawPrint, Phone } from "lucide-react";

const links = [
  { texto: "Início", destino: "#inicio" },
  { texto: "Sobre nós", destino: "#sobre" },
  { texto: "Banho e tosa", destino: "#banhoetosa" },
  { texto: "Consultas", destino: "#consultas" },
];

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  const telefone = "5588988853140";
  const mensagem = encodeURIComponent("Olá! Tudo bem?");

  return (
    <footer className="bg-teal-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3">
            <PawPrint aria-hidden="true" className="h-8 w-8 text-teal-300" />
            <span className="text-xl font-bold">PET CENTER</span>
          </a>

          <p className="mt-4 max-w-sm leading-relaxed text-teal-100">
            Cuidado, carinho e atenção para seu pet em todas as fases da vida.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="mb-4 text-lg font-semibold">Navegação</h2>

          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.destino}>
                <a
                  href={link.destino}
                  className="text-teal-100 transition hover:text-white hover:underline"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Entre em contato</h2>

          <ul className="space-y-4 text-teal-100">
            <li className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              <a
                href={`https://wa.me/${telefone}?text=${mensagem}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white hover:underline"
              >
                Fale conosco pelo WhatsApp
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Clock3 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              <span>Segunda a sábado, das 8h às 18h</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              <span>Adicione aqui o endereço do pet shop</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-800 px-6 py-5 text-center text-sm text-teal-200">
        © {anoAtual} Pet Center. Todos os direitos reservados.
      </div>
    </footer>
  );
}