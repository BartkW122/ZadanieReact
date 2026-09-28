import Movies from "./movies.js";

export default function InputDoFiltrowania() {
  const wybraneTytul = document.createElement("ul");
  function filtrowanie(e) {
    console.log(e.target);
    Movies.forEach((item) => {
      for (let c in item.title) {
        if (e.target.value[c] == item.title[c]) {
          console.log(item.title);
          let li = document.createElement("li");
          wybraneTytul.append((li.innerHTML = item.title));
          break;
        }
      }
    });
    e.target.appendChild(wybraneTytul);
  }
  return (
    <>
      <input
        onChange={filtrowanie}
        type="text"
        placeholder="Podaj tytuł filmu ktory chcesz obejrzec.."
      />
    </>
  );
}
