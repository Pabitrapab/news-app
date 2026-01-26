import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import newsData from "./data/newsData";

/* 🔹 Translation cache */
const translationCache = {};

function App() {
  const [category, setCategory] = useState("All");
  const [language, setLanguage] = useState("en");
  const [displayNews, setDisplayNews] = useState([]);

  /* 🔹 Filter by category */
  const filteredNews =
    category === "All"
      ? newsData
      : newsData.filter(
          (n) =>
            n.category?.toLowerCase() === category.toLowerCase()
        );

  /* 🔹 Lock body scroll (mobile feel) */
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
  }, []);

  /* 🔹 Translate EN → MR */
  const translateToMarathi = async (text) => {
    if (!text) return text;
    if (translationCache[text]) return translationCache[text];

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

  /* 🔹 Language based news */
  useEffect(() => {
    const loadNews = async () => {
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

    loadNews();
  }, [language, filteredNews]);

  return (
    <>
      <Navbar
        setCategory={setCategory}
        language={language}
        setLanguage={setLanguage}
      />

      {/* 🔥 Swipe Feed */}
      <div
        style={{
          height: "100vh",
          marginTop: "60px",
          overflowY: "scroll",
          scrollSnapType: "y mandatory"
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

