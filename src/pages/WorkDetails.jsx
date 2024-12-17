import { Link, useParams } from "react-router-dom";

const WorkDetails = () => {
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

  const { id } = useParams();
  const work = worksData.find((item) => item.id === parseInt(id));

  if (!work) {
    return <div className="text-center mt-10">Trabalho não encontrado!</div>;
  }

  return (
    <div className="flex flex-col w-full items-center p-6 bg-gray-100 min-h-screen">
      <header className="text-center py-4 w-full">
        <h1 className="text-2xl font-bold">{work.title}</h1>
      </header>
      <div className="overflow-hidden mt-6 w-full md:w-[600px]">
        <img src={work.imageUrl} alt={work.title} className="w-full h-56" />
        <div className="pt-6">
          <h2 className="text-xl font-semibold text-green-700">{work.title}</h2>
          <p className="text-gray-600 text-sm my-2">Autores: {work.authors}</p>
          <p className="text-gray-800 text-justify">{work.description}</p>
          <Link
            to="/works"
            className="inline-block mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails