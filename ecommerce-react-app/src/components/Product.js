import React, { Component } from 'react';
import classNames from 'classnames';
import './Product.css';

export default class Product extends Component {
	constructor() {
		super()
		this.state = {
			hover: false
		}
	}

	handleMouseEnter = () => {
		this.setState({
			hover: true
		});
	}

	handleMouseLeave = () => {
		this.setState({
			hover: false
		});
	}

	handleClick = () => {
		console.log('hey there I clicked');
		this.props.productDetail(this.props.item);
	}

	render () {
		const link = this.props.index;
		return (
			<div
				className={classNames('product', this.state.hover ? 'show-overlay' : null)}
				onMouseEnter={ this.handleMouseEnter }
				onMouseLeave={ this.handleMouseLeave }
				onClick={ this.handleClick }
			>
        <img src={ this.props.item.image_string } alt={ this.props.item.description } style={{ width: "100%" }}/>
        <div>{ this.props.item.price }</div>
      </div>
		);
	}
}