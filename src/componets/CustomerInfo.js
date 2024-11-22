import { useState } from "react";
import "./FormStyle.css"

function CustomerInfo() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [cvcCode, setCvcCode] = useState("");

    const getIsFormValid = () => {
        return (
            firstName &&
            phoneNumber
        )
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setCardNumber("");
        setNameOnCard("");
        setCvcCode("");
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted");
        clearForm();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Customer Information</h1>
                    <h2>Step 2 of 3</h2>
                    <div className="Field">
                        <lable>First Name <sup>*</sup></lable>
                        <input
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            placeholder="First name"
                        />
                    </div>
                    <div className="Field">
                        <lable>Last Name</lable>
                        <input
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            placeholder="Last name"
                        />
                    </div>
                    <div className="Field">
                        <lable>Phone Number <sup>*</sup></lable>
                        <input
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="Field">
                        <lable>Email</lable>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Email"
                        />
                    </div>
                    <h1>Credit Card </h1>
                    <h2>Step 3 of 3</h2>
                    <div className="Field">
                        <lable>Card Number</lable>
                        <input
                            value={cardNumber}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Card Number"
                        />
                    </div>
                    <div className="Field">
                        <lable>Name on Card</lable>
                        <input
                            value={nameOnCard}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Name on Card"
                        />
                    </div>
                    <div className="Field">
                        <lable>Last 3 Digits on Back of Card</lable>
                        <input
                            value={cvcCode}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="CVC Code"
                        />
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default CustomerInfo;