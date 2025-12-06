import "./PracticeHeader.css";
import { Link } from "react-router-dom";

export default function PracticeHeader({ children }) {
  return (
    <Link>
      <h2 className="subheading">{children}</h2>
    </Link>
  );
}
