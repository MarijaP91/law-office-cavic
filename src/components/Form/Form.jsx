import "./Form.css";

export default function Form() {
  return (
    <div className="form-container">
      <form className="form">
        <div>
          <input type="text" placeholder="Ime"></input>
          <input type="text" placeholder="Prezime"></input>
          <input type="text" placeholder="Telefon"></input>
        </div>
        <textarea placeholder="Poruka"></textarea>
        <button>Pošaljite poruku </button>
      </form>
    </div>
  );
}
