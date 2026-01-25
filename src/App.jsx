import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import newsData from "./data/newsData";

function App() {
  const [category, setCategory] = useState("All");

  const filteredNews =
    category === "All"
      ? newsData
      : newsData.filter(
          (n) =>
            n.category?.toLowerCase() === category.toLowerCase()
        );

  // 🔒 body scroll band (mobile fix)
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Navbar setCategory={setCategory} />

      {/* 🔥 INSHORTS STYLE SWIPE CONTAINER */}
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {filteredNews.map((news, index) => (
          <div
            key={index}
            style={{
              height: "100vh",
              scrollSnapAlign: "start"
            }}
          >
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
