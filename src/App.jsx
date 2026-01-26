import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import newsData from "./data/newsData";

/* 🔥 Translation cache (performance booster) */
const translationCache = {};

function App() {
  const [category, setCategory] = useState("All");
  const [language, setLanguage] = useState("en"); // en | mr
  const [displayNews, setDisplayNews] = useState([]);

  /* 🔹 Filter news by category */
  const filteredNews =
    category === "All"
      ? newsData
      : newsData.filter(
          (n) =>
            n.category?.toLowerCase() === category.toLowerCase()
        );

  /* 🔹 Body scroll lock (mobile Inshorts feel) */
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }, []);

  /* 🔹 Translate English → Marathi */
  const translateToMarathi = async (text) => {
    if (!text) return text;

    if (translationCache[text]) {
      return translationCache[text];
    }

    const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: "mr",
        format: "text"
      })
    });

    const data = await res.json();
    translationCache[text] = data.translatedText;
    return data.translatedText;
  };

  /* 🔹 Process news based on language */
  useEffect(() => {
    const processNews = async () => {
      if (language === "en") {
        setDisplayNews(filteredNews);
      } else {
        const translated = await Promise.all(
          filteredNews.map(async (n) => ({
            ...n,
            title: await translateToMarathi(n.title),
            description: await translateToMarathi(n.description)
          }))
        );
        setDisplayNews(translated);
      }
    };

    processNews();
  }, [language, filteredNews]);

  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar setCategory={setCategory} />

      {/* 🔹 Language Toggle */}
      <div
        style={{
          position: "fixed",
          top: "12px",
          right: "16px",
          zIndex: 1000,
          color: "#fff",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        <span
          style={{
            cursor: "pointer",
            opacity: language === "en" ? 1 : 0.5
          }}
          onClick={() => setLanguage("en")}
        >
          EN
        </span>
        {" | "}
        <span
          style={{
            cursor: "pointer",
            opacity: language === "mr" ? 1 : 0.5
          }}
          onClick={() => setLanguage("mr")}
        >
          मराठी
        </span>
      </div>

      {/* 🔥 INSHORTS STYLE SWIPE CONTAINER */}
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {displayNews.map((news, index) => (
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
