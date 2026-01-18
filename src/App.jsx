import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import newsData from "./data/newsData";

function App() {
  const [category, setCategory] = useState("All");

  const filteredNews =
    category === "All"
      ? newsData
      : newsData.filter(
          (n) => n.category?.toLowerCase() === category.toLowerCase()
        );

  return (
    <>
      <Navbar setCategory={setCategory} />

      <div style={styles.container}>
        {filteredNews.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "0 15px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
  },
};

export default App;
