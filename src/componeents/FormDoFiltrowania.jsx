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
    switch (e.target.id) {
      case "genre":
        filtryFilmu.gener = e.target.value;
        break;
      case "":
        filtryFilmu.title = e.target.value;
        break;
      case "odKiedy":
        filtryFilmu.odKiedy = e.target.value;
        break;
      case "doKiedy":
        filtryFilmu.doKiedy = e.target.value;
        break;
    }

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

      <InputDoFiltrowania id="inputFiltr" />

      <label>
        od
        <input type="time" id="odKiedy" />
      </label>

      <label>
        do
        <input type="time" id="doKiedy" />
      </label>
      <button type="reset">czysc</button>
    </form>
  );
}
