import { useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import "./Navigation.css";
import Nav from "../Nav/Nav";

export default function Navigation({ onBurgerMenu, state, dispatch }) {
  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "SET_MOBILE_VIEW", payload: window.innerWidth < 1200 });
    };

    // Dodajemo event listener na resize
    window.addEventListener("resize", handleResize);

    // Čistimo event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div className="navigation">
      <Logo />
      {state.isMobile ? (
        <BurgerMenu onBurgerMenu={onBurgerMenu} isOpen={state.isMenuOpen} />
      ) : (
        <Nav />
      )}
    </div>
  );
}
