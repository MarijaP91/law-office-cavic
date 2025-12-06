import Navigation from "../components/Navigation/Navigation";
import BurgerMenuListOfOptions from "../components/BurgerMenuListOfOptions/BurgerMenuListOfOptions";
import Footer from "../components/Footer/Footer";

import PracticeContainer from "../components/PracticeContainer/PracticeContainer";
import PracticeImage from "../components/PracticeImage/PracticeImage";

export default function Practice({ state, onBurgerMenu, dispatch }) {
  return (
    <div className="about">
      {state.isMenuOpen ? (
        <BurgerMenuListOfOptions dispatch={dispatch} state={state} />
      ) : (
        <>
          <Navigation
            onBurgerMenu={onBurgerMenu}
            state={state}
            dispatch={dispatch}
          />
          <SectionPractice />
          <Footer />
        </>
      )}
    </div>
  );
}

function SectionPractice() {
  return (
    <div className="about-body">
      <PracticeImage />
      <PracticeContainer />
    </div>
  );
}
