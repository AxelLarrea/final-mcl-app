import React from 'react';


const ItemDetail = ({item, description}) => {

    const {thumbnail, pictures, price, title} = item;

    return (
        <>
            <div className="detail-container">
                <div className="image-info-container">
                    <div className="picture-container">
                        <img src={(pictures && pictures[0].url) || thumbnail} alt="item" />
                    </div>
                    <div className="info-container">
                        <h2>{title}</h2>
                        <div className="prices">
                            <h2>{price}</h2>
                            <button className="">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="description-container">
                    <h2>Descripción del producto</h2>
                    <h3>{description.plain_text}</h3>
                </div>
            </div>
        </>
    );
}
 
export default ItemDetail;