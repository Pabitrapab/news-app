import React from "react";
import NewsCard from "./components/NewsCard";
import newsData from "./data/newsData";

function App() {
  return (
    <div style={{ maxWidth: "420px", margin: "auto" }}>
      {newsData.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </div>
  );
}

export default App;