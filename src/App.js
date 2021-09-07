import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import WeatherDetail from "./pages/WeatherDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/weather/:city"} component={WeatherDetail} />
      </Switch>
    </Router>
  );
}

export default App;
