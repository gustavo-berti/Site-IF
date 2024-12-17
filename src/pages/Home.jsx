import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4">
      <div className="max-w-6xl bg-white shadow-lg rounded-lg p-6">
        {/* Seção Principal */}
        <div className="grid grid-cols-2 gap-4 items-center border-b pb-6 mb-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">O que é Extensão?</h2>
          </div>
          <div>
            <p className="text-xl text-gray-600 leading-relaxed text-justify">
              A extensão se caracteriza pelas atividades realizadas pela instituição para integração com a
              sociedade. Como intermediários dessa relação, estão os alunos, que aplicam o conhecimento e prática
              adquiridos visando a resolução de problemas da comunidade.
            </p>
          </div>
        </div>

        {/* Título de Trabalhos Recentes */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Trabalhos Recentes
        </h2>

        {/* Trabalhos Recentes */}
        <div className="grid grid-cols-2 gap-6">
          {/* Primeiro Card */}
          <div className="bg-green-100 rounded-lg p-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Palestra"
              className="rounded-md mb-4"
            />
            <h3 className="text-gray-800 font-semibold">(Ensino Pratico sobre <i>Fake News</i> para a 3ª Idade)</h3>
            <p className="text-gray-600 mb-2">(Gustavo G. Berti, Luan G. M. Marques, Thalles S. M. Barros, Vinicius de O. Rebussi)</p>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet. Cum beatae perspiciatis qui veniam place...
            </p>
          </div>

          {/* Segundo Card */}
          <div className="bg-green-100 rounded-lg p-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Distribuição"
              className="rounded-md mb-4"
            />
            <h3 className="text-gray-800 font-semibold">(Ensino Pratico sobre <i>Fake News</i> para a 3ª Idade)</h3>
            <p className="text-gray-600 mb-2">(Gustavo G. Berti, Luan G. M. Marques, Thalles S. M. Barros, Vinicius de O. Rebussi)</p>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet. Cum beatae perspiciatis qui veniam place...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
