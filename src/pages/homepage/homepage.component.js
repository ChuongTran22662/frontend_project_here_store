import React, { Component } from 'react';
import './homepage.styles.css';
import Promo from '../../components/promo/promo.component';
import ProductCategory from '../../components/product-category/product-category.component';
import HighLights from '../../components/highlights/highlights.component';
import Bgr from '../../components/bgr/bgr.component';

export default class HomePage extends Component {
  render() {
    return (
      <div>
          <Bgr />
          <Promo />
          <HighLights />
          <ProductCategory />
      </div>
    );
  }
}
