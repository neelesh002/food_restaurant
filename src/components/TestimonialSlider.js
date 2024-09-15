import React, { useState } from "react";
import "./TestimonialSlider.css";


const Testimonial =[
    {
        name:"Neelesh kumar",
        text: "I’ve been looking forward to trying Pizza at Chapter One for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too",
        image: "/Images/client1.jpg",
        
    },
    {
        name:"Aditya",
        text: "The pizza at Chapter One is incredible! The crust is perfectly crispy on the outside but soft inside, and the sauce has just the right amount of tang. I ordered the margherita pizza, and the fresh basil and mozzarella made every bite burst with flavor. Definitely some of the best pizza I’ve had in a while!",
        image: "/Images/client2.jpg",
       
    },
    {
        name:"Ajay",
        text: "We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Burger. Some of the dishes did feel a bit pricey for the size, but we enjoyed them so much, we felt they were worth it",
        image: "/Images/client4.jpg",
        
    },
    {
        name:"Sonali",
        text: "I had the cheeseburger, and it was top-notch. The patty was juicy, and the bun was soft but sturdy enough to hold up the burger without getting soggy. They let you choose from several toppings, so I added bacon and grilled onions—great choice! The only thing I’d change is the portion size of the fries on the side. Overall, a solid burger spot.",
        image: "/Images/client5.jpg",
        
    },
    {
        name:"Raghav",
        text: "Hands down, the best fries I’ve ever had. They're crispy on the outside, fluffy on the inside, and perfectly seasoned. You can tell they use fresh potatoes, and they come out piping hot every time. I love dipping them in their garlic aioli—it’s a match made in heaven. If you're a fry lover, you won’t be disappointed!",
        image: "/Images/client3.jpg",
        
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

