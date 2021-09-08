import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import WeatherDetail from "./pages/WeatherDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/weather/:city"} component={WeatherDetail} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
