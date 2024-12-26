import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Favorites = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@Series");
    setSeries(JSON.parse(myList) || []);
  }, []);

  const handleRemoveSerieClick = (id) => {
    let filterSeries = series.filter((serie) => {
      return serie.id !== id;
    });
    setSeries(filterSeries);
    localStorage.setItem("@Series", JSON.stringify(filterSeries));
    toast.success("Série removida com sucesso!");
  };

  return (
    <div className="my-6 flex flex-col ">
      <h1 className="my-3 text-4xl mx-m-40% ">Meus Favoritos</h1>
      {series.length === 0 && (
        <span className="text-xl text-red-500 mx-m-38%">
          Você não possui nenhuma série salva!
        </span>
      )}

      <ul className="h-h-720 mx-m-20% ">
        {series.map((serie) => {
          return (
            <li
              key={serie.id}
              className="flex justify-between items-center my-4"
            >
              <span className="text-lg">{serie.name}</span>
              <div className="flex justify-center items-center">
                <Link
                  className="mx-4 bg-black p-2 text-white rounded"
                  to={`/details/${serie.id}`}
                >
                  {" "}
                  Ver detalhes
                </Link>
                <button
                  onClick={() => handleRemoveSerieClick(serie.id)}
                  className="bg-red-500 text-white mx-4 p-2 rounded"
                >
                  {" "}
                  Excluir{" "}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
