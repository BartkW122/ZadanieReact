import Movies from "./movies.js";

export default function formularzDoFiltrowania({ typ }) {
  function filtrowanie() {
    console.log(Movies);
    console.log(typ);

    Movies.forEach((item) => {
      console.log(item.title);
    });
  }
  return (
    <>
      <input onChange={filtrowanie} type="text" placeholder="szukaj..." />
    </>
  );
}
