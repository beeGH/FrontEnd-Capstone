import "./Nav.css"
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Homepage from "./Homepage";
import logo from '../images/logo1.png'
import Reservation from "./Reservation";

function Nav() {
    return (
        <div class="nav-bar">
            <nav>
                <img src={logo}
                    alt="Little Lemon"
                    width="202"
                    height="76" />
                <ul type="none">
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><a href="/">Menu</a></li>
                    <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<Footer />}></Route>
                <Route path="/reservation" element={<Reservation />}></Route>
            </Routes>
        </div>
    )

}
export default Nav;