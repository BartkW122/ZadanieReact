import InputDoFiltrowania from "./InputDoFiltrowania";

export default function FormDoFiltrowania({ filtryFilmu, setFiltryFilmu }) {
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

      case "sort":
        noweFiltry.sort = e.target.value;
        break;

      default:
        break;
    }

    setFiltryFilmu(noweFiltry);
  }

  function czyszczenieFiltrow(e) {
    e.preventDefault();
    setFiltryFilmu({
      gener: "",
      title: "",
      odKiedy: "",
      doKiedy: "",
      sort: "",
    });
  }

  return (
    <form className="filtry" onSubmit={(e) => e.preventDefault()}>
      <select id="genre" value={filtryFilmu.gener} onChange={flitrowanie}>
        <option value="">Wybierz gatunek</option>
        <option value="Dramat">Dramat</option>
        <option value="Komedia">Komedia</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Thriller">Thriller</option>
        <option value="Gangsterski">Gangsterski</option>
        <option value="Psychologiczny">Psychologiczny</option>
      </select>

      <InputDoFiltrowania value={filtryFilmu.title} flitrowanie={flitrowanie} />

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

      <select id="sort" value={filtryFilmu.sort} onChange={flitrowanie}>
        <option value="">Sortuj</option>
        <option value="tytul">Tytuł (A-Z)</option>
        <option value="czas-rosnaco">Czas trwania (rosnąco)</option>
        <option value="czas-malejaco">Czas trwania (malejąco)</option>
      </select>

      <button type="button" className="btn-drugi" onClick={czyszczenieFiltrow}>
        czyść
      </button>
    </form>
  );
}
