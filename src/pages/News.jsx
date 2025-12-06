import Navigation from "../components/Navigation/Navigation";
import BurgerMenuListOfOptions from "../components/BurgerMenuListOfOptions/BurgerMenuListOfOptions";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";
import NewsCard from "../components/NewsCard/NewsCard";

export default function News({ state, onBurgerMenu, dispatch }) {
  const [news, setNews] = useState(function () {
    const storage = localStorage.getItem("newsData");
    return storage ? JSON.parse(storage) : null;
  });
  console.log(news);

  const KEY = "73e6df9d0f6348a7a9250395bedc443c";

  useEffect(
    function () {
      async function getNews() {
        try {
          const response = await fetch(
            `https://api.worldnewsapi.com/search-news?source-countries=RS&text=law&api-key=${KEY}`
          );
          const data = await response.json();
          // console.log(data.news);
          setNews(data.news);
          // dispatch({ type: "ADD-NEWS", payload: data.news });
        } catch (err) {
          console.log(err);
        }
      }
      if (!news) {
        // 👈 fetch se poziva samo ako nema keša
        getNews();
      }
    },
    [news]
  );

  useEffect(() => {
    if (news) {
      localStorage.setItem("newsData", JSON.stringify(news)); // čuvamo samo kad ima stvarnih podataka
    }
  }, [news]);

  return (
    <div className="news">
      {state.isMenuOpen ? (
        <BurgerMenuListOfOptions dispatch={dispatch} state={state} />
      ) : (
        <>
          <Navigation
            onBurgerMenu={onBurgerMenu}
            state={state}
            dispatch={dispatch}
          />
          <NewsContainer news={news} />
          <Footer />
        </>
      )}
    </div>
  );
}

function NewsContainer({ news }) {
  return (
    <div className="news-container">
      <ImageBlock />
      <Title>Vesti</Title>
      {news.map((news, i) => (
        <NewsCard news={news} key={news.url || news.title || i} />
      ))}
    </div>
  );
}

function ImageBlock() {
  return (
    <div className="news-background">
      <div className="news-image"></div>
    </div>
  );
}
