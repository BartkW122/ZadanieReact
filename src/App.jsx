import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./componeents/Navbar";
import Repertuar from "./componeents/Repertuar";
import HistoriaRezerwacji from "./componeents/HistoriaRezerwacji";
import OKinie from "./componeents/OKinie";
import Kontakt from "./componeents/Kontakt";

function App() {
  const [filtryFilmu, setFiltryFilmu] = useState({
    gener: "",
    title: "",
    odKiedy: "",
    doKiedy: "",
    sort: "",
  });

  const [rezerwacje, setRezerwacje] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("rezerwacje")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("rezerwacje", JSON.stringify(rezerwacje));
  }, [rezerwacje]);

  function dodajRezerwacje(rezerwacja) {
    setRezerwacje((poprzednie) => [...poprzednie, rezerwacja]);
  }

  function anulujRezerwacje(id) {
    setRezerwacje((poprzednie) =>
      poprzednie.map((r) => (r.id === id ? { ...r, status: "anulowana" } : r)),
    );
  }

  return (
    <>
      <Navbar
        liczbaAktywnych={
          rezerwacje.filter((r) => r.status === "aktywna").length
        }
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Repertuar
                filtryFilmu={filtryFilmu}
                setFiltryFilmu={setFiltryFilmu}
                rezerwacje={rezerwacje}
                dodajRezerwacje={dodajRezerwacje}
              />
            }
          />
          <Route
            path="/rezerwacje"
            element={
              <HistoriaRezerwacji
                rezerwacje={rezerwacje}
                anulujRezerwacje={anulujRezerwacje}
              />
            }
          />
          <Route path="/o-kinie" element={<OKinie />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
