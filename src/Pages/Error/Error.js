import { Link } from "react-router-dom";
//Components
import CustomButton from "../../Components/Custom-Button/Button-Component.js";

const Error = () => {
  return (
    <div className="w-full h-calc-100vh flex flex-col justify-center items-center ">
      <h1 className="text-9xl text-red-700">404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/">
        <CustomButton>Veja nosso catálogo</CustomButton>
      </Link>
    </div>
  );
};
export default Error;
