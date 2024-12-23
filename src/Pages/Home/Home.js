import Api from "../../services/api.js";
import { useEffect, useState } from "react";
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
      console.log(response);
    }
    LoadSeries();
  }, []);

  return (
    <div>
      <h1>Pagina Home</h1>
    </div>
  );
};
export default Home;
