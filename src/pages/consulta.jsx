export default function Consultas() {
  function enviarParaWhatsApp(event) {
    event.preventDefault();

    const formulario = event.currentTarget;
    const dados = new FormData(formulario);

    const obter = (campo) =>
      String(dados.get(campo) || "Não informado");

    const mensagem = `
Olá! Gostaria de agendar uma consulta.

DADOS DO TUTOR
Nome: ${obter("nomeTutor")}
Telefone: ${obter("telefone")}

DADOS DO PET
Nome: ${obter("nomePet")}
Espécie: ${obter("especie")}
Raça: ${obter("raca")}
Idade: ${obter("idade")}

SOBRE A CONSULTA
Motivo: ${obter("motivo")}
Quando começou: ${obter("inicio")}
Data preferida: ${obter("dataPreferida")}
Horário preferido: ${obter("horarioPreferido")}
Informações adicionais: ${obter("observacoes")}
    `.trim();

    
    const numeroWhatsApp = "5588988853140";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    formulario.reset();
  }

  const campoClass =
    "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100";

  return (
    <main className="bg-stone-50 text-stone-800">

      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="font-semibold uppercase tracking-widest text-teal-700">
              Agendamento
            </p>

            <h2
              id="agendamento"
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              Informações para a consulta
            </h2>

            <p className="mt-3 text-stone-600">
              Os campos com * são necessários para enviar a solicitação.
            </p>
          </div>

          <form
            onSubmit={enviarParaWhatsApp}
            className="space-y-8 rounded-2xl bg-white p-5 shadow-lg md:p-8"
          >
            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-bold">
                Dados do tutor
              </legend>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nomeTutor"
                    className="mb-2 block text-sm font-medium"
                  >
                    Seu nome *
                  </label>
                  <input
                    id="nomeTutor"
                    name="nomeTutor"
                    type="text"
                    autoComplete="name"
                    placeholder="Digite seu nome"
                    className={campoClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Telefone/WhatsApp *
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(XX) XXXXX-XXXX"
                    className={campoClass}
                    required
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-bold">Dados do pet</legend>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nomePet"
                    className="mb-2 block text-sm font-medium"
                  >
                    Nome do pet *
                  </label>
                  <input
                    id="nomePet"
                    name="nomePet"
                    type="text"
                    placeholder="Digite o nome do pet"
                    className={campoClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="especie"
                    className="mb-2 block text-sm font-medium"
                  >
                    Espécie *
                  </label>
                  <select
                    id="especie"
                    name="especie"
                    defaultValue=""
                    className={campoClass}
                    required
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="raca"
                    className="mb-2 block text-sm font-medium"
                  >
                    Raça
                  </label>
                  <input
                    id="raca"
                    name="raca"
                    type="text"
                    placeholder="Se não souber, pode deixar em branco"
                    className={campoClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="idade"
                    className="mb-2 block text-sm font-medium"
                  >
                    Idade aproximada
                  </label>
                  <input
                    id="idade"
                    name="idade"
                    type="text"
                    placeholder="Ex.: 3 anos"
                    className={campoClass}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-bold">
                Motivo e preferência de horário
              </legend>

              <div>
                <label
                  htmlFor="motivo"
                  className="mb-2 block text-sm font-medium"
                >
                  Motivo da consulta *
                </label>
                <select
                  id="motivo"
                  name="motivo"
                  defaultValue=""
                  className={campoClass}
                  required
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Consulta de rotina">Consulta de rotina</option>
                  <option value="Vacinação">Vacinação</option>
                  <option value="Retorno">Retorno</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="inicio"
                  className="mb-2 block text-sm font-medium"
                >
                  Se há algum sintoma, quando começou?
                </label>
                <input
                  id="inicio"
                  name="inicio"
                  type="text"
                  placeholder="Ex.: ontem, há uma semana..."
                  className={campoClass}
                />
              </div>

              <div>
                <label
                  htmlFor="observacoes"
                  className="mb-2 block text-sm font-medium"
                >
                  Informações adicionais
                </label>
                <textarea
                  id="observacoes"
                  name="observacoes"
                  rows="4"
                  placeholder="Descreva brevemente algo que a equipe deva saber"
                  className={`${campoClass} resize-y`}
                />
              </div>

              
            </fieldset>

            <p className="text-sm leading-relaxed text-stone-500">
              Ao continuar, as informações preenchidas serão incluídas em uma
              mensagem do WhatsApp para a clínica. O envio não confirma o
              agendamento; a equipe combinará o horário com você.
            </p>

            <button
              type="submit"
              className="w-full rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Continuar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}