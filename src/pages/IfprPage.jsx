import React from "react";

const IfprPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Cabeçalho */}
      <header className="header bg-green-600 text-white text-center py-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold">IFPR Paranavaí - Atividades de Extensão</h1>
      </header>

      {/* Conteúdo Principal */}
      <main className="mt-8">
        {/* Seção Sobre o Instituto */}
        <section className="section bg-gray-100 p-6 rounded-md shadow-md mb-6">
          <h1 className="text-2xl font-semibold mb-4 text-green-700">Sobre o Instituto Federal</h1>
          <p className="text-gray-700 leading-relaxed">
            O Instituto Federal do Paraná (IFPR) é uma instituição pública federal de ensino
            vinculada ao Ministério da Educação (MEC) por meio da Secretaria de Educação Profissional
            e Tecnológica (SETEC). É voltada à educação superior, básica e profissional,
            especializada na oferta gratuita de educação profissional e tecnológicas nas
            diferentes modalidades e níveis de ensino.
          </p>
        </section>

        {/* Seção Sobre a Disciplina */}
        <section className="section bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Sobre a Disciplina</h2>
          <p className="text-gray-700 leading-relaxed">
            As atividades e/ou ações de extensão são processos educativos culturais, políticos,
            sociais, inclusivos, científicos e tecnológicos que promovem, de forma indissociável ao
            ensino e à pesquisa, a interação entre o Instituto Federal de Educação, Ciência e
            Tecnologia do Paraná (IFPR) e a sociedade.
          </p>
        </section>
      </main>
    </div>
  );
};

export default IfprPage;
