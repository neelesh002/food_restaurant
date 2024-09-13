import React, { useState } from "react";
import "./TestimonialSlider.css";


const Testimonial =[
    {
        name:"Neelesh kumar",
        text: "I’ve been looking forward to trying Pizza at Chapter One for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too",
        image: "/Images/client1.jpg",
        designation : "magna aliqua"
    },
    {
        name:"King Neel",
        text: "We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Burger. Some of the dishes did feel a bit pricey for the size, but we enjoyed them so much, we felt they were worth it",
        image: "/Images/client2.jpg",
        designation : "magna aliqua"
    },
];

const TestimonialSlider =()=>{
    const [currentIndex, setCurrentIndex]=useState(0)

    const handlepreclick= ()=>{
        setCurrentIndex((preindex)=>(preindex -1 + Testimonial.length)% Testimonial.length);
    };

    const handleNextclick= ()=>{
        setCurrentIndex((preindex)=>(preindex + 1)% Testimonial.length);
    };
     return (

       <div className="Testimonial-slider">
        <h2>What Says Our Customers</h2>
        <div className="testimonial-container">
            {Testimonial.map((Testimonial, index)=>(
                <div key={index} className={`testimonial ${index === currentIndex ? 'active' : ''}`}>
                <p>{Testimonial.text}</p>
                <h4>{Testimonial.name}</h4>
                <h5>{Testimonial.designation}</h5>

                </div>
             ))};
        </div>
        <div className="testimonial-navigation">
            {Testimonial.map((Testimonial,index)=>(
                <img key={index}
                src={Testimonial.image}
                alt={Testimonial.name}
                className={`testimonial-image ${index === currentIndex ? 'active' : ''}`}
                ></img>

            ))};

        </div>
        <div className="slider-control">
            <button onClick={handlepreclick}>&lt;</button>
            <button onClick={handleNextclick}>&gt;</button>
        </div>
       </div>
     );
    };
export default TestimonialSlider;

