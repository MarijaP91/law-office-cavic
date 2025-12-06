import Navigation from "../components/Navigation/Navigation";
import BurgerMenuListOfOptions from "../components/BurgerMenuListOfOptions/BurgerMenuListOfOptions";

import Footer from "../components/Footer/Footer";
import ContactBody from "../components/ContactBody/ContactBody";

export default function Contact({ state, onBurgerMenu, dispatch }) {
  return (
    <div className="contact">
      {state.isMenuOpen ? (
        <BurgerMenuListOfOptions dispatch={dispatch} state={state} />
      ) : (
        <>
          <Navigation
            onBurgerMenu={onBurgerMenu}
            state={state}
            dispatch={dispatch}
          />
          <ContactBody />
          <Footer />
        </>
      )}
    </div>
  );
}
