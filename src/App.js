import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from '../pages/Settings'
import Instructions from "../pages/Instructions";
import Home from '../pages/Home'
import {Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" marginTop={5}>
        <Switch>
        <Route path="/">
          <Typography variant="h2" fontWeight="bold">
          <Home/>
          </Typography>
        </Route>
        <Route path="/instructions">
          <Instructions />
        </Route>
        <Route path="/score">
          <FinalScore/>
        </Route>
      </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
