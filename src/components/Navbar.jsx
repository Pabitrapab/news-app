export default function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Newz</div>

      <div style={styles.menu}>
        <span>Home</span>
        <span>Current Affairs</span>
        <span>National</span>
        <span>About</span>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#111",
    color: "#fff"
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  menu: {
    display: "flex",
    gap: "15px",
    fontSize: "14px",
    cursor: "pointer"
  }
};
