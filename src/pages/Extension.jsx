import React from "react";

const Extension = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="max-w-3xl p-8">
        {/* Primeira seção */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-4">
            O que é Extensão?
          </h2>
          <p className="text-xl text-gray-600 text-justify leading-relaxed">
            As atividades e/ou ações de extensão são processos educativos,
            culturais, políticos, sociais, inclusivos, científicos e
            tecnológicos que promovem, de forma indissociável ao ensino e à
            pesquisa, a interação entre o Instituto Federal de Educação, Ciência
            e Tecnologia do Paraná (IFPR) e a sociedade.
          </p>
        </div>

        {/* Segunda seção */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-4">
            Protagonismo do Estudante
          </h2>
          <p className="text-xl text-gray-600 text-justify leading-relaxed">
            As atividades de extensão constituem aportes decisivos à formação do
            acadêmico, seja pela ampliação do universo de referência que
            ensejam, seja pelo contato direto com as grandes questões
            contemporâneas. Esses resultados possibilitam enriquecimento da
            experiência discente em termos teóricos e metodológicos, ao mesmo
            tempo em que permitem a reafirmação e materialização dos
            compromissos éticos e solidários da educação pública brasileira.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extension;
