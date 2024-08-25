import './Home.css';

const Home = () => {
  return (
    <section  className='hero'>
      <div className="hero-overlay">
        <div className="container">
          <h2>Discover Your Next Adventure</h2>
          <p>Explore the worlds most beautiful destinations with us</p>
          <form className="search-bar">
            <input type="text" placeholder="Search for destinations, activities, or hotels"/>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default Home