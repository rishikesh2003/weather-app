import { useHistory } from "react-router-dom";
import "../styles/Footer.module.css";

function Footer() {
  const d = new Date();
  const y = d.getFullYear();
  const history = useHistory();
  return (
    <footer>
      <p>
        <span
          onClick={() => {
            history.push("/");
          }}
          className={"highlight highlight-link"}
        >
          Weather App
        </span>{" "}
        | Copyright &copy; {y}
      </p>
    </footer>
  );
}

export default Footer;
