import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import './Products.css';
import Product from './Product';
import ProductDetail from './ProductDetail';


class Products extends Component {
	constructor() {
		super()
		this.state = {
			products: null
		}
	}

	componentDidMount() {
		fetch('http://localhost:8000/api/products/').then(
			(response) => {
				return response.json()
			}).then((json) => {
				this.setState({
					products: json,
					productDetail: null
				})
			});
	}

	handleProductDetail = (product) => {
		this.setState({
			productDetail: product
		})
	}

  render() {
    let products;
    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1
    };

    if (this.state.productDetail) {
    	return (
    		<ProductDetail product={this.state.productDetail} productDetail={this.handleProductDetail} />
    	);
    } else if (this.state.products) {
  		console.log('products', this.state.products);
      products = this.state.products.map((item, index) => {
        return (
          <Product key={ index } item={ item } index={ index } productDetail={this.handleProductDetail} />
        );
       })
    } else {
      products = null;
    }

    return (
      
      <div className="products">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          { products }
        </Masonry>
      </div>
    )
  }
}

export default Products;