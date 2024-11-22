import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./FormStyle.css"

const GuestsErrorMessage = () => {
  return (
    <p className='FieldError'>Must have more than 1 guest to make a reservation.</p>
  );
};


function BookingForm(props) {
  const navigate = useNavigate();

  const [resDate, setResDate] = useState("");
  const [resGuests, setResGuests] = useState({
    value: "2",
    isTouched: false,
  });
  const [seatOption, setSeatOption] = useState("Indoor");
  const [resOccasion, setResOccasion] = useState("");
  const [resTimes, setResTimes] = useState("");

  const getIsFormValid = () => {
    return (
      resDate &&
      resGuests.value > 1
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setResGuests({
      value: "2",
      isTouched: false,
    });
    setSeatOption("Indoor")
    setResOccasion("");
    setResDate("");
    props.submitForm(e);
  }

  const handleDateChange = (e) => {
    setResDate(e);
    props.dispatch(e);
  }

  return (
    <div>
      <h1>Table Reservation</h1>
      {/* <h2>Step 1 of 3</h2> */}
      <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
        <div className="Field">
          <label htmlFor="res-date">Choose date</label>
          <input type="date"
            id="res-date"
            value={resDate}
            onChange={(e) => { handleDateChange(e.target.value) }}
            required
          />
        </div>
        <div className="Field">
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time"
            title='test'
            onChange={(e) => setResTimes(e.target.value)}
            required
          > {props.availableTimes.availableTimes.map((item) =>
            <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="Field">
          <label htmlFor="guests">Number of guests</label>
          <input type="number"
            min={1}
            max={10}
            id="guests"
            value={resGuests.value}
            onChange={(e) => {
              setResGuests({ ...resGuests, value: e.target.value });
            }}
            onBlur={() => {
              setResGuests({ ...resGuests, isTouched: true });
            }}
          />
          {resGuests.isTouched && resGuests.value < 2 ?
            (<GuestsErrorMessage />) : null
          }
        </div>
        <div className="RadioField">
          <label className='RadioTitle'>Seating Options</label>
          <div className='RadioItems'>
            <label htmlFor="indoor" className='RadioLable'>Indoor</label>
            <input type="radio"
              className='RadioBtn'
              name="seatOption"
              value="Indoor"
              id="indoor"
              checked={seatOption === "Indoor"}
              onChange={(e) => {
                setSeatOption(e.target.value)
              }}
              required
            />
            <label htmlFor="Outdoor" className='RadioLable'>Outdoor</label>
            <input type="radio"
              className='RadioBtn'
              name="seatOption"
              value="Outdoor"
              id="Outdoor"
              checked={seatOption === "Outdoor"}
              onChange={(e) => {
                setSeatOption(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className="Field">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion"
            value={resOccasion}
            onChange={(e) => {
              setResOccasion(e.target.value);
            }}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button type='submit' disabled={!getIsFormValid()} aria-label="On Click">Submit</button>
      </form>
      {/* <div className="btnReserve"><button
        onClick={() => {
          navigate("/customer_info")
        }}
      >Customer Information</button>
      </div> */}
    </div>
  );
}

export default BookingForm;