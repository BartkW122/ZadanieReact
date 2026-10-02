import { useState } from "react";
import FormDoFiltrowania from "./FormDoFiltrowania";
import ListaFilmow from "./ListaFilom";
import Rezerwacja from "./Rezerwacja";
import Podsumowanie from "./Podsumowanie";
import { zajeteMiejsca } from "./SalaKinowa";

export default function Repertuar({
  filtryFilmu,
  setFiltryFilmu,
  rezerwacje,
  dodajRezerwacje,
}) {
  const [wybrany, setWybrany] = useState(null);
  const [podsumowanie, setPodsumowanie] = useState(null);

  function wybierzSeans(film, godzina) {
    setPodsumowanie(null);
    setWybrany({ film, godzina });
  }

  function zatwierdz(rezerwacja) {
    dodajRezerwacje(rezerwacja);
    setPodsumowanie(rezerwacja);
    setWybrany(null);
  }

  return (
    <>
      <FormDoFiltrowania
        filtryFilmu={filtryFilmu}
        setFiltryFilmu={setFiltryFilmu}
      />

      {podsumowanie && (
        <Podsumowanie
          rezerwacja={podsumowanie}
          onZamknij={() => setPodsumowanie(null)}
        />
      )}

      {wybrany && (
        <Rezerwacja
          key={wybrany.film.id + "-" + wybrany.godzina}
          film={wybrany.film}
          godzina={wybrany.godzina}
          zajete={zajeteMiejsca(wybrany.film.id, wybrany.godzina, rezerwacje)}
          onZatwierdz={zatwierdz}
          onAnuluj={() => setWybrany(null)}
        />
      )}

      <ListaFilmow filtry={filtryFilmu} onWybierz={wybierzSeans} />
    </>
  );
}
