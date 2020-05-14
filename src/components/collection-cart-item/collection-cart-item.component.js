import React, { Component } from 'react';
import './collection-cart-item.styles.css';

export default class CollectionCartItem extends Component {
    render() {
        return (
            <ul className="cartitem_collection_main_content">
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    Áo
              </li>
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    Áo
              </li>
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    Áo
              </li>
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    Áo
              </li>
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    Áo
              </li>
            </ul>
        );
    }
}
