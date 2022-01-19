import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    const { img, name, seller, stock, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h1 className='product-name'>{name}</h1>
                <p><small>by: {seller}</small></p>
                <p>Price: $<span>{price}</span></p>
                <p>only 51 left in {stock} - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;