import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Bgr from './components/Bgr/Bgr.component';
import Promo from './components/Promo/Promo.component';
import Highlights from './components/Highlights/Highlishts.component';
import ProductCategory from './components/ProductCategory/ProductCategory.component';
import Footer from './components/Footer/Footer.component';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Bgr />
        <Promo />
        <Highlights />
        <ProductCategory />
        <Footer />
      </div>
    )
  }
}

export default App;
