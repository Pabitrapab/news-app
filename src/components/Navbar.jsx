function Navbar({ setCategory, language, setLanguage }) {
  return (
    <div style={nav}>
      <div style={logo}>SigmaNews</div>

      <div style={menu}>
        <span onClick={() => setCategory("All")}>Home</span>
        <span onClick={() => setCategory("Current Affairs")}>Current</span>
        <span onClick={() => setCategory("National")}>National</span>
      </div>

      <div style={lang}>
        <span
          style={language === "en" ? activeLang : inactiveLang}
          onClick={() => setLanguage("en")}
        >
          EN
        </span>
        <span style={{ margin: "0 6px", opacity: 0.6 }}>|</span>
        <span
          style={language === "mr" ? activeLang : inactiveLang}
          onClick={() => setLanguage("mr")}
        >
          मराठी
        </span>
      </div>
    </div>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  height: "60px",
  background: "#0f172a",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 14px",
  zIndex: 1000
};

const logo = {
  fontSize: "18px",
  fontWeight: "700",
  letterSpacing: "0.5px"
};

const menu = {
  display: "flex",
  gap: "14px",
  fontSize: "13px",
  opacity: 0.85
};

const lang = {
  display: "flex",
  alignItems: "center",
  fontSize: "13px"
};

const activeLang = {
  fontWeight: "700",
  cursor: "pointer"
};

const inactiveLang = {
  cursor: "pointer",
  opacity: 0.6
};

export default Navbar;
