import { Switch, Route } from "react-router-dom";
import Products from "../components/products";
import Cart from "../components/cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
