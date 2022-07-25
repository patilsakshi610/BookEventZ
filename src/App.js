import "./App.css";
import Form from "./Forms/Form";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Tabs from "./Tabs/Tabs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={"/"} exact>
            <Form />
          </Route>
          <Route path="/tabs">
            <Tabs />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
