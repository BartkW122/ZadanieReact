import { opisMiejsca } from "./SalaKinowa";

export default function Podsumowanie({ rezerwacja, onZamknij }) {
  return (
    <section className="podsumowanie">
      <h2>Rezerwacja zatwierdzona</h2>
      <p>
        <strong>Film:</strong> {rezerwacja.tytul}, godz. {rezerwacja.godzina}
      </p>
      <p>
        <strong>Osoba:</strong> {rezerwacja.imie} {rezerwacja.nazwisko} (
        {rezerwacja.email})
      </p>
      <p>
        <strong>Miejsca ({rezerwacja.miejsca.length}):</strong>{" "}
        {rezerwacja.miejsca.map((m) => opisMiejsca(m)).join("; ")}
      </p>
      <p>
        <strong>Bilet:</strong> {rezerwacja.bilet}
      </p>
      <p>
        <strong>Do zapłaty:</strong> {rezerwacja.cena} zł
      </p>
      <button onClick={onZamknij}>OK</button>
    </section>
  );
}
