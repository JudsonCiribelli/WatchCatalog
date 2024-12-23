import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex  items-center justify-around w-full h-16 bg-black">
      <Link
        className="no-underline text-3xl text-white font-bold cursor-pointer "
        to="/"
      >
        WatchCatalog
      </Link>
      <Link
        className="cursor-pointer bg-white py-3 px-1.5 no-underline text-black rounded"
        to="/favorites"
      >
        Meus Favoritos
      </Link>
    </header>
  );
}

export default Header;
