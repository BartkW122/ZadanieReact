import FormDoZalogowania from "./componeents/FormDoZalogowania";
import FormDoFiltrowania from "./componeents/FormDoFiltrowania";
import ListaFilmow from "./componeents/ListaFilom";
function App() {
  return (
    <>
      <ListaFilmow
        filtry={{
          gener: "wefe",
          title: "",
          odKiedy: "",
          doKiedy: "",
        }}
      />
    </>
  );
}

export default App;
