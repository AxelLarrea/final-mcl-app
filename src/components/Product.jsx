import React from 'react';

const Product = ({image, name, price, discount}) => {
    return ( 
        <div className="product-show">
            <div className="product-container">
                <div className="image-container">
                    <img src={image} alt="Item"></img>
                </div>
                
                <div className="item-info">
                    <h2>{name}</h2>
                    {discount ? <s><span>${discount}</span></s>: <></>}
                    <h2>${price}</h2>
                </div>
            </div>
        </div>
    );
};

export default Product;