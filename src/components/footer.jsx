import "./footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section">
          <h3 className="footer-title">Nyumbani </h3>
          <h3 className="footer-title">Construction</h3>
          <div className="content">
          <p>Building with integrity and professionalism.</p>
          <p>@nyumbaniconstructionworks</p>
          <div className="footer-icons">
            <a
                href="https://wa.me/256750644161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://twitter.com/nyumbaniconstructionworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.tiktok.com/@nyumbaniconstructionwork?_t=ZM-8y8bOoAFZ16&_r=1"
                target="_blank"
                rel="noopener noreferrer"
               >
                <i className="fab fa-tiktok"></i>
                </a>
              <a
                href="https://www.instagram.com/nyumbaniconstructionworks?igsh=a2JlaDNubG94YXBz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
          </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3 className="footer-title">Get In Touch</h3>
          <div className="contact-info">
          <p>Phone: +256750644161</p>
          <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nyumbaniconstructionworks@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                    nyumbaniconstructionworks@gmail.com
                    </a></p>

          <p>Address: Najjera-kungu, Wakiso District, Kampala-Uganda.</p>
        </div>
        </div>

        {/* Right Section */}
        <div className="footer-section quick-links-section">
          <h3 className="footer-title">Quick links</h3>
          <ul className="footer-links">
            <li><NavLink to="/" className="footer-link">
                <i className="fas fa-home"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                <i className="fas fa-users"></i> About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="footer-link">
                <i className="fas fa-handshake"></i> Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="footer-link">
                <i className="fas fa-project-diagram"></i> Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                <i className="fas fa-envelope"></i> Contact us
              </NavLink></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Nyumbani Construction Works. All rights reserved</p>
      </div>
    </footer>
  );
}