import React from 'react';
import '../css/homepage.css';

function Homepage() {
  return (
    <>
      <div className="home-page">
        <div
          className="header-background d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage: "url('/assets/background image.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
          }}
        >
          <div className="home-box">
            <h2 className="h4 text-white" style={{ fontStyle: 'italic' }}>
              Welcome to:
            </h2>
            <h1 className="display-4 text-white" style={{ fontWeight: 'bold' }}>
              NYUMBANI CONSTRUCTION WORKS
            </h1>
            <h2 className="h4 text-white" style={{ fontStyle: 'italic' }}>
              "We solve your construction problems and save your precious time."
            </h2>
          </div>
        </div>

        <div className="container">
          <div className="future">
            <div className="drive-content">
              <div className="drive-image">
                <img src="/assets/free.png" alt="Contact" />
              </div>

              <div className="drive-text">
                <h2>Are you a homeowner, contractor or builder?</h2>
                <p>
                  At Nyumbani, we offer top-quality materials that not
                  only meet your structural needs but also elevate the aesthetics of every project.
                  Build strong. Build beautiful.
                </p>
              </div>
            </div>
          </div>

          <h1 className="center-text">Our Services</h1>
          <div className="info-container">
            <div className="info-box">
              <div className="services-box">
                
                  <img src="/assets/professionalism.png" alt="Professionalism Icon" />
                 <h2> Manufacture of Concrete Blocks
                </h2>
                <p>
                  We manufacture various concrete blocks in different sizes based on client preferences and structural needs.
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="services-box">
                <img src="/assets/integrity.png" alt="Integrity Icon" />
                <h2>
                  High-Quality Pavers
                </h2>
                <p>
                  We manufacture and install eco-friendly, durable, and visually appealing pavers in multiple types and colors.
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="services-box">
                
                  <img src="/assets/exceptional service logo.png" alt="Exceptional Service Icon" />
                 <h2> Premium Tiles</h2>
                <p>
                  Our premium tiles cater to residential, commercial, and industrial needs, tailored to your desired aesthetics.
                </p>
              </div>
            </div>
          </div>

          <h1 className="center-text">Our Team</h1>
          <div className="team-container">
            <div className="team-image">
              <img src="/assets/pic2.jpg" alt="Team Member 1" />
              <h3>Muzinga James</h3>
              <h4>CEO & FOUNDER</h4>
            </div>

            <div className="team-image">
              <img src="/assets/free.png" alt="Team Member 2" />
              <h3>Mr. Mutyaba Shafik</h3>
              <h4>Operations Manager</h4>
            </div>

            <div className="team-image">
              <img src="/assets/pic2.jpg" alt="Team Member 3" />
              <h3>Kiyimba Moses</h3>
              <h4>Head of Production</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
