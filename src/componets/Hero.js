import restImg from '../images/restauranfood.jpg'
import "./Hero.css"
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <main className="container2">
      <div className="name">Little Lemon</div>
      <div className="city">Chicago</div>
      <p className="desc">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <div className="btnReserve"><button
        onClick={() => {
          navigate("/booking-form")
        }}
      >Reserve a Table</button>
      </div>
      <div className="image"><img src={restImg}
        alt="Restaurant"
        width="350"
        height="450"
      /></div>
    </main>
  )
}
export default Hero;