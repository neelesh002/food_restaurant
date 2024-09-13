import React from "react";
import './Promotions.css';
import { FaShoppingCart } from "react-icons/fa";


const Promotions=()=>{
    return(

        <div className="promotions">
            <div className="promotion-card">
                <img src="./Images/F2.jpg" alt="Burger"></img>
                <div className="promotion-content">
                    <div className="promotion-title">Tasty Thursday</div>
                    <div className="promotion-discount">20% Off</div>

                    <button className="order-button">Order Now <FaShoppingCart/></button>
                </div>
            </div>
            <div className="promotion-card">
                <img src="./Images/F6.jpg" alt="Pizza"></img>
                <div className="promotion-content">
                    <div className="promotion-title">Pizza Days</div>
                    <div className="promotion-discount">50% Off</div>

                    <button className="order-button">Order Now <FaShoppingCart/></button>
                </div>
            </div>
        </div>
    )

};
export default Promotions;