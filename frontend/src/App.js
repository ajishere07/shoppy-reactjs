import { Switch, Route } from "react-router";
import HomePage from "./components/Pages/HomePage";
import CartPage from "./components/Pages/CartPage";
import ProductsListingPage from "./components/Pages/ProductsListingPage";

import AuthenticationPage from "./components/Pages/AuthenticationPage";
import ProductPage from "./components/Pages/ProductPage";

import StripeCheckoutPage from "./components/StripeComponents/StripeCheckoutPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/products" component={ProductsListingPage} />
        <Route path="/account" component={AuthenticationPage} />
        <Route path="/buy" component={ProductPage} />
        <Route path="/payment" component={StripeCheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
