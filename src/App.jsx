import { useState } from "react";
import FormDoFiltrowania from "./componeents/FormDoFiltrowania";
import ListaFilmow from "./componeents/ListaFilom";

function App() {
  const [filtryFilmu, setFiltryFilmu] = useState({
    gener: "",
    title: "",
    odKiedy: "",
    doKiedy: "",
  });

  const [pokazListe, setPokazListe] = useState(true);

  return (
    <>
      <FormDoFiltrowania
        filtryFilmu={filtryFilmu}
        setFiltryFilmu={setFiltryFilmu}
        setPokazListe={setPokazListe}
      />

      {pokazListe && <ListaFilmow filtry={filtryFilmu} />}
    </>
  );
}

export default App;
