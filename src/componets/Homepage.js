import './Homepage.css';
import Hero from './Hero';
import Specials from './Specials';
import About from './About';
import Reviews from './Reviews';
import React from 'react';
import gs_img from '../images/greek salad.jpg'
import brs_img from '../images/bruchetta.png'
import ld_img from '../images/lemon dessert.jpg'
import avatar_img from '../images/avatar.png'


function Homepage() {

  const [specials] = React.useState([
    {
      name: "Greek Salad",
      desc: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      image: gs_img,
      id: 1
    },
    {
      name: "Bruschetta",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      image: brs_img,
      id: 2
    },
    {
      name: "Lemon Desert",
      desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      image: ld_img,
      id: 3
    },
  ]);

  const [reviews] = React.useState([
    {
      name: "John Doe",
      review: "Great food, great service.",
      image: avatar_img,
      rating: "5 out of 5 stars",
      id: 1
    },
    {
      name: "Jill Doe",
      review: "My favorite place to eat.  I love the atmosphere there.",
      image: avatar_img,
      rating: "5 out of 5 stars",
      id: 2
    },
    {
      name: "Fake Fakeman",
      review: "Always a wonderful experience.  Don't forget to get dessert.",
      image: avatar_img,
      rating: "4 out of 5 stars",
      id: 3
    },
  ]);

  return (
    <div className="hero-container">
      <div className="hero"><Hero /></div>
      <div className="specials"><Specials specials={specials} /></div>
      <div className="reviews"><Reviews reviews={reviews} /></div>
      <div className="about"><About /></div>
    </div>
  );
}

export default Homepage;