import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Contact from "./pages/Contact";
import News from "./pages/News";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case "SET_MOBILE_VIEW":
      return { ...state, isMobile: action.payload, isMenuOpen: false };

    case "CLOSE_BURGER_MENU":
      return { ...state, isMenuOpen: false };
    case "ADD-NEWS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

const initialState = {
  isMenuOpen: false,
  isMobile: window.innerWidth < 1200,
  data: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleBurgerMenu() {
    dispatch({ type: "TOGGLE_MENU" });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              state={state}
              onBurgerMenu={handleBurgerMenu}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route
          path="practice"
          element={
            <Practice
              state={state}
              onBurgerMenu={handleBurgerMenu}
              dispatch={dispatch}
            />
          }
        ></Route>

        <Route
          path="contact"
          element={
            <Contact
              state={state}
              onBurgerMenu={handleBurgerMenu}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route
          path="home"
          element={
            <Home
              state={state}
              onBurgerMenu={handleBurgerMenu}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route
          path="vesti"
          element={
            <News
              state={state}
              onBurgerMenu={handleBurgerMenu}
              dispatch={dispatch}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
