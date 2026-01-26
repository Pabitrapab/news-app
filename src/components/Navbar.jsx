function Navbar({ setCategory, language, setLanguage }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "56px",
        background: "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 14px",
        zIndex: 1000
      }}
    >
      {/* App Name */}
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        SigmaNews
      </div>

      {/* Categories */}
      <div style={{ fontSize: "13px" }}>
        <span onClick={() => setCategory("All")} style={btn}>Home</span>
        <span onClick={() => setCategory("Current Affairs")} style={btn}>
          Current
        </span>
        <span onClick={() => setCategory("National")} style={btn}>
          National
        </span>
      </div>

      {/* Language */}
      <div style={{ fontSize: "13px" }}>
        <span
          onClick={() => setLanguage("en")}
          style={{
            cursor: "pointer",
            fontWeight: language === "en" ? "bold" : "normal",
            opacity: language === "en" ? 1 : 0.5
          }}
        >
          EN
        </span>
        {" | "}
        <span
          onClick={() => setLanguage("mr")}
          style={{
            cursor: "pointer",
            fontWeight: language === "mr" ? "bold" : "normal",
            opacity: language === "mr" ? 1 : 0.5
          }}
        >
          मराठी
        </span>
      </div>
    </div>
  );
}

const btn = {
  margin: "0 6px",
  cursor: "pointer",
  opacity: 0.8
};

export default Navbar;
