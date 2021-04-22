import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Terms from "./components/Terms/Terms";
import Signup from "./components/Signup/Signup";
import Timer from "./components/Timer/Timer";
import Nav from "./components/Nav/Nav";
import Rank from "./components/Rank/Rank";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Banner />
        <Main>
          <Nav />
          <Timer />
          <Switch>
            <Route exact path="/" component={Terms} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/rank" component={Rank} />
          </Switch>
          <Footer />
        </Main>
      </Router>
    </>
  );
}

export default App;
