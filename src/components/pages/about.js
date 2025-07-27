import React from "react";
import '../css/about.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function About() {
    return (
        <>
         <div
              className="header-background d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                backgroundImage: "url('/assets/back.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
              }}
            >
              <header>
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>ABOUT US</h1>
            </header>

              <div className="aboutus-box">         
            <p>
                We as Nyumbani Construction Works have been operating as a registered business in Uganda since 12th June 2018.
                Based in Najjera Town, Wakiso District, we have strived to establish ourselves as a forward-thinking construction company,
                having been licensed to operate by Kampala City Council Authority in 2018. This is evident by the reputation we have earned 
                from both clients and competitors in terms of quality, durability, and reliability of our end products, as well as our drive 
                to satisfy customers. We provide innovative construction material solutions tailored to both residential and commercial needs.
            </p>
            </div>
             </div>

<div className="info-container">
    <div className="info-box">
        <h2>
            <i className="bi bi-bullseye" style={{ color: '#FF4500', marginRight: '10px' }}></i>
            Mission
        </h2>
        <p>To deliver sustainable construction solutions that improve lives.</p>
    </div>

    <div className="info-box">
        <h2>
            <i className="bi bi-eye-fill" style={{ color: '#FF4500', marginRight: '10px' }}></i>
            Vision
        </h2>
        <p>To become the region’s most trusted name in construction and paving solutions.</p>
    </div>
</div>

<div className="corevalues">
    <h2>
        <img src="/assets/core values logo.png" alt="Core Values Icon"
            style={{ width: '50px', height: '50px', marginRight: '10px', verticalAlign: 'middle' }} />
        CORE VALUES
    </h2>

    <div className="corevalues-row">
        <div className="corevalue-box">
            <h2>
                <img src="/assets/professionalism.png" alt="Professionalism Icon"
                    style={{ width: '50px', height: '50px', marginRight: '10px', verticalAlign: 'middle' }} />
                Professionalism
            </h2>
            <p>
                We believe in doing business in a professional and orderly manner.
                We strive to maintain an organized and efficient work environment,
                while encouraging a positive and supportive atmosphere.
            </p>
        </div>

        <div className="corevalue-box">
            <h2>
                <img src="/assets/integrity.png" alt="Integrity Icon"
                    style={{ width: '80px', height: '80px', marginRight: '10px', verticalAlign: 'middle' }} />
                Integrity
            </h2>
            <p>
                We believe in honesty and trust, working to build trust with our clients in each and every interaction.
            </p>
        </div>

        <div className="corevalue-box">
            <h2>
                <img src="/assets/exceptional service logo.png" alt="Exceptional Service Icon"
                    style={{ width: '50px', height: '50px', marginRight: '10px', verticalAlign: 'middle' }} />
                Exceptional Service
            </h2>
            <p>
                We believe in providing exceptional service to our clients, delivering the best quality of products tailored to their tastes.
            </p>
        </div>
    </div>
</div>


            <div className="whychooseus">
                <h2>WHY CHOSE US:</h2>
                <p>
                    Exceptional service to our clients, delivering the best quality of products tailored to their tastes.
                    Transparent communication with our clients, open and honest dialogue at every stage of our work together. 
                    Integrity in every transaction. We are committed to doing what's right, not just what's easy.
                    Long-term Relationship building. We are focused on not only earning but also keeping your trust over time.
                    Reliable and consistent service built on a foundation of mutual respect and accountability. 
                    By fostering trust and acting with integrity, we aim to build lasting partnerships that go beyond business.
                </p>
             </div>
            
        </>
    );
}

export default About;
