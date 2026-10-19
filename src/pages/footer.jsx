import { Clock3, MapPin, Phone } from "lucide-react";
import logo from "../assets/img/logo-juavet.webp";

const links = [
  { texto: "Início", destino: "#inicio" },
  { texto: "Sobre nós", destino: "#sobre" },
  { texto: "Estética", destino: "#banhoetosa" },
  { texto: "Consultas", destino: "#consultas" },
  { texto: "Privacidade", destino: "#privacidade" },
];

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  const telefone = "5588933002233";
  const mensagem = encodeURIComponent("Olá! Tudo bem?");

  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3">
            <img src={logo} alt="Juavet" className="h-10 w-10" width="150" height="150" />
            <span className="text-xl font-bold">JUAVET</span>
          </a>

          <p className="mt-4 max-w-sm leading-relaxed text-brand-100">
            Clínica, farmácia e estética premium para quem você ama.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="mb-4 text-lg font-semibold">Navegação</h2>

          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.destino}>
                <a
                  href={link.destino}
                  className="text-brand-100 transition hover:text-white hover:underline"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Entre em contato</h2>

          <ul className="space-y-4 text-brand-100">
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
              <span>
                <span>Segunda a sexta, 8h às 17h</span>
                <br />
                <span>Sábado, 8h às 14h</span>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              <span>
                <span>R. do Cruzeiro, 1606 - Centro</span>
                <br />
                <span>Juazeiro do Norte - CE, 63010-485</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800 px-6 py-5 text-center text-sm text-brand-200">
        © {anoAtual} Juavet. Todos os direitos reservados.
      </div>
    </footer>
  );
}