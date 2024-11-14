import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BookingForm(props) {
  const navigate = useNavigate();

  const [resDate, setResDate] = useState("");
  const [resGuests, setResGuests] = useState("1");
  const [seatOption, setSeatOption] = useState("Indoor")
  const [resOccasion, setResOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResGuests("1");
    setSeatOption("Indoor")
    setResOccasion("");
    setResDate("");
    props.submitForm(e);
  }

  const handleDateChange = (e) => {
    setResDate(e);
    //props.onTimeChange(e);
  }

  return (
    <div>
      <h1>Reservation Page</h1>
      <h2>Step 1 of 3</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date"
          id="res-date"
          value={resDate}
          onChange={(e) => handleDateChange(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time"
          title='test'
          onChange={() => props.onTimeChange}
        > {props.availableTimes.availableTimes.map((item) =>
          <option key={item}>{item}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number"
          min={1}
          max={10}
          id="guests"
          value={resGuests}
          onChange={(e) => {
            setResGuests(e.target.value);
          }}
        />
        <h3>Seating Options</h3>
        <label htmlFor="indoor">Indoor</label>
        <input type="radio"
          name="seatOption"
          value="Indoor"
          id="indoor"
          checked={seatOption === "Indoor"}
          onChange={(e) => {
            setSeatOption(e.target.value)
          }}
        />
        <label htmlFor="Outdoor">Outdoor</label>
        <input type="radio"
          name="seatOption"
          value="Outdoor"
          id="Outdoor"
          checked={seatOption === "Outdoor"}
          onChange={(e) => {
            setSeatOption(e.target.value)
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
          value={resOccasion}
          onChange={(e) => {
            setResOccasion(e.target.value);
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
      <div className="btnReserve"><button
        onClick={() => {
          navigate("/customer_info")
        }}
      >Customer Information</button>
      </div>
    </div>
  );
}

export default BookingForm;