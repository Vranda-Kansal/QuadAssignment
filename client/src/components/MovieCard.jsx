const MovieCard = ({ movie }) => {
  console.log("MovieCard");
  const { language, genres, rating, image, name } = movie;
  const { average } = rating;

  const filledStars = Math.round(average / 2); // Assuming the rating is out of 10

  const renderStars = () => {
    const filledStars = Math.round(average / 2);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= filledStars ? "text-yellow-500" : "text-gray-300";
      stars.push(
        <span key={i} className={`text-2xl ${starClass}`}>
          ★
        </span>
      );
    }

    return stars;
  };
  return (
    <div className="">
      {image ? (
        <img
          className="w-64 h-72 object-cover rounded-lg shadow-xl shadow-amber-600 hover:scale-110 transition duration-500 cursor-pointer"
          src={image?.medium}
          alt="movie-card"
        />
      ) : (
        <img
          className="w-64 h-72 object-cover rounded-lg shadow-xl shadow-slate-500 hover:scale-110 transition duration-500 cursor-pointer"
          src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
          alt="no-image"
        />
      )}
      <div className="font-bold text-2xl text-yellow-950 mt-3 p-2">{name}</div>
      <div className="font-semibold text-xl m-1 p-1">
        {language} | {genres.join(", ")}
      </div>
      <div className="text-xl font-semibold">
        {renderStars()} {average ? average : "(No Rating)"}
      </div>
    </div>
  );
};
export default MovieCard;
