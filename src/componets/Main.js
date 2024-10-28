import restImg from '../images/restauranfood.jpg'
import "./Main.css"


function  Main() {
    return (
      <main class="container2">
        <div class="name">Little Lemon</div>
        <div class="city">Chicago</div>
        <p class="desc">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <div class="btnReserve"><button>Reserve a Table</button></div>
        <div class="image"><img src={restImg}
             alt="Restaurant"
             width="350"
             height="450"             
             /></div>
      </main>
    )
    }
export default Main;