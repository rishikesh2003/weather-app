import styles from "../styles/Search.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Search() {
  const [city, setCity] = useState("");
  const history = useHistory();
  function handleSearch() {
    history.push(`/weather/${city}`);
  }
  return (
    <div className={styles.container}>
      <h2
        style={{ padding: "20px 0", color: "white" }}
        className={"main-header"}
      >
        Search below to get the weather data.
      </h2>
      <div className={styles.holder}>
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          className={styles.textbox}
          type={"text"}
          placeholder={"Search"}
        />
        <div onClick={handleSearch} className={styles.icon}>
          <img
            src="https://img.icons8.com/ios-glyphs/20/ffffff/search.png"
            alt="search-icon"
          />
        </div>
      </div>{" "}
    </div>
  );
}

export default Search;
