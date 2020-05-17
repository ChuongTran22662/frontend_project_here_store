import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ForgetPass from './pages/forget-pass/forget-pass.component';
import CartCheckout from './pages/cart-checkout/cart-checkout.component';
import SignIn from './pages/signin/signin.component';
import Login from './pages/login/login.component';
import CartItemDetail from './pages/cart-item-detail/cart-item-detail.component';

import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import CartPage from './pages/cart/cart.component';
import CartDetail from './pages/cart-detail/cart-detail.component';

class App extends React.Component {

  render() {

    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart-checkout" component={CartCheckout} />
          <Route exact path="/forgetpass" component={ForgetPass} />
          <Route path="/cart" component={CartPage} />
          <Route path='/cart-detail' component={CartDetail} />
          <Route exact path="/cartitem-detail" component={CartItemDetail} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
