import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <Helmet>
        <title>Weather App | Home</title>
      </Helmet>
      <Navbar title={"Home"} />
      <Search />
      <h1 className="main-header">Wind Map</h1>
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe src="https://earth.nullschool.net/" title="MAP"></iframe>
      </div>

      <Footer />
    </>
  );
}

export default Home;
