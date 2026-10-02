import { NavLink } from "react-router-dom";

export default function Navbar({ liczbaAktywnych }) {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/" end>
          Repertuar
        </NavLink>
        <NavLink to="/rezerwacje">Moje rezerwacje ({liczbaAktywnych})</NavLink>
        <NavLink to="/o-kinie">O kinie</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </nav>
    </header>
  );
}
