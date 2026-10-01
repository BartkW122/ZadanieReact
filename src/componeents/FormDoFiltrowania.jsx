import InputDoFiltrowania from "./InputDoFiltrowania";

export default function FormDoFiltrowania({
  filtryFilmu,
  setFiltryFilmu,
  setPokazListe,
}) {
  function flitrowanie(e) {
    const noweFiltry = {
      ...filtryFilmu,
    };

    switch (e.target.id) {
      case "genre":
        noweFiltry.gener = e.target.value;
        break;

      case "title":
        noweFiltry.title = e.target.value;
        break;

      case "odKiedy":
        noweFiltry.odKiedy = e.target.value;
        break;

      case "doKiedy":
        noweFiltry.doKiedy = e.target.value;
        break;

      default:
        break;
    }

    setFiltryFilmu(noweFiltry);

    setPokazListe(true);
  }

  function czyszczenieFiltrow(e) {
    e.preventDefault();
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
    setFiltryFilmu({
      gener: "",
      title: "",
      odKiedy: "",
      doKiedy: "",
    });

    setPokazListe(false);
  }

  return (
    <form onChange={flitrowanie}>
      <select id="genre" value={filtryFilmu.gener}>
        <option value="">Wybierz gatunek</option>
        <option value="Dramat">Dramat</option>
        <option value="Komedia">Komedia</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Thriller">Thriller</option>
        <option value="Gangsterski">Gangsterski</option>
        <option value="Psychologiczny">Psychologiczny</option>
      </select>

      <label>
        <InputDoFiltrowania flitrowanie={flitrowanie} />
      </label>

      <label>
        od
        <input
          type="time"
          id="odKiedy"
          value={filtryFilmu.odKiedy}
          onChange={flitrowanie}
        />
      </label>

      <label>
        do
        <input
          type="time"
          id="doKiedy"
          value={filtryFilmu.doKiedy}
          onChange={flitrowanie}
        />
      </label>

      <button type="button" onClick={czyszczenieFiltrow}>
        czyść
      </button>
    </form>
  );
}
