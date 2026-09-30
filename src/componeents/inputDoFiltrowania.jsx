import { useRef } from "react";
import Movies from "./movies.js";

export default function InputDoFiltrowania({ flitrowanie }) {
  const wybraneTytul = useRef(document.createElement("ul"));

  function wartosciInputa(e) {
    const label = document.querySelector("#filtrTytulow");

    wybraneTytul.current.innerHTML = "";
    label.children[0].value = e.target.innerText;

    flitrowanie({
      target: {
        id: "title",
        value: e.target.innerText,
      },
    });
  }

  function filtrowanie(e) {
    const label = document.querySelector("#filtrTytulow");

    wybraneTytul.current.innerHTML = "";

    const szukanyTytul = e.target.value.toLowerCase();

    Movies.forEach((item) => {
      if (item.title.toLowerCase().includes(szukanyTytul)) {
        const li = document.createElement("li");
        const span = document.createElement("span");

        span.innerText = item.title;
        li.appendChild(span);
        li.addEventListener("click", wartosciInputa);

        wybraneTytul.current.appendChild(li);
      }
    });

    if (!label.contains(wybraneTytul.current)) {
      label.appendChild(wybraneTytul.current);
    }
  }

  return (
    <>
      <input
        id="title"
        onChange={filtrowanie}
        type="text"
        placeholder="Podaj tytuł filmu który chcesz obejrzeć..."
      />
    </>
  );
}
