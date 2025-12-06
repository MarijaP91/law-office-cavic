import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <ul>
        <li>
          <Link>Privacy Policy</Link>
        </li>
        <li>
          <Link>Legal Notice</Link>
        </li>
        <li>
          <Link>Terms of Business</Link>
        </li>
      </ul>
      <hr></hr>

      <p>&copy; 2026 Cavic Law Office</p>
    </footer>
  );
}
