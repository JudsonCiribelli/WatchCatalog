import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//Services
import Api from "../../services/api.js";
//Components
import Loading from "../../Components/Loading/Loading-Component.js";

const Details = () => {
  const [serie, setSerie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const plainTextSummary =
    serie?.summary?.replace(/<\/?[^>]+(>|$)/g, "") || "Sinopse não disponível";

  useEffect(() => {
    async function LoadSeries() {
      try {
        const response = await Api.get(`/shows/${id}`, {
          params: {
            api_key: "RKD2jq4fv7VIoYecYDSZoWTwnSsCwIkF",
            language: "pt-BR",
          },
        });
        console.log(response.data);
        setSerie(response.data);
      } catch (error) {
        console.error(error);
        navigate("/", { replace: true });
        return;
      }
    }
    LoadSeries();
  }, [id, navigate]);

  if (!serie) {
    return <Loading />;
  }

  const handleSaveSerie = () => {
    const myList = localStorage.getItem("@Series");

    let seriesList = JSON.parse(myList) || [];

    const hasSeries = seriesList.some((serieList) => serieList.id === serie.id);

    if (hasSeries) {
      alert("Este filme ja esta na sua lista");
      return;
    }

    seriesList.push(serie);

    localStorage.setItem("@Series", JSON.stringify(seriesList));

    alert("Filme salvo com sucesso");
  };

  return (
    <div className=" h-full flex justify-center items-center  w-full my-20">
      <img
        className="h-h-500 rounded-l-xl  "
        src={serie.image?.original || "/placeholder.jpg"}
        alt={serie.name || "Série sem nome"}
      />

      <div className="flex flex-col justify-start space-y-4 p-8 w-2/5 h-h-500 bg-[#C0C0C0] border-solidborder-2 rounded-r-xl">
        <strong className="text-3xl">
          {serie.name || "Title not specified"}
        </strong>
        <h2>
          <strong>Language:</strong>{" "}
          {serie.language || "Language not specified"}
        </h2>
        <h2>
          <strong>Release date:</strong>{" "}
          {serie.premiered || "Date not specified"}
        </h2>
        <h2>
          <strong>Duration:</strong> {serie.runtime || "Duration not specified"}{" "}
          Minutes
        </h2>
        <h2>
          <strong>Assessment: </strong>
          {serie.rating?.average || "Assessment not specified"}/10
        </h2>
        <strong>Synopsis</strong>
        <p>{plainTextSummary || "Synopsis not specified"}</p>
        <div className="flex">
          <button className="mr-3 bg-black text-white p-3 rounded">
            {" "}
            <a
              target="blank"
              rel="external"
              href={`https://www.youtube.com/results?search_query=${serie.name}`}
            >
              Trailer
            </a>
          </button>
          <button
            onClick={handleSaveSerie}
            className="mr-3  bg-black text-white p-3 rounded"
          >
            {" "}
            Salvar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
