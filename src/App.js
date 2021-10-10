import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./styles/_global.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card-details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
