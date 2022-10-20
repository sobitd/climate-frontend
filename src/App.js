import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from '../pages/Settings'
import Questions from '../pages/Questions'
import FinalScore from '../pages/FinalScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Settings/>
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/score">
          <FinalScore/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
