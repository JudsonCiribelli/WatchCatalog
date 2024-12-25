import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Components
import CustomButton from "../../Components/Custom-Button/Button-Component.js";
import Loading from "../../Components/Loading/Loading-Component.js";
//Services
import Api from "../../services/api.js";
const Home = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
    LoadSeries();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-16 bg-[#E4E4E4]">
      <div className="grid grid-cols-4 gap-4  max-w-full  my-5  ml-16">
        {series.map((series) => {
          return (
            <article key={series.id} className="w-full p-3.5 rounded-md">
              <img
                className="rounded-xl w-full"
                src={series.image.medium}
                alt={series.name}
              />
              <h1 className=" block mb-4 text-base">{series.name}</h1>
              <Link to={`/details/${series.id}`}>
                <CustomButton>Acessar</CustomButton>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
