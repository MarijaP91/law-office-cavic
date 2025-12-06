import { useState } from "react";
import Title from "../Title/Title";

export default function Slider() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState("right");

  function handleNextBtn() {
    if (step < messages.length - 1) {
      setDirection("right");
      setStep((step) => step + 1);
    }
  }

  function handlePreviousBtn() {
    if (step > 0) {
      setDirection("left");
      setStep((prev) => prev - 1);
    }
  }

  function handleStepThrueDot(value) {
    setDirection(value > step ? "right" : "left");
    setStep(value);
  }
  const messages = [
    "Čavić Advokatska Kancelarija je ugledna pravna firma sa sedištem u Srbiji, koja pruža usluge u oblastima privrednog, građanskog, radnog i krivičnog prava. Dugogodišnje iskustvo, profesionalni pristup, najviši etički standardi i nepokolebljiva posvećenost klijentima učinili su kancelariju Čavić prepoznatljivim imenom u pravnoj zajednici. Naš cilj je da obezbedimo pravnu sigurnost, stratešku podršku i efikasna rešenja za sve pravne izazove sa kojima se naši klijenti suočavaju.",
    "Osnivač kancelarije, advokat Boban Čavić, poznat je po svom stručnom radu, preciznoj pravnoj analizi i uspešnom zastupanju klijenata pred domaćim i međunarodnim institucijama.",
    "Naša kancelarija ima sedište u srcu Novog Beograda — gradu koji spaja pravnu tradiciju, dinamičan razvoj i poslovnu otvorenost. U radu se oslanjamo na saradnju sa renomiranim pravnim stručnjacima, što nam omogućava da pružimo sveobuhvatnu i pouzdanu pravnu podršku klijentima širom Srbije. Verujemo da poverenje nije samo početak, već temelj svakog uspešnog odnosa. Zbog toga neprestano unapređujemo kvalitet naših usluga, način komunikacije i brzinu reagovanja. Naši pravni saveti su jasni, precizni i usmereni ka konkretnim rešenjima. Razumevanje klijenta i njegovog poslovnog konteksta za nas je prioritet.",
    "Trudimo se da prepoznamo izazove pre nego što postanu problemi, da ukažemo na rizike i ponudimo pravno sigurne, strateški promišljene odgovore. Naš pristup je proaktivan, a cilj — dugoročna saradnja zasnovana na poverenju, diskreciji i profesionalnosti. Među našim klijentima su domaće i međunarodne kompanije iz oblasti finansija, osiguranja, energetike, IT sektora, transporta, nekretnina i javnih službi. Svakom klijentu pristupamo sa istom pažnjom, bez obzira na veličinu ili kompleksnost pravnog pitanja.",
  ];

  const images = ["/adv-cavic.png", "/kanc2.png", "/advokati1.png", "law.png"];
  return (
    <div className="main-container">
      <Title>O nama</Title>
      <div className="main-container-second">
        <div className="textSlider-container">
          <div className="left-arrow">
            <span onClick={handlePreviousBtn}>
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="slider-body">
            <div key={step} className="slider-body-text">
              <p className={`slide-${direction}`}>{messages[step]}</p>
            </div>
            <div className="dots">
              {messages.map((_, i) => (
                <div
                  className={`dot ${step === i ? "active-dot" : ""}`}
                  key={i}
                  onClick={() => handleStepThrueDot(i)}
                ></div>
              ))}
            </div>
          </div>
          <div className="right-arrow">
            <span onClick={handleNextBtn}>
              {" "}
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div className={`imageSlider-container `}>
          <img key={step} src={images[step]} alt="Background" />
        </div>
      </div>
    </div>
  );
}
