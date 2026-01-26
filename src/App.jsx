import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import newsData from "./data/newsData";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <div className="feed">
        {newsData.map((news, idx) => (
          <div className="snap" key={idx}>
            <NewsCard news={news} language={language} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
