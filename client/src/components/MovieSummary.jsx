import { useEffect, useState } from "react";
import { MovieUrl } from "../utils/constant";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import BookingForm from "./BookingForm";

const MovieSummary = () => {
  const [movieData, setMovieData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const { movieId } = useParams();

  const fetchData = async () => {
    const data = await fetch(MovieUrl + movieId);
    const movie = await data.json();
    setMovieData(movie);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (movieData === null) return;

  return (
    <div>
      <MovieDetails movieData={movieData} setShowForm={setShowForm} />
      {showForm && <BookingForm movieData={movieData} />}
    </div>
  );
};
export default MovieSummary;
