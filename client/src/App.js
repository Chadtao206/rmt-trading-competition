import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Terms from "./components/Terms/Terms";

function App() {
  return (
    <>
      <Router>
        <Banner />
        <Main>
          <Switch>
            <Route path="/" component={Terms} />
          </Switch>
        </Main>
      </Router>
    </>
  );
}

export default App;
