const rzedy = [1, 2, 3, 4, 5, 6];
const miejsca = [1, 2, 3, 4, 5, 6, 7, 8];

export function opisMiejsca(id) {
  const [rzad, miejsce] = id.split("-");
  return `rząd ${rzad}, miejsce ${miejsce}`;
}

export function zajeteMiejsca(filmId, godzina, rezerwacje) {
  let seed = filmId * 1000 + parseInt(godzina.replace(":", ""), 10);
  const zajete = [];

  rzedy.forEach((rzad) => {
    miejsca.forEach((miejsce) => {
      seed = (seed * 9301 + 49297) % 233280;
      if (seed / 233280 < 0.2) {
        zajete.push(`${rzad}-${miejsce}`);
      }
    });
  });

  rezerwacje
    .filter(
      (r) =>
        r.status === "aktywna" && r.filmId === filmId && r.godzina === godzina,
    )
    .forEach((r) => zajete.push(...r.miejsca));

  return zajete;
}

export default function SalaKinowa({ zajete, wybrane, onToggle }) {
  return (
    <div className="sala">
      <div className="ekran">EKRAN</div>

      {rzedy.map((rzad) => (
        <div className="rzad" key={rzad}>
          <span className="numer-rzedu">{rzad}</span>

          {miejsca.map((miejsce) => {
            const id = `${rzad}-${miejsce}`;
            let status = "wolne";
            if (zajete.includes(id)) status = "zajete";
            else if (wybrane.includes(id)) status = "wybrane";

            return (
              <button
                key={id}
                type="button"
                className={`miejsce ${status}`}
                disabled={status === "zajete"}
                onClick={() => onToggle(id)}
                title={opisMiejsca(id)}
                aria-label={`${opisMiejsca(id)} (${status})`}
              />
            );
          })}
        </div>
      ))}

      <div className="legenda">
        <span>
          <i className="miejsce wolne" /> wolne
        </span>
        <span>
          <i className="miejsce zajete" /> zajęte
        </span>
        <span>
          <i className="miejsce wybrane" /> wybrane
        </span>
      </div>
    </div>
  );
}
