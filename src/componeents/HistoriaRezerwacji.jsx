import { opisMiejsca } from "./SalaKinowa";

export default function HistoriaRezerwacji({ rezerwacje, anulujRezerwacje }) {
  function anuluj(id) {
    if (window.confirm("Na pewno anulować tę rezerwację?")) {
      anulujRezerwacje(id);
    }
  }

  return (
    <section>
      <h2>Historia rezerwacji</h2>

      {rezerwacje.length === 0 && (
        <p className="komunikat">Nie masz jeszcze żadnych rezerwacji.</p>
      )}

      <div className="historia">
        {[...rezerwacje].reverse().map((r) => (
          <div key={r.id} className={`wpis ${r.status}`}>
            <h3>
              {r.tytul} - {r.godzina}
            </h3>
            <p>
              {r.imie} {r.nazwisko} ({r.email})
            </p>
            <p>Miejsca: {r.miejsca.map((m) => opisMiejsca(m)).join("; ")}</p>
            <p>
              Bilet: {r.bilet}, cena: {r.cena} zł
            </p>
            <p>Zarezerwowano: {r.data}</p>
            <p>
              Status: <strong>{r.status}</strong>
            </p>
            {r.status === "aktywna" && (
              <button className="btn-drugi" onClick={() => anuluj(r.id)}>
                Anuluj rezerwację
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
