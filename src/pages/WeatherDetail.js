import { useState, useEffect } from "react";
import config from "../config/index";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { Helmet } from "react-helmet";
import styles from "../styles/WeatherDetail.module.css";
import unixtimestampconverter from "../components/unixtimestampconverter";

function WeatherDetail({ match: { params } }) {
  const firstLetter = params.city[0].toUpperCase();
  const city = firstLetter + params.city.slice(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const mainUrl =
    config.baseApiUrl + `q=${city}&appid=${config.apiKey}&units=metric`;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(mainUrl);
      const parsedData = await res.data;
      await setData(parsedData);
      setLoading(false);
    };
    fetchData();
  }, [mainUrl]);

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
        <div className={styles.card}>
          <h1>Temperature</h1>
          <h2>{data.main.temp} °C</h2>
          <img
            src="https://img.icons8.com/fluency-systems-regular/60/000000/temperature--v2.png"
            alt="temperature-icon"
          />
          <p>
            H: {data.main["temp_max"]} °C L: {data.main["temp_min"]} °C
          </p>
          <p>Feels Like: {data.main["feels_like"]} °C</p>
        </div>
        <div className={styles.card}>
          <h1>{city}</h1>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <h2>
            {data.weather[0].main ? data.weather[0].main : "Data Not Available"}
          </h2>
          <p>
            {data.weather[0].description
              ? data.weather[0].description
              : "Data Not Available"}
          </p>
        </div>
        <div className={styles.card}>
          <h1>Sun Data</h1>
          <p>
            Country :{" "}
            {data.sys.country ? data.sys.country : "Data Not Available"}
          </p>
          <img
            src="https://img.icons8.com/ios/60/000000/sun.png"
            alt="sun-icon"
          />
          <h3>Sunrise: {unixtimestampconverter(data.sys.sunrise)}</h3>
          <h3>Sunset: {unixtimestampconverter(data.sys.sunset)}</h3>
        </div>
        <div className={styles.card}>
          <h1>Wind Data</h1>
          <img
            src="https://img.icons8.com/ios-filled/60/000000/wind--v1.png"
            alt="wind-icon"
          />
          <h2>Speed: {data.wind.speed} Km/H</h2>
          <p>Deg: {data.wind.deg ? data.wind.deg : "Data Not Available"}°</p>
          <p>Gust: {data.wind.gust ? data.wind.gust : "Data Not Available"}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WeatherDetail;
