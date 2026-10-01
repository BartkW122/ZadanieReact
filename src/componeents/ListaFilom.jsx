import MovieCard from "./MovieCard";
import movies from "./movies";

export default function ListaFilmow({ filtry }) {
  return (
    <div id="listaFilmow">
      {movies.map((film) => (
        <MovieCard
          key={film.id}
          movieTitle={film.title}
          genre={film.genre}
          duration={film.duration}
          description={film.description}
          poster={film.poster}
          showtime={film.showtimes}
        />
      ))}
    </div>
  );
}
