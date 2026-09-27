export default function MovieCard({
  movieTitle,
  genre,
  duration,
  description,
  poster,
  showtime,
}) {
  return (
    <div>
      <header>{movieTitle}</header>
      <main>
        <img src={poster} />
        <span>{genre}</span>
        <span>{description}</span>
        <span>{duration}</span>
        <span>{showtime}</span>
      </main>
    </div>
  );
}
