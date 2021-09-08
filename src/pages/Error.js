import { Helmet } from "react-helmet";
import styles from "../styles/Error.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <Helmet>
        <title>Error | 404</title>
      </Helmet>
      <Navbar title="Error | 404" />
      <div className={styles.container}>
        <h1>404</h1>
        <p>Sorry, the page you are looking for doesn't exist</p>
        <Link className="primary-btn" to="/">
          Go Back
        </Link>
      </div>
    </>
  );
}

export default Error;
