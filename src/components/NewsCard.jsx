function NewsCard({ news }) {
  return (
    <div
      style={{
        height: "100%",
        background: "#fff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Image */}
      <div style={{ height: "55%" }}>
        <img
          src={news.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "16px" }}>
        <h2 style={{ margin: "0 0 10px" }}>{news.title}</h2>
        <p style={{ color: "#444", lineHeight: "1.5" }}>
          {news.description}
        </p>
        <div style={{ marginTop: "10px", fontSize: "12px", color: "#777" }}>
          {news.source || "Sigma News"}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
