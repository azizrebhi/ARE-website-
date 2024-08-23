import './Cards.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Cards() {
    return ( 
        <div>
        <div className="container">
            <div className="card">
                <img src="public\image1.jpg" className="card-img-top" alt="The Hellish Blast" />
                <div className="card-body">
                    <h5 className="card-title">The Third Specification Book</h5>
                    <p className="card-text"> Embark on an epic quest to restore balance to a world in chaos. Reignite the Fire Element and save the realm. Click the link to start your journey and stay tuned for thrilling updates!</p>
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                </div>
            </div>
            <div className="card">
                <img src="public\image2.jpg" className="card-img-top" alt="Earth’s Last Hope" />
                <div className="card-body">
                    <h5 className="card-title">The Second Specification Book</h5>
                    <p className="card-text"> Embark on an epic quest with ZVENDEN, the robot destined to restore Earth's lost glory. Explore sacred ruins and mystical labyrinths in this captivating adventure. Click the link to start your journey and stay tuned for more!</p>
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                </div>
            </div>
            <div className="card">
                <img src="public\image3.jpg" className="card-img-top" alt="Wave Wardens: Dive into Destiny" />
                <div className="card-body">
                    <h5 className="card-title">The First Specification Book</h5>
                    <p className="card-text">Join Poseidon's robots on a thrilling mission to restore the oceans' balance. Unveil secrets and explore a world where myth meets technology. Start your adventure now and stay tuned for more!</p>
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                </div>
            </div>
            <div className="card">
                <img src="public\image4.jpg" className="card-img-top" alt="Chemical Chaos: Robots on a Mission" />
                <div className="card-body">
                    <h5 className="card-title">Chemical Chaos: Robots on a Mission</h5>
                    <p className="card-text">Get ready to explore the thrilling intersection of robotics and chemistry in this year’s RoboCup. Join us for intense competitions and dynamic exhibits as we dive into the world of chemically-chaotic robotics. Stay tuned for more!</p>
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                </div>
            </div>
            <div className="card">
                <img src="public\image5.jpg" className="card-img-top" alt="Top Secrets Unveiled: The RoboCup Awaits" />
                <div className="card-body">
                    <h5 className="card-title">Top Secrets Unveiled: The RoboCup Awaits</h5>
                    <p className="card-text">Brace yourself for a thrilling revelation as the RoboCup approaches with groundbreaking surprises. Stay connected and prepare to unlock the extraordinary in the world of robotics. Keep your sensors sharp and get ready to unleash your potential!</p>
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                </div>
            </div>
            <div className="card">
                <img src="public\image6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">A New Milestone for ARE: Honored by the University of Manouba</h5>
                    <p className="card-text">We’re thrilled to announce that ARE has been recognized for its outstanding contribution to university life in 2023-2024. Thank you to everyone who made this possible!</p>
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                </div>
            </div>
  
        </div>
        <div className='footer-at-bottom'>
            <footer>
        <div className="main-content">
          <div className="left box">
            <h2>About us</h2>
            <div className="content">
              <p>L'ARE est une association à but non lucratif fondée en 2006 au sein de l'ENSI par un groupe d'amateurs de robotique dans l'optique d'affuter les esprits de nos jeunes informaticiens et de concrétiser leurs créativités.</p>
              <div className="social">
                <a href="https://www.facebook.com/association.robotique.ensi"><span className="fab fa-facebook-f"></span></a>
                <a href="#"><span className="fab fa-twitter"></span></a>
                <a href="#"><span className="fab fa-instagram"></span></a>
                <a href="https://www.youtube.com/@associationrobotiqueensi6742"><span className="fab fa-youtube"></span></a>
              </div>
            </div>
          </div>
  
          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text"> Campus Manouba, 2010</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone-alt"></span>
                <span className="text"> 50 060 808</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text"> association.robotique@ensi-uma.tn</span>
              </div>
            </div>
          </div>
  
          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="email" required />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea rows={2} cols={25} required></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="credit">Created By <a href="http://www.association-robotique-ensi.tn">CodingARE</a> | </span>
            <span className="far fa-copyright"></span><span> 2024 All rights reserved.</span>
          </center>
        </div>
      </footer>
      </div> 
        </div>
    );
}
export default Cards;