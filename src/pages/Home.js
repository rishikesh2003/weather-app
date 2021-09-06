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
      <Footer />
    </>
  );
}

export default Home;
