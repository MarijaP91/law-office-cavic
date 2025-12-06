import "./NewsCard.css";

export default function NewsCard({ news }) {
  function truncateString(text, limit) {
    const arr = text.split(" ");
    const newArr = [];

    for (let i = 0; i <= limit; i++) {
      newArr.push(arr[i]);
    }
    newArr.push("...");
    return newArr.join(" ");
  }
  return (
    <div className="card">
      <img src={news.image} alt={news.title} />
      <div>
        <h3>{news.title}</h3>
        <p>{truncateString(news.text, 20)}</p>
        <p>Objavio: {news.author}</p>
        <p>
          <a href={news.url}>Vise o tome...</a>
        </p>
      </div>
    </div>
  );
}
