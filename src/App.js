
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Mainpage from "./MainPage";

function App() {
  return (
    <div>
      <Router>
          <Route exact path="/" component={Mainpage} />
      </Router>
    </div>
  );
}

export default App;
