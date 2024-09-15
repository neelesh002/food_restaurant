import React,{useState} from "react";
import './BookTable.css';



const BookTable=()=>{
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="book-table-section" id="Book-Table">

<div className="form-container">
    
        <h2>Book A Table</h2>

        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Your Email" required />
            <input type="number" placeholder="How many persons?" required />
            <input type="date" placeholder="dd-mm-yyyy" required />

            <button type="submit">Book Now</button>
            </form>
            {isSubmitted && <p>Your form is submitted!</p>}
            </div>
            <div className="map-container">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29351.12919645775!2d79.92478935!3d23.137653649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725396240721!5m2!1sen!2sin"
            
            width="100%"
            height="100%"
            allowFullScreen="false"
            aria-hidden="false"
            tabIndex="0"
             >
                
             </iframe>
              
            </div>
 </div>

    );
};

export default BookTable;


