import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import './Products.css';


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
				console.log('this response', response);
				return response.json()
		}).then((json) => {
			this.setState({
				products: json
			})
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

  	if (this.state.products) {
  		console.log('products', this.state.products);
      products = this.state.products.map((item, index) => {
        return (
          <div key={ index }>
            <img src={ item.image_string } alt={ item.description } style={{width: "100%" }}/>
            <div>{ item.price }</div>
          </div>
        );
       })
    } else {
      console.log('nope');
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