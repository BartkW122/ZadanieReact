import MovieCard from "./MovieCard";
import movies from "./movies";

export default function ListaFilmow({ filtry }) {
  return (
    <div id="listaFilmow">
      {movies.map((film) => {
        const pasujeGenre =
          filtry.gener === "" ||
          film.genre.toLowerCase().includes(filtry.gener.toLowerCase());

        const pasujeTitle =
          filtry.title === "" ||
          film.title.toLowerCase().includes(filtry.title.toLowerCase());

        const pasujeOdKiedy =
          filtry.odKiedy === "" ||
          film.showtimes.some((godzina) => godzina >= filtry.odKiedy);

        const pasujeDoKiedy =
          filtry.doKiedy === "" ||
          film.showtimes.some((godzina) => godzina <= filtry.doKiedy);

        if (pasujeGenre && pasujeTitle && pasujeOdKiedy && pasujeDoKiedy) {
          return (
            <MovieCard
              key={film.id}
              movieTitle={film.title}
              genre={film.genre}
              duration={film.duration}
              description={film.description}
              poster={film.poster}
              showtime={film.showtimes}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
