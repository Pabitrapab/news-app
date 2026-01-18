export default function Navbar({ setCategory }) {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Newz</div>

      <div style={styles.menu}>
        <button style={styles.btn} onClick={() => setCategory("All")}>
          Home
        </button>
        <button style={styles.btn} onClick={() => setCategory("Current")}>
          Current Affairs
        </button>
        <button style={styles.btn} onClick={() => setCategory("National")}>
          National
        </button>
        <button style={styles.btn} onClick={() => setCategory("Business")}>
          Business
        </button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    backgroundColor: "#111",
    color: "#fff",
    flexWrap: "wrap",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  btn: {
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "6px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
