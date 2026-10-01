export default function MovieCard({
  movieTitle,
  genre,
  duration,
  description,
  poster,
  showtime,
}) {
  return (
    <div className="movie-card">
      <h2>{movieTitle}</h2>
      <p>{genre}</p>
      <p>{duration}</p>
      <p>{description}</p>
      <img src={poster} alt={movieTitle} />
    </div>
  );
}
