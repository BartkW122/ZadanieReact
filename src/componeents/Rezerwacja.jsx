import { useState, useEffect, useRef } from "react";
import SalaKinowa, { opisMiejsca } from "./SalaKinowa";

const CENY = { normalny: 25, ulgowy: 18 };
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Rezerwacja({
  film,
  godzina,
  zajete,
  onZatwierdz,
  onAnuluj,
}) {
  const [wybrane, setWybrane] = useState([]);
  const [bilet, setBilet] = useState("normalny");
  const [dane, setDane] = useState({ imie: "", nazwisko: "", email: "" });
  const [probaWyslania, setProbaWyslania] = useState(false);
  const panel = useRef(null);

  useEffect(() => {
    panel.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const cena = wybrane.length * CENY[bilet];

  function waliduj() {
    const bledy = {};
    if (dane.imie.trim() === "") bledy.imie = "Imię jest wymagane.";
    if (dane.nazwisko.trim() === "") bledy.nazwisko = "Nazwisko jest wymagane.";
    if (dane.email.trim() === "") {
      bledy.email = "Adres e-mail jest wymagany.";
    } else if (!REGEX_EMAIL.test(dane.email.trim())) {
      bledy.email = "Nieprawidłowy format adresu e-mail.";
    }
    if (wybrane.length === 0)
      bledy.miejsca = "Wybierz co najmniej jedno miejsce.";
    return bledy;
  }

  const bledy = probaWyslania ? waliduj() : {};

  function przelaczMiejsce(id) {
    if (zajete.includes(id)) return;

    if (wybrane.includes(id)) {
      setWybrane(wybrane.filter((m) => m !== id));
    } else {
      const nowe = [...wybrane, id].sort((a, b) => {
        const [ra, ma] = a.split("-").map(Number);
        const [rb, mb] = b.split("-").map(Number);
        return ra - rb || ma - mb;
      });
      setWybrane(nowe);
    }
  }

  function zmianaDanych(e) {
    setDane({ ...dane, [e.target.name]: e.target.value });
  }

  function wyslij(e) {
    e.preventDefault();
    setProbaWyslania(true);

    if (Object.keys(waliduj()).length > 0) return;

    onZatwierdz({
      id: Date.now(),
      filmId: film.id,
      tytul: film.title,
      godzina,
      miejsca: wybrane,
      bilet,
      cena,
      imie: dane.imie.trim(),
      nazwisko: dane.nazwisko.trim(),
      email: dane.email.trim(),
      data: new Date().toLocaleString("pl-PL"),
      status: "aktywna",
    });
  }

  return (
    <section className="rezerwacja" ref={panel}>
      <h2>
        Rezerwacja: {film.title}, seans {godzina}
      </h2>

      <SalaKinowa
        zajete={zajete}
        wybrane={wybrane}
        onToggle={przelaczMiejsce}
      />
      {bledy.miejsca && <p className="blad">{bledy.miejsca}</p>}

      <div className="stan-rezerwacji">
        <p>
          Wybrane miejsca: <strong>{wybrane.length}</strong>
        </p>
        {wybrane.length > 0 && (
          <p>{wybrane.map((m) => opisMiejsca(m)).join("; ")}</p>
        )}
        <p>
          Cena: <strong>{cena} zł</strong> ({wybrane.length} x {CENY[bilet]} zł)
        </p>
      </div>

      <form onSubmit={wyslij} noValidate>
        <label>
          Rodzaj biletu:
          <select value={bilet} onChange={(e) => setBilet(e.target.value)}>
            <option value="normalny">Normalny - 25 zł</option>
            <option value="ulgowy">Ulgowy - 18 zł</option>
          </select>
        </label>

        <label>
          Imię:
          <input
            name="imie"
            type="text"
            value={dane.imie}
            onChange={zmianaDanych}
            placeholder="podaj imię..."
          />
          {bledy.imie && <span className="blad">{bledy.imie}</span>}
        </label>

        <label>
          Nazwisko:
          <input
            name="nazwisko"
            type="text"
            value={dane.nazwisko}
            onChange={zmianaDanych}
            placeholder="podaj nazwisko..."
          />
          {bledy.nazwisko && <span className="blad">{bledy.nazwisko}</span>}
        </label>

        <label>
          E-mail:
          <input
            name="email"
            type="email"
            value={dane.email}
            onChange={zmianaDanych}
            placeholder="podaj e-mail..."
          />
          {bledy.email && <span className="blad">{bledy.email}</span>}
        </label>

        <div className="przyciski">
          <button type="submit">Zatwierdź rezerwację</button>
          <button type="button" className="btn-drugi" onClick={onAnuluj}>
            Zamknij
          </button>
        </div>
      </form>
    </section>
  );
}
