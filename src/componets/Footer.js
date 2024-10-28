import logo2 from '../images/logo2.png'
import "./Footer.css"

function Footer() {
  return (
    <footer class="footContainer">
      <div class="footImage"><img src={logo2}
        alt="Little Lemon"
        width="239"
        height="268"
      /></div>
      <div class="doormat"><h1>Doormat Navigation</h1>
        <ul type="none">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">reservations</a></li>
          <li><a href="/">Order Onlie</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
      <div class="contact"><h1>Contact</h1>
        <ul type="none">
          <li><a href="/">Address</a></li>
          <li><a href="/">Phone Number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
      </div>
      <div class="socialMediaLinks"><h1>Social Media Links</h1>
        <ul type ="none">
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;