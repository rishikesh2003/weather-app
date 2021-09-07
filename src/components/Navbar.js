import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar({ title }) {
  return (
    <div className={styles.navbar}>
      <div>
        <h1 className={styles.navLogo}>{title}</h1>
      </div>
      <div className="icons">
        <Link to="/">
          <img
            className={styles.icon}
            src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/48/000000/external-home-miscellaneous-kiranshastry-gradient-kiranshastry.png"
            alt="Home"
          />
        </Link>
        <a href={"https://github.com/rishikesh2003/weather-app"}>
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
