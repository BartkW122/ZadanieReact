import { useState } from "react";
import Movies from "./movies.js";

export default function InputDoFiltrowania({ value, flitrowanie }) {
  const [otwarte, setOtwarte] = useState(false);

  const podpowiedzi = Movies.filter((film) =>
    film.title.toLowerCase().includes(value.toLowerCase()),
  );

  function wybierzTytul(tytul) {
    flitrowanie({ target: { id: "title", value: tytul } });
    setOtwarte(false);
  }

  return (
    <div className="pole-tytul">
      <input
        id="title"
        type="text"
        autoComplete="off"
        value={value}
        onChange={(e) => {
          flitrowanie(e);
          setOtwarte(true);
        }}
        onFocus={() => setOtwarte(true)}
        onBlur={() => setOtwarte(false)}
        placeholder="Podaj tytuł filmu który chcesz obejrzeć..."
      />

      {otwarte && value !== "" && podpowiedzi.length > 0 && (
        <ul className="podpowiedzi">
          {podpowiedzi.map((film) => (
            <li key={film.id} onMouseDown={() => wybierzTytul(film.title)}>
              {film.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
