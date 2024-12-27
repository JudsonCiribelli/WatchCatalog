import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex  items-center justify-around w-full h-16 bg-[#2D3142] px-4 sm:px-8 md:px-12">
      <Link
        className="no-underline text-3xl text-white font-bold cursor-pointer  "
        to="/"
      >
        WatchCatalog
      </Link>
      <Link
        className="cursor-pointer  bg-white py-2 px-4  sm:px-6  no-underline text-black rounded text-sm sm:text-base md:text-sm md:text-lg"
        to="/favorites"
      >
        Meus Favoritos
      </Link>
    </header>
  );
};
export default Header;
