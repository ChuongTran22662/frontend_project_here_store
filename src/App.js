import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/Footer/Footer.component';
import ForgetPass from './components/ForgetPass/ForgetPass.component';
import Search from './components/Search/Search.component';
import Cart from './components/Cart/Cart.component';
import SignIn from './components/SignIn/SignIn.component';
import Login from './components/Login/Login.component';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Login />
        <Footer />
      </div>
    )
  }
}

export default App;
