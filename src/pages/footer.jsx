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
              <a href="https://www.google.com/maps/place/Pet+Center+Cariri/@-7.2034765,-39.3119106,385a,75y,229.12h,77.01t/data=!3m7!1e1!3m5!1sxF6WRHQ5dFcjxxkGeYyA6w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.991644371644753%26panoid%3DxF6WRHQ5dFcjxxkGeYyA6w%26yaw%3D229.1173721186526!7i16384!8i8192!4m10!1m2!2m1!1spet+center!3m6!1s0x7a17f6a8f80fbdf:0xa52eb751751fb88b!8m2!3d-7.2035889!4d-39.3119071!15sCgpwZXQgY2VudGVyWgwiCnBldCBjZW50ZXKSAQ9hbmltYWxfaG9zcGl0YWyaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjFMV00yZVZwM0VBReABAPoBBAgAEDE!16s%2Fg%2F11jvkc2snv?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="transition hover:text-white hover:underline">
                <span>Rua do Cruzeiro - 806</span>
                <br />
                <span>Centro - Juazeiro do Norte/CE</span>
              </a>
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