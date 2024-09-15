import React, {useState} from "react";
import './Menu.css';
import { FaShoppingCart } from "react-icons/fa";


const menuItems=[

{category:'Pizza',Name:'Delicious Pizza',Price: '$20', Image: '/Images/F6.jpg'},
{category:'Burger',Name:'Tasty burger',Price: '$25', Image: '/Images/F3.jpg'},
{category:'Pizza',Name:'Delicious Pizza',Price: '$50', Image: '/Images/F1.jpg'},
{category:'Pasta',Name:'Delicious Pasta',Price: '$30', Image: '/Images/F4.jpg'},
{category:'fries',Name:'French fries',Price: '$40', Image: '/Images/F5.jpg'},
{category:'Pizza',Name:'Delicious Pizza',Price: '$45', Image: '/Images/F8.jpg'},
{category:'Burger',Name:'Testy Burger',Price: '$40', Image: '/Images/B3.jpg'},
{category:'Burger',Name:'Testy Burger',Price: '$30', Image: '/Images/B1.jpg'},
{category:'Pizza',Name:'Delicious Pizza',Price: '$50', Image: '/Images/F9.jpg'}

];

const category=['All', 'Burger', 'Pizza','Pasta', 'fries'];


const Menu=()=>{

const [activeCategory, setActiveCategory]=useState('All');

const filterredItems = activeCategory==='All' ? menuItems : menuItems.filter(item => item.category===activeCategory);

return (
    <div className="menu" id="Menu">
        <h2>Our Menu</h2>
        <div className="menu-categories">
            {category.map(category =>(
                <button key={category}  className={activeCategory === category ? 'active' : ''} onClick={()=> setActiveCategory(category)} >  {category}</button>
            ))}
        </div>
       <div className="menu-items">
        {filterredItems.map((item , index)=>(
            <div className="menu-card" key={index}>
                <img src={item.Image} alt={item.Name}  />
               <div className="menu-card-content">
                  <h3>{item.Name}</h3>
                  <p>The page is organized into categories which makes navigation easy. Each menu item has the name, price, and a short description of the food. When you click on a meal, you can see an image and further information about the food, including nutritional content.</p>

                  <div className="Menu-card-price">{item.Price}</div>
                  <button className="order-button">
                    Order Now
                    <FaShoppingCart/>
                  </button>
                </div>                   
               </div>
        ))}
       </div>


    </div>
)

};

export default Menu;