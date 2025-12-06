import ContactButton from "../ContactButton/ContactButton";
import Hero from "../Hero/Hero";
import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Slider />
      <Team />
      <ContactButton />
    </div>
  );
}

function Team() {
  const founder = [
    {
      fullName: "Boban Čavić",
      position: "Osnivac",
      photoUrl: "./osnivac.png",
    },
  ];
  const restOfTheTeam = [
    {
      fullName: "Milica Milinkovic",
      position: "Advokat",
      photoUrl: "./imgPlaceholder.png",
    },
    {
      fullName: "Nenad Vukovic",
      position: "Advokat",
      photoUrl: "./imgPlaceholder.png",
    },
    {
      fullName: "Bojan Ignjatovic",
      position: "Advokat",
      photoUrl: "./imgPlaceholder.png",
    },
  ];
  return (
    <div className="team-container">
      <Title>Our Team</Title>
      <TeamBlock obj={founder} />
      <TeamBlock obj={restOfTheTeam} />
    </div>
  );
}

function TeamBlock({ obj }) {
  return (
    <div className="team-block">
      {obj.map((person) => (
        <Player person={person} />
      ))}
    </div>
  );
}

function Player({ person }) {
  return (
    <div className="player">
      <img src={person.photoUrl} alt={person.fullName} />
      <div className="player-info">
        <h3>{person.fullName}</h3>
        <p>{person.position}</p>
      </div>
    </div>
  );
}
