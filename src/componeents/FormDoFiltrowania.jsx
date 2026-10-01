import { useState } from "react";
import InputDoFiltrowania from "./InputDoFiltrowania";
export default function FormDoFiltrowania() {
  const [filtryFilmu, setfiltryFilmu] = useState({
    gener: "",
    title: "",
    odKiedy: "",
    doKiedy: "",
  });

  function flitrowanie(e) {
    const noweFiltry = { ...filtryFilmu };
    noweFiltry.gener = "Dramat";
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
    }

    setfiltryFilmu(noweFiltry);
    console.log(noweFiltry);
  }

  function czyszczenieFiltrow(e) {
    e.preventDefault();
    let inputs = document.querySelectorAll("input");
    let ul = document.querySelector("ul");
    if (ul) {
      ul.remove();
    }

    inputs.forEach((input) => {
      input.value = "";
    });

    setfiltryFilmu({
      gener: "",
      title: "",
      odKiedy: "",
      doKiedy: "",
    });
    console.log(filtryFilmu);
  }
  return (
    <form onChange={flitrowanie}>
      <select id="genre">
        <option>Dramat</option>
        <option>Komedia</option>
        <option>Sci-Fi</option>
        <option>Thriller</option>
        <option>Gangsterski</option>
        <option>Psychologiczny</option>
      </select>

      <label id="filtrTytulow">
        <InputDoFiltrowania flitrowanie={flitrowanie} />
      </label>

      <label>
        od
        <input type="time" id="odKiedy" />
      </label>

      <label>
        do
        <input type="time" id="doKiedy" />
      </label>
      <button type="reset" onClick={czyszczenieFiltrow}>
        czysc
      </button>
    </form>
  );
}
