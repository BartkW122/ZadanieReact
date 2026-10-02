export default function MovieCard({
  movieTitle,
  genre,
  duration,
  description,
  poster,
  showtime,
  onWybierz,
}) {
  const godziny = Math.floor(duration / 3600);
  const minuty = Math.floor((duration % 3600) / 60);

  return (
    <div className="movie-card">
      <img src={poster} alt={movieTitle} />
      <h2>{movieTitle}</h2>
      <p className="gatunek">{genre}</p>
      <p>
        Czas trwania: {godziny} h {minuty} min
      </p>
      <p className="opis">{description}</p>

      <div className="seanse">
        <span>Wybierz seans:</span>
        {showtime.map((godzina) => (
          <button key={godzina} onClick={() => onWybierz(godzina)}>
            {godzina}
          </button>
        ))}
      </div>
    </div>
  );
}
