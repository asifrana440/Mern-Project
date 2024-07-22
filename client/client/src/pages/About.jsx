import aboutImage from '../images/login1.png_300.png';
import { useAuth } from '../store/auth';

const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome {user ? `${user.username} to our website` : "to our website"}</p>

              <h1>Why Choose Us</h1>
              <p>
                1. Portfolio Website: Create a professional portfolio website that showcases your previous projects, including both frontend and backend work. <br /><br />
                2. Highlight Your Skills: Clearly list your technical skills and expertise as a full-stack developer. <br /><br />
                3. Showcase Projects: Feature your best projects prominently on your portfolio website. <br /><br />
                4. Client Testimonials: If you have worked with clients or employers in the past, ask them for testimonials or recommendations that you can display on your website. <br /><br />
                5. Personal Branding: Develop a strong personal brand that sets you apart from other developers.
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
                src={aboutImage}
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
    </>
  );
}

export default About;
