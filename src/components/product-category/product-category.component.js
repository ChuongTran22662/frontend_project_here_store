import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './product-category.styles.css';

import ProductItem from '../product-item/product-item.component';

export default class ProductCategory extends Component {
  render() {
    return (
      <div>
        <div className="product_container">
          <div className="product_title">
            <Link className="product_name" to="/cartitem">ÁO</Link>
          </div>
          <div className="productCategory">
            <div className="productCategory_bor">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
        <div className="product_container">
          <div className="product_title">
            <Link className="product_name" to="/cartitem">ÁO</Link>
          </div>
          <div className="productCategory">
            <div className="productCategory_bor">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
        <div className="product_container">
          <div className="product_title">
            <Link className="product_name" to="/cartitem">ÁO</Link>
          </div>
          <div className="productCategory">
            <div className="productCategory_bor">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
        <div className="product_container">
          <div className="product_title">
            <Link className="product_name" to="/cartitem">ÁO</Link>
          </div>
          <div className="productCategory">
            <div className="productCategory_bor">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
