import Movies from "./movies.js";

export default function formularzDoFiltrowania({ typ }) {
  function filtrowanie() {
    console.log(Movies);
    console.log(typ);

    Movies.forEach((item) => {
      console.log(item.title);
      for (let c in item.title) {
        console.log(item.title[c]);
      }
    });
  }
  return (
    <>
      <input onChange={filtrowanie} type="text" placeholder="szukaj..." />
    </>
  );
}
