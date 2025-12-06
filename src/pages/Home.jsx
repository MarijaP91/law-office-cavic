import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import BurgerMenuListOfOptions from "../components/BurgerMenuListOfOptions/BurgerMenuListOfOptions";
import Main from "../components/Main/Main";

function Home({ state, onBurgerMenu, dispatch }) {
  return (
    <div className="home">
      {state.isMenuOpen ? (
        <BurgerMenuListOfOptions state={state} dispatch={dispatch} />
      ) : (
        <>
          <Navigation
            onBurgerMenu={onBurgerMenu}
            state={state}
            dispatch={dispatch}
          />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
