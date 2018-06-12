import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component {
	handleClick = () => {
		this.props.productDetail(null);
	}

  render() {
    return (
      <div className='product-detail-container'>
        <div className='image-container'>
        	<img src={ this.props.product.image_string } alt={ this.props.product.description } />
        </div>
        <div className='product-details'>
          <ul>
            <li><h3>{ this.props.product.description }</h3></li>
            <li>Price&nbsp;{ this.props.product.price }</li>
            <li>Weight&nbsp;{ this.props.product.weight }</li>
            <li>Dimensions&nbsp;{ this.props.product.dimensions }</li>
          </ul>
        </div>
        <button className='close-button' onClick={this.handleClick}>X</button>
      </div>
    )
  }
}

export default ProductDetail;