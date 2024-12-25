import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Services
import Api from "../../services/api.js";
//Components
import Loading from "../../Components/Loading/Loading-Component.js";

const Details = () => {
  const [serie, setSerie] = useState(null); // Inicializar como null
  const { id } = useParams();

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
      }
    }
    LoadSeries();
  }, [id]);

  if (!serie) {
    return <Loading />;
  }

  return (
    <div className=" h-full flex justify-center items-center  w-full my-20">
      <img
        className="h-h-500 rounded-l-xl  "
        src={serie.image?.original || "/placeholder.jpg"}
        alt={serie.name || "Série sem nome"}
      />

      <div className="flex flex-col justify-start space-y-4 p-8 w-2/5 h-h-500 bg-[#C0C0C0] border-solidborder-2 rounded-r-xl">
        <h1>{serie.name || "Título indisponível"}</h1>
        <h2>{serie.language || "Idioma não especificado"}</h2>
        <h2>{serie.premiered || "Data não disponível"}</h2>
        <h2>Duração: {serie.runtime || "Duração não informada"} Minutos</h2>
        <h2>Avaliação: {serie.rating?.average || "N/A"} /10</h2>
      </div>
    </div>
  );
};

export default Details;
