import "./styles/App.css";
import Header from "./pages/Header";
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import Animes from "./pages/Animes";
import Characters from "./pages/Characters";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/animes">
              <Animes />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
