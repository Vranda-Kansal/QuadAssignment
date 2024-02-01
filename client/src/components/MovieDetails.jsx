const MovieDetails = ({ movieData, setShowForm }) => {
  const {
    language,
    genres,
    rating,
    image,
    name,
    summary,
    schedule,
    runtime,
    averageRuntime,
  } = movieData;

  const handleClick = () => {
    setShowForm(true);
  };
  return (
    <div className="flex w-1/2 max-h-96 h-96 mx-auto bg-yellow-100 rounded-xl mt-32 p-2 ">
      <div className="w-1/2 h-full">
        {image ? (
          <img
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            src={image?.medium}
            alt="movie-card"
          />
        ) : (
          <img
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
            alt="no-image"
          />
        )}
      </div>
      <div className="w-full h-72 flex-wrap m-2 px-2">
        <div className="font-bold text-2xl text-yellow-950">{name}</div>
        <div>
          <span className="font-bold text-lg">Schedule: </span>
          <span className="text-lg">
            {schedule?.days + " at " + schedule?.time + " "}{" "}
          </span>
          <span className="font-semibold">
            ( {runtime || averageRuntime} min )
          </span>
        </div>
        <div>
          {language} | {genres.join(", ")}
        </div>
        <div>Rating : {rating?.average ? rating?.average : "No Rating"}</div>
        <div className="py-1 text-justify h-44 overflow-y-scroll no-scrollbar cursor-pointer">
          <span className="w-full h-full">
            {
              new DOMParser().parseFromString(summary, "text/html").body
                .innerText
            }
          </span>
        </div>
        <button
          className="w-full rounded-xl bg-amber-700 text-white py-2 my-3 "
          onClick={handleClick}
        >
          Book Ticket
        </button>
      </div>
    </div>
  );
};
export default MovieDetails;
