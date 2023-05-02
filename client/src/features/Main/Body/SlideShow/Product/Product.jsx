import React from "react";
import './Product.css';

function Product() {

    return (
        <>
            <div className="container">
                <div className="discount">Save $20</div>
                <div className="image">
                    <img src="https://ee.co.uk/content/dam/ee-homepage/Deals/S23-Ultra_237x237.png.eeimg.400.1-1.default.jpg" alt="img"></img>
                </div>
                <div className="details">
                    <div className="speciality-container"><div className="speciality">Unlimited Data</div></div>
                    <div className="company">Samsung Galaxy</div>
                    <div className="model">S23 Ultra</div>
                    <div className="price">$30</div>
                    <div className="shop-button-container"><div className="shop-button">Shop deal</div></div>
                </div>
            </div>
        </>
    )
}

export default Product;