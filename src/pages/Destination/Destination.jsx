import './Destination.css';
import bestPlace from '../../assets/best-places-in-Uganda.jpg';
import bunyonyi from '../../assets/Lake-Bunyonyi-26.jpg';
import bunyonyiLake from '../../assets/Lake-Bunyonyi.jpg';
import holidayVac from '../../assets/Uganda-holiday-vacations.webp';

const Destination = () => {
  return (
    <section id="destination" className="popular-destinations">
      <div className="container">
        <h3>Popular Destinations</h3>
        <div className="destinations-grid">
            
          <div className="destination-card">
              <img src={bestPlace} alt="Destination 1"/>
              <h4>Paris, France</h4>
              <p>The city of lights awaits you. Explore the Eiffel Tower, museums, and more.</p>
          </div>
          
          <div className="destination-card">
              <img src={bunyonyi} alt="Destination 2"/>
              <h4>Bali, Indonesia</h4>
              <p>Experience the stunning beaches, vibrant culture, and tropical paradise.</p>
          </div>
      
          <div className="destination-card">
              <img src={bunyonyiLake} alt="Destination 3"/>
              <h4>New York City, USA</h4>
              <p>The city that never sleeps offers endless activities, dining, and entertainment.</p>
          </div>
      
          <div className="destination-card">
              <img src={holidayVac} alt="Destination 4"/>
              <h4>Tokyo, Japan</h4>
              <p>Immerse yourself in the bustling metropolis and experience the blend of tradition and modernity.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination