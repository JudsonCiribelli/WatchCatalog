import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Services
import Api from "../../services/api.js";
const Home = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function LoadSeries() {
      const response = await Api.get("/shows", {
        params: {
          api_key: "RKD2jq4fv7VIoYecYDSZoWTwnSsCwIkF",
          language: "pt-BR",
          page: 1,
        },
      });
      setSeries(response.data.slice(0, 20));
    }
    LoadSeries();
  }, []);

  return (
    <div className="ml-16">
      <div className="grid grid-cols-4 gap-4  max-w-full  my-5  ml-16">
        {series.map((series) => {
          return (
            <article key={series.id} className="w-full p-3.5 rounded-md">
              <h1 className=" block mb-4 text-base">{series.name}</h1>
              <img src={series.image.medium} alt={series.name} />
              <Link to={`/details/${series.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
