import heroImage from '../images/reg.png_300.png';
import heroImage1 from '../images/registration-png-image_2190997.jpg'; // Assuming this is the correct import path

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Our Website</h1>
              <p>
                A.o.A MySelf Muhammad Asif. I completed my Graduation from
                Islamia University Bahawalpur in Computer Science. I belong to
                Lodhran and currently living in Lahore. I have six months
                experience in the field of web development frontend with ReactJS
                and Backend with Node.js. Looking for an opportunity. If you
                have any opportunity in the relevant field then let me know.
                Thank you.🙂
              </p>
              <div className="btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src={heroImage}
                alt="coding together"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="analytics-item">
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="analytics-item">
            <h2>100,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="analytics-item">
            <h2>500+</h2>
            <p>Well known Developers</p>
          </div>
          <div className="analytics-item">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src={heroImage1}
              alt="coding together"
              width="400"
              height="400"
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step toward a more efficient and secure IT
              information, contact us to discuss the future careers and more
              problem about you that you have in your life.
            </p>
            <div className="btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
