import React, { Component } from 'react';
import './collection-cart-item.styles.css';

export default class CollectionCartItem extends Component {
    render() {
        return (
            <ul className="cartitem_collection_main_content">
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    Korean
              </li>
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    China
              </li>
                <li className="cartitem_collection_main_content_li">
                    <i className="fa fa-chevron-circle-right"></i>
                    Viet Nam
              </li>
            </ul>
        );
    }
}
