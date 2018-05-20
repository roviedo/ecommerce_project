import React, { Component } from 'react';


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
  	if (this.state.products) {
  		console.log('products', this.state.products);
  	} else {
  		console.log('nope');
  	}
    return (
      
      <div className="products">
      	Yoooooooo
      </div>
    )
  }
}

export default Products;