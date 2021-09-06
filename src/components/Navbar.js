import styles from "../styles/Navbar.module.css";

function Navbar({ title }) {
  return (
    <div className={styles.navbar}>
      <div>
        <h1 className={styles.navLogo}>{title}</h1>
      </div>
      <div className="icons">
        <a href={"https://github.com/rishikesh2003"}>
          <img
            src="https://img.icons8.com/nolan/48/github.png"
            alt="github-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
