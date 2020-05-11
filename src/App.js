import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/Footer/Footer.component';
import Login from './components/Login/Login.component';
import SignIn from './components/SignIn/SignIn.component';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
          <SignIn />
        <Footer />
      </div>
    )
  }
}

export default App;
