import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <li>
        <NavLink to="/">Početna</NavLink>
      </li>

      <li>
        <NavLink to="/practice">Oblasti</NavLink>
      </li>
      <li>
        <NavLink to="/vesti">Vesti</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Kontakt</NavLink>
      </li>
    </nav>
  );
}
