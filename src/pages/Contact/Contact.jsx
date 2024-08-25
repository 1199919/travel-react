import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="booking-form">
    <div className="container">
        <h3>Book Your Trip</h3>
        <form id="bookingForm">
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" required/>

          <label htmlFor="checkin">Check-in Date:</label>
          <input type="date" id="checkin" name="checkin" required/>

          <label htmlFor="checkout">Check-out Date:</label>
          <input type="date" id="checkout" name="checkout" required/>

          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" required/>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </section>
  )
}

export default Contact