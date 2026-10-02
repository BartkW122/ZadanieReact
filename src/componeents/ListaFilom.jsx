import MovieCard from "./MovieCard";
import movies from "./movies";

export default function ListaFilmow({ filtry, onWybierz }) {
  const pasujaceFilmy = movies.filter((film) => {
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

    return pasujeGenre && pasujeTitle && pasujeOdKiedy && pasujeDoKiedy;
  });

  if (filtry.sort === "tytul") {
    pasujaceFilmy.sort((a, b) => a.title.localeCompare(b.title, "pl"));
  } else if (filtry.sort === "czas-rosnaco") {
    pasujaceFilmy.sort((a, b) => a.duration - b.duration);
  } else if (filtry.sort === "czas-malejaco") {
    pasujaceFilmy.sort((a, b) => b.duration - a.duration);
  }

  return (
    <div id="listaFilmow">
      {pasujaceFilmy.length === 0 && (
        <p className="komunikat">Brak filmów spełniających kryteria.</p>
      )}

      {pasujaceFilmy.map((film) => (
        <MovieCard
          key={film.id}
          movieTitle={film.title}
          genre={film.genre}
          duration={film.duration}
          description={film.description}
          poster={film.poster}
          showtime={film.showtimes}
          onWybierz={(godzina) => onWybierz(film, godzina)}
        />
      ))}
    </div>
  );
}
