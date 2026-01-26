function Navbar({ language, setLanguage }) {
  return (
    <div className="navbar">
      <div className="logo">SigmaNews</div>

      <div className="lang">
        <span
          className={language === "en" ? "active" : ""}
          onClick={() => setLanguage("en")}
        >
          EN
        </span>
        |
        <span
          className={language === "mr" ? "active" : ""}
          onClick={() => setLanguage("mr")}
        >
          मराठी
        </span>
      </div>
    </div>
  );
}

export default Navbar;
