import React from "react";
import './Product.css';

function Product(props) {

    return (
        <>
            <div className="container">
                <div className="discount">Save ${props.discount}</div>
                <div className="image">
                    <img src={props.img} alt="img"></img>
                </div>
                <div className="details">
                    <div className="speciality-container"><div className="speciality">{props.speciality}</div></div>
                    <div className="company">{props.company}</div>
                    <div className="model">{props.model}</div>
                    <div className="price">${props.price}</div>
                    <div className="shop-button-container"><div className="shop-button">Shop deal</div></div>
                </div>
            </div>
        </>
    )
}

export default Product;