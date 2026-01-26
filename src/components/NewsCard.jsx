function NewsCard({ news }) {
  return (
    <div style={card}>
      <img src={news.image} alt="" style={image} />

      <div style={content}>
        <h1 style={title}>{news.title}</h1>

        <p style={desc}>{news.description}</p>

        <div style={footer}>
          {news.source || "Sigma News"}
        </div>
      </div>
    </div>
  );
}

const card = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: "#fff"
};

const image = {
  height: "52%",
  width: "100%",
  objectFit: "cover"
};

const content = {
  padding: "18px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1
};

const title = {
  fontSize: "22px",
  fontWeight: "700",
  lineHeight: "1.3",
  marginBottom: "12px",
  color: "#0f172a"
};

const desc = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#334155",
  flexGrow: 1
};

const footer = {
  fontSize: "12px",
  color: "#64748b",
  marginTop: "14px"
};

export default NewsCard;
