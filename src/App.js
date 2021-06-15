import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Page/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>

        </Router>

    </div>
  );
}

export default App;
