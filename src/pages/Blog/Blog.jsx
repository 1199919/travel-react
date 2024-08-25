import './Blog.css';
import safari from '../../assets/uganda_family_safari.jpg';
import hero from '../../assets/hero.jpg';
import ranked from '../../assets/Uganda-Ranked-best-destination.jpg';

const Blog = () => {
  return (
    <section id="blog" className="blog">
    <div className="container">
        <h3>Latest Blog Posts</h3>
        <div className="blog-grid">
            
            <div className="blog-card">
                <img src={safari} alt="Blog 1"/>
                <h4>Top 10 Hidden Gems in Europe</h4>
                <p>Discover some of the most beautiful, lesser-known destinations across Europe...</p>
                <a href="#">Read More</a>
            </div>
            
            <div className="blog-card">
                <img src={hero} alt="Blog 2"/>
                <h4>Best Travel Tips for 2024</h4>
                <p>Get the most out of your travels with these expert tips...</p>
                <a href="#">Read More</a>
            </div>
           
            <div className="blog-card">
                <img src={ranked} alt="Blog 3"/>
                <h4>How to Travel on a Budget</h4>
                <p>{"Explore the world without breaking the bank. Here's how..."}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Blog