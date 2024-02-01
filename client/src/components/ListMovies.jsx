import { useEffect, useState } from "react";
import { url } from "../utils/constant";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const ListMovies = () => {
  console.log("ListMovies");
  const [allMovies, setAllMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    // console.log(movies);
    setAllMovies(movies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-wrap justify-center my-4">
      {allMovies.length >= 1 &&
        allMovies.map((movie) => (
          <Link
            className="m-5 px-6 py-4 w-1/5 bg-yellow-100 text-center rounded-2xl"
            key={movie.show.id}
            to={"/movie/" + movie.show.id}
          >
            <MovieCard movie={movie.show} />
          </Link>
        ))}
    </div>
  );
};
export default ListMovies;
