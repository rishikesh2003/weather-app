import styles from "../styles/Search.module.css";
import { useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  function handleSearch() {
    console.log(city);
  }
  return (
    <div className={styles.container}>
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
