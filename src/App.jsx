import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Review from './pages/Review/Review';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './pages/footer/Footer';



function App() {

  return (
    <div className ='app'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/reviews' element={<Review/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Destination/>
        <Review/>
        <Blog/>
        <Contact/>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
