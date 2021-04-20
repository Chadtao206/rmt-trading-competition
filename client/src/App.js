import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Terms from "./components/Terms/Terms";
import Signup from "./components/Signup/Signup";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <Router>
        <Banner />
        <Main>
          <Timer />
          <Switch>
            <Route exact path="/" component={Terms} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Main>
      </Router>
    </>
  );
}

export default App;
