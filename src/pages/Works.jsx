import { Link } from "react-router-dom";

const Works = () => {
  const worksData = [
    {
      id: 1,
      title: "Ensino Prático sobre Fake News para a 3ª Idade",
      authors: "Gimenez, Marques, Sorrilha, Rebussi",
      description:
        "Essa atividade foi realizada no Instituto Maurício Gehlen, e consistiu em uma apresentação com roda de conversa para os alunos, pertencentes à 3ª idade. A temática foi sobre as fake news, em que foram ensinadas premissas para desmascarar notícias duvidosas. Por fim, foi aplicada uma atividade prática de investigação de notícias suspeitas.",
      imageUrl: "/image.png",
    },
    {
      id: 2,
      title: "Ensino Prático sobre Fake News para a 3ª Idade",
      authors: "Gimenez, Marques, Sorrilha, Rebussi",
      description:
        "Essa atividade foi realizada no Instituto Maurício Gehlen, e consistiu em uma apresentação com roda de conversa para os alunos, pertencentes à 3ª idade. A temática foi sobre as fake news, em que foram ensinadas premissas para desmascarar notícias duvidosas. Por fim, foi aplicada uma atividade prática de investigação de notícias suspeitas.",
      imageUrl: "/image.png",
    },
  ];

  return (
    <main className="p-6 bg-gray-100 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-3">Trabalhos Recentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {worksData.map((work) => (
          <div
            key={work.id}
            className="bg-tertiary shadow-md rounded-lg overflow-hidden max-w-md mx-auto p-4"
          >
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-40"
            />
            <div className="p-3">
              <h3 className="text-md font-bold text-green-700">{work.title}</h3>
              <p className="text-gray-600 text-sm my-1">{work.authors}</p>
              <p className="text-gray-700 text-justify line-clamp-3 mb-4">
                {work.description}
              </p>
              <Link
                to={`/works/${work.id}`}
                className="inline-block bg-green-700 text-white px-3 py-1.5 rounded hover:bg-green-800 transition duration-300 text-sm"
              >
                Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Works