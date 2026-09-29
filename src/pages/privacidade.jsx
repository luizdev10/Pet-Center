import { useEffect, useRef } from "react";

export default function Privacidade() {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    let scrollLocked = false;

    function bloquearRolagem() {
      if (scrollLocked) return;

      const larguraBarraRolagem = window.innerWidth - root.clientWidth;
      const paddingDireitoAtual =
        Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;

      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      if (larguraBarraRolagem > 0) {
        body.style.paddingRight = `${paddingDireitoAtual + larguraBarraRolagem}px`;
      }
      scrollLocked = true;
    }

    function restaurarRolagem() {
      if (!scrollLocked) return;

      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      scrollLocked = false;
    }

    function sincronizarDialogoComHash() {
      if (window.location.hash === "#privacidade") {
        if (!dialog.open) {
          dialog.showModal();
          bloquearRolagem();
        }
      } else if (dialog.open) {
        dialog.close();
      }
    }

    function aoFecharDialogo() {
      restaurarRolagem();
    }

    window.addEventListener("hashchange", sincronizarDialogoComHash);
    dialog.addEventListener("close", aoFecharDialogo);
    sincronizarDialogoComHash();

    return () => {
      window.removeEventListener("hashchange", sincronizarDialogoComHash);
      dialog.removeEventListener("close", aoFecharDialogo);
      restaurarRolagem();
    };
  }, []);

  function fecharDialogo() {
    if (window.location.hash === "#privacidade") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }

  return (
    <dialog
      ref={dialogRef}
      id="privacidade"
      aria-labelledby="titulo-privacidade"
      onClose={fecharDialogo}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-2xl bg-white p-0 text-stone-800 shadow-2xl backdrop:bg-black/60"
    >
      <div className="relative mx-auto max-w-4xl p-6 md:p-10">
        <div className="pr-12">
          <p className="font-semibold uppercase tracking-widest text-teal-700">
            Transparência
          </p>
          <h2
            id="titulo-privacidade"
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Política de privacidade
          </h2>
        </div>
        <button
          type="button"
          autoFocus
          aria-label="Fechar política de privacidade"
          onClick={() => dialogRef.current.close()}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full text-stone-500 transition hover:bg-stone-100 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-600 md:right-10 md:top-10"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <path d="m18 6-12 12M6 6l12 12" />
          </svg>
        </button>
        <p className="mt-4 leading-relaxed text-stone-600">
          Esta é uma versão inicial do texto e não constitui aconselhamento
          jurídico. Os campos destacados como “PREENCHER PELO RESPONSÁVEL”
          precisam ser confirmados e completados pelo estabelecimento antes da
          publicação definitiva.
        </p>

        <div className="mt-8 space-y-6">
          <section aria-labelledby="responsavel-privacidade">
            <h3
              id="responsavel-privacidade"
              className="text-xl font-bold text-stone-900"
            >
              Quem é responsável pelos seus dados?
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              É a pessoa ou empresa que decide por que e como seus dados são
              usados. Neste caso, o estabelecimento precisa informar sua
              identificação:
            </p>
            <p className="mt-2 rounded-lg border border-amber-300 bg-amber-50 p-4 font-medium leading-relaxed text-amber-950">
              PREENCHER PELO RESPONSÁVEL: nome empresarial ou identificação
              jurídica confirmada do estabelecimento e demais dados de
              identificação que devam ser publicados.
            </p>
          </section>

          <section aria-labelledby="dados-privacidade">
            <h3
              id="dados-privacidade"
              className="text-xl font-bold text-stone-900"
            >
              Quais informações são usadas e para quê
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              No formulário de consulta, você pode informar seu nome e
              telefone, nome, espécie, raça e idade do pet, além do motivo da
              consulta, início de sintomas e observações. No formulário de
              banho e tosa, podem ser informados seu nome e telefone, nome,
              porte e raça do pet e o serviço escolhido. Neste site, essas
              informações são usadas exclusivamente para montar o texto da
              mensagem de WhatsApp que você pode enviar ao estabelecimento
              sobre seu pedido ou agendamento.
            </p>
          </section>

          <section aria-labelledby="envio-privacidade">
            <h3
              id="envio-privacidade"
              className="text-xl font-bold text-stone-900"
            >
              Como funciona o envio pelo WhatsApp
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              Ao enviar um formulário, este site prepara uma mensagem com os
              dados informados e abre o WhatsApp com o texto preenchido. O site
              não envia esses dados a um backend próprio. Confira a mensagem e
              decida se deseja enviá-la pelo WhatsApp. Evite incluir
              informações sensíveis ou que não sejam necessárias para o
              atendimento solicitado.
            </p>
          </section>

          <section aria-labelledby="retencao-privacidade">
            <h3
              id="retencao-privacidade"
              className="text-xl font-bold text-stone-900"
            >
              Prazo de guarda
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              Depois de enviadas, as mensagens podem permanecer no histórico do
              WhatsApp do estabelecimento por tempo indeterminado.
            </p>
          </section>

          <section aria-labelledby="solicitacoes-privacidade">
            <h3
              id="solicitacoes-privacidade"
              className="text-xl font-bold text-stone-900"
            >
              Dúvidas e solicitações sobre privacidade
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              Para dúvidas ou solicitações relacionadas a dados pessoais, use
              o WhatsApp da empresa:
            </p>
            <a
              href="https://wa.me/558898110518"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex rounded-lg border border-teal-200 bg-teal-50 p-4 font-semibold text-teal-900 underline underline-offset-2 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              WhatsApp: (88) 9811-0518
            </a>
          </section>
        </div>
      </div>
    </dialog>
  );
}
