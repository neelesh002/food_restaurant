import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Promotions from './components/Promotions';
import Menu from './components/Menu';
import Burger2 from './components/Burger2';
import BookTable from './components/BookTable';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Header/>
      <Promotions/>
      <Menu/>
      <Burger2/>
      <BookTable/>
      <TestimonialSlider/>
      <Footer/>
     
    </div>
  );
}

export default App;
