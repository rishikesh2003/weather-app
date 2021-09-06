import "../styles/Footer.module.css";

function Footer() {
  const d = new Date();
  const y = d.getFullYear();
  return (
    <footer>
      <p>
        <span className={"highlight"}>Weather App</span> | Copyright &copy; {y}
      </p>
      <p>Built with ❤️ by Rishikesh</p>
    </footer>
  );
}

export default Footer;
