import React from "react";
import NewsCard from "./components/NewsCard";
import newsData from "./data/newsData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        {newsData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "15px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "15px"
  }
};

export default App;
