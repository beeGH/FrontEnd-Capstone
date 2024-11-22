import "./Nav.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Homepage from "./Homepage";
import logo from '../images/logo1.png'
import BookingForm from "./BookingForm";
import CustomerInfo from "./CustomerInfo";
import Confirmed from "./Confirmed";
import { useEffect, useReducer } from "react";
import { useState } from "react";

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};

function Nav() {

    const initializeTimes = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);
    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))};
    }

    const navigate = useNavigate();

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    return (
        <div className="nav-bar">
            <nav>
                <img src={logo}
                    alt="Little Lemon"
                    width="202"
                    height="76" />
                <ul type="none">
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><a href="/">Menu</a></li>
                    <li><Link to="/booking-form" className="nav-item">Reservation</Link></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<Footer />}></Route>
                <Route path="/booking-form" element={<BookingForm
                    availableTimes={state}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />}>
                </Route>
                <Route path="/customer_info" element={<CustomerInfo />}></Route>
                <Route path="/confirmed" element={<Confirmed />}></Route>
            </Routes>
        </div>
    )

}
export default Nav;