import React from 'react';

const Product = ({image, name, price}) => {
    return ( 
        <div className="product-show">
            <div className="product-container">
                <div className="image-container">
                    <img src={image} alt="Item"></img>
                </div>
                
                <div className="item-info">
                    <h2>{name}</h2>
                    <h2>${price}</h2>
                </div>
            </div>
        </div>
    );
};

export default Product;