import React from "react";
import '../css/project.css';

function Project() {
  return (
    <div>
      <header>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>NYUMBANI PROJECTS</h1>
      </header>

      <div className="container">
        <p>With nearly a decade of experience, Nyumbani has delivered a wide range of impactful projects some funded by our clients, others by us. Explore our project gallery to see the innovation, craftmanship, and results we have brought to life</p>
        
      </div>

      <div className="container">
        <h2>PROJECTS GALLERY</h2>

        <div className="info-boxes">
          <div className="info-box">
            <img src="/assets/cement.jpg" alt="Manufacturing cement blocks" />
            <p>Manufacturing cement blocks</p>
          </div>

          <div className="info-box">
            <img src="/assets/pavers manufacturing.jpg" alt="Manufacturing pavers" />
            <p>Manufacturing pavers</p>
          </div>

          <div className="info-box">
             <img src="/assets/tiles.jpg" alt="Manufacturing Tiles" />
             <p>Manufacturing Tiles</p>
          </div>

          <div className="info-box">
             <img src="/assets/delivery.jpg" alt="Delivering cement blocks" />
             <p>Delivering cement blocks</p>
          </div>

          <div className="info-box">
            <img src="/assets/pavers installations.jpg" alt="Installing pavers" />
            <p>Installing pavers</p>
          </div>


          <div className="info-box">
               <img src="/assets/assembling tiles.jpg" alt="Assembling and installing Tiles" />
            <p>Assembling and installing Tiles</p>
           </div>
        </div>
      </div>
<div className="container">
  <div className="engneer">
    <h1>What Engineer says:</h1>

    <div className="engneer-content">
      <img src="/assets/pic2.jpg" alt="Engineer" />

      <div className="engneer-text">
        <p>
          Working with Nyumbani Construction Works on your project is absolutely the best decision you can ever make towards achieving your dream.
          We put together a great team to handle our clients' needs. Our teams not only uphold great customer relationships but also invest their amazing skills to bring to life the exact projects that our clients are interested in.
          We intentionally choose a set of trained experts to handle projects to ensure client satisfaction.
          Above all, at Nyumbani we uphold our clients’ requests and expectations and strive to produce products that suit their tastes.
          Nyumbani Construction Works is "Your One Stop Shop For Construction Excellence".
        </p>
        <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
          — Eng. Muzinga James, CEO Nyumbani Construction Works
        </p>
      </div>
    </div>
    
  </div>
</div>

  </div>
  );
}

export default Project;
