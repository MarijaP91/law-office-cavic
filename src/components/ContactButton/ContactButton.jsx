import { HashLink } from "react-router-hash-link";

export default function ContactButton() {
  return (
    <HashLink smooth to="/contact#form">
      <button className="contact-btn">KONTAKTIRAJTE NAS</button>
    </HashLink>
  );
}
