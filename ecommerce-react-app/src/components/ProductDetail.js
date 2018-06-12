import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component {
	handleClick = () => {
		this.props.productDetail(null);
	}

  render() {
  	console.log('this props', this.props);
    return (
      
      <div className='product-detail-container'>
        <div className='image-container'>
        	<img src={ this.props.product.image_string } alt={ this.props.product.description } />
        </div>
        <div>hi</div>
        <button className='close-button' onClick={this.handleClick}>X</button>
      </div>
    )
  }
}

export default ProductDetail;