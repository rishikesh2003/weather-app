import { useState, useEffect } from "react";
import config from "../config/index";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { Helmet } from "react-helmet";
import styles from "../styles/WeatherDetail.module.css";

function WeatherDetail({ match: { params } }) {
  const firstLetter = params.city[0].toUpperCase();
  const city = firstLetter + params.city.slice(1);
  useEffect(() => {
    fetchData();
  }, [city]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const mainUrl =
    config.baseApiUrl + `q=${city}&appid=${config.apiKey}&units=metric`;
  async function fetchData() {
    setLoading(true);
    const res = await axios.get(mainUrl);
    const parsedData = await res.data;
    await setData(parsedData);
    setLoading(false);
    console.log(data);
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Helmet>
        <title>{city + "'s Weather Today"}</title>
      </Helmet>
      <Navbar title={city + "'s Weather Today"} />
      <Search />
      <div className={styles.container}>
        <h1>{city}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
        />
      </div>
      <Footer />
    </>
  );
}

export default WeatherDetail;
