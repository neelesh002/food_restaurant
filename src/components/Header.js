import React from "react";
import{Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Header.css';


const Header=()=>{
    return (
        <header className="header" id="home">
            <div className="header-content">
                <Carousel 
                showThums = {false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                showArrows={false}
                >
                <div className="slider-text">
                    <h2>Fast Food Restaurent</h2>
                    <p> Burgers! Because no great story started with salad.Food that makes you say wow.Once you try it, you will love it.
                    </p>

                    <button className="order-button">Order Now</button>

                </div>

                <div className="slider-text">
                    <h2>Delicious Meals</h2>
                    <p> Burgers! Because no great story started with salad.Food that makes you say wow.Once you try it, you will love it.
                    </p>

                    <button className="order-button">Order Now</button>

                </div>

                <div className="slider-text">
                    <h2>Best Burger in Town</h2>
                    <p> Burgers! Because no great story started with salad.Food that makes you say wow.Once you try it, you will love it.
                    </p>

                    <button className="order-button">Order Now</button>

                </div>


                    </Carousel>
                    
               
            </div>

        </header>
    )
}

export default Header;