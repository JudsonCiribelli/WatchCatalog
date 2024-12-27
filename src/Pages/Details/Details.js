import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
      toast.warn("Esta série ja está na sua lista!");
      return;
    }

    seriesList.push(serie);

    localStorage.setItem("@Series", JSON.stringify(seriesList));

    toast.success("A série foi salva com sucesso!");
  };

  return (
    <div className="flex  items-center justify-center gap-6 w-full px-4 py-8">
      <img
        className="w-full max-w-xl sm:rounded-t-md"
        src={serie.image?.original || "/placeholder.jpg"}
        alt={serie.name || "Série sem nome"}
      />

      <div className="flex flex-col space-y-4 w-full max-w-xl p-6 bg-gray-200 rounded-xl">
        <strong className="text-3xl ">
          {serie.name || "Title not specified"}
        </strong>
        <h2>
          <strong className="sm:text-3xl">Language: </strong>{" "}
          <span className="sm:text-3xl">
            {serie.language || "Language not specified"}
          </span>
        </h2>
        <h2>
          <strong className="sm:text-3xl">Release date:</strong>{" "}
          <span className="sm:text-3xl">
            {" "}
            {serie.premiered || "Date not specified"}
          </span>
        </h2>
        <h2>
          <strong className="sm:text-3xl">Duration:</strong>
          <span className="sm:text-3xl">
            {" "}
            {serie.runtime || "Duration not specified"} Minutes
          </span>
        </h2>
        <h2>
          <strong className="sm:text-3xl">Assessment: </strong>
          <span className="sm:text-3xl">
            {" "}
            {serie.rating?.average || "Assessment not specified"}/10
          </span>
        </h2>
        <strong className="sm:text-3xl">Synopsis: </strong>
        <p className="sm:text-2xl">
          {plainTextSummary || "Synopsis not specified"}
        </p>
        <div className="flex flex-col gap-4">
          <button className="bg-black text-white px-4 py-2 rounded text-center sm:h-16 sm:text-2xl">
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
            className="bg-black text-white px-4 py-2 rounded sm:h-16 sm:text-2xl"
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
