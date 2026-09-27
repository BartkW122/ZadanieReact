import Movies from "./movies.js";

export default function formularzDoFiltrowania({ typ }) {
  function filtrowanie(e) {
    // console.log(Movies);
    // console.log(typ);
    // console.log(e.target.value);

    Movies.forEach((item) => {
      //console.log(item.title);
      for (let c in item.title) {
        //console.log(item.title[c]);
        if (e.target.value[c] == item.title[c]) {
          console.log(item.title);
        }
      }
    });
  }
  return (
    <>
      <input onChange={filtrowanie} type="text" placeholder="szukaj..." />
    </>
  );
}
