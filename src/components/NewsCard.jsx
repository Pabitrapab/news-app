function NewsCard({ news, language }) {
  const translate = (text) => {
    if (language === "en") return text;

    return text
      .replace("Mumbai", "मुंबई")
      .replace("traffic", "वाहतूक")
      .replace("Heavy", "जड")
      .replace("Stock market rises", "शेअर बाजारात वाढ");
  };

  return (
    <div
      className="news-card"
      style={{ backgroundImage: url(${news.image}) }}
    >
      <div className="overlay">
        <h1>{translate(news.title)}</h1>
        <p>{translate(news.description)}</p>
      </div>
    </div>
  );
}

export default NewsCard;
