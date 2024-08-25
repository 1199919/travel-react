import './Review.css'

const Review = () => {
  return (
    <section id="review" className="user-reviews">
    <div className="container">
        <h3>User Reviews</h3>
        <div className="reviews-grid">
           
            <div className="review-card">
                <p>{"An unforgettable experience in Bali. The beaches were breathtaking!"}</p>
                <h4>- John Doe</h4>
            </div>
            
            <div className="review-card">
                <p>{"Paris was absolutely magical. I can't wait to go back!"}</p>
                <h4>- Jane Smith</h4>
            </div>
            
            <div className="review-card">
                <p>{"New York City has something for everyone. Loved every minute!"}</p>
                <h4>- Michael Brown</h4>
            </div>
        </div>
    </div>
</section>
  )
}

export default Review