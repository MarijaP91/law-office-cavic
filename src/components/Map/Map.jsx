import "./Map.css";
export default function Map() {
  return (
    <div className="google-maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.2062309301386!2d20.400571976676765!3d44.81736307636307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65b4951e381d%3A0xaa67af0b5bbac77!2sOmladinskih%20Brigada%2080!5e0!3m2!1ssr!2srs!4v1763887559889!5m2!1ssr!2srs"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
