import logo2 from '../images/logo2.png'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footContainer">
      <div className="footImage"><img src={logo2}
        alt="Little Lemon"
        width="200"
        height="200"
      /></div>
      <div className="doormat"><h3>Doormat Navigation</h3>
        <ul type="none">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">reservations</a></li>
          <li><a href="/">Order Onlie</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
      <div className="contact"><h3>Contact</h3>
        <ul type="none">
          <li><a href="/">Address</a></li>
          <li><a href="/">Phone Number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
      </div>
      <div className="socialMediaLinks"><h3>Social Media Links</h3>
        <ul type ="none">
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;