import './Navbar.css';
import logo from '../../assets/logo-no-background.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt=''/>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/destination">Destinations</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar