import ContactDetails from "../ContactDetails/ContactDetails";
import Form from "../Form/Form";
import Map from "../Map/Map";

export default function ContactBody() {
  return (
    <div className="contact-contaioner">
      <div className="contact-body">
        <ContactDetails />
        <Map />
        <div className="cover"></div>;
      </div>
      <Form />
    </div>
  );
}
