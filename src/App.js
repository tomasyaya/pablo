import "./styles.css";
import { Switch, Route } from "react-router-dom";
import SelectDog from "./components/views/SelectDog/SelectDog";
import DogImages from "./components/views/DogImages/DogImages";
import PageNotFound from "./components/views/PageNotFound/PageNotFound";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SelectDog />
        </Route>
        <Route exact path="/images/:breed">
          <DogImages />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}
