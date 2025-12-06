import "./PracticeList.css";
import { Link } from "react-router-dom";

export default function PracticeList() {
  return (
    <ul className="practice-list">
      <li>
        <Link>Bankarstvo i finansije</Link>
      </li>
      <li>
        <Link>Porezi</Link>
      </li>
      <li>
        <Link>Radno pravo</Link>
      </li>
      <li>
        <Link>Zastita prava konkurencije</Link>
      </li>
      <li>
        <Link>Nepokretnosti i infrastruktura</Link>
      </li>
      <li>
        <Link>Privredno pravo</Link>
      </li>
      <li>
        <Link>Zastita intelektualne svojine</Link>
      </li>
    </ul>
  );
}
