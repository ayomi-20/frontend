import './Navbar.css'; 
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import RegisterDropdown from './signupform';
import LoginForm from './loginform';
import ResetRequestForm from './ResetRequestForm'; 
import VerifyResetCodeForm from './VerifyResetCodeForm';
import PasswordResetForm from './PasswordResetForm';
 // Ensure correct path
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Navbar() {
  // state declarations
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [showVerifyForm, setShowVerifyForm] = useState(false);             // for VerifyResetCodeForm
  const [userContact, setUserContact] = useState('');                      // shared contact across steps
  const [showPasswordResetForm, setShowPasswordResetForm] = useState(false);
  
  // defining handlers for showing and hiding modals
  const handleShow = () => setShowRegister(true);
  const handleClose = () => setShowRegister(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowResetForm = () => {
    setShowLogin(false); // Close login popup first
    setShowResetForm(true); // Then show reset form
  };
  const handleCloseResetForm = () => setShowResetForm(false);

  const handleShowVerifyForm = () => {
  setShowResetForm(false);  // close Reset request popup first
  setShowVerifyForm(true);  // then show verify form
};

  const handleCloseVerifyForm = () => setShowVerifyForm(false);


  const handleShowPasswordResetForm = () => {
  setShowVerifyForm(false); // Close verification popup first
  setShowPasswordResetForm(true); // Then open password reset form
};

const handleClosePasswordResetForm = () => {
  setShowPasswordResetForm(false);
};

  return (
    <>
      <div className="black-navbar">
        {/* Logo */}
        <img src="/logo1.png" alt="Logo" className="navbar-logo" />

        {/* Orange nav bar */}
        <div className="nav-shape-wrapper">
          <div className="triangle-right"></div> 
          <nav className="orange-rectangle">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'custom-nav-link active-link' : 'custom-nav-link'}>HOME</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'custom-nav-link active-link' : 'custom-nav-link'}>ABOUT</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'custom-nav-link active-link' : 'custom-nav-link'}>SERVICES</NavLink>
            <NavLink to="/project" className={({ isActive }) => isActive ? 'custom-nav-link active-link' : 'custom-nav-link'}>PROJECTS</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'custom-nav-link active-link' : 'custom-nav-link'}>CONTACT US</NavLink>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="phone-wrapper">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <span className="phone-number">0750644161</span>
        </div>

        <div className="email-wrapper">
          <img src="/env.png" alt="Email" className="custom-envelope-icon" />
          <p className='email-text'>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nyumbaniconstructionworks@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              nyumbaniconstructionworks@gmail.com
            </a>
          </p>
        </div>

        {/* Dropdown for Register/Login */}
        <div className="register-wrapper">  
          <Dropdown>
            <Dropdown.Toggle as="div"  className="register-but">
              REGISTER
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={handleShow}>SignUp</Dropdown.Item>
                <Dropdown.Item onClick={handleShowLogin}>Login</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <RegisterDropdown show={showRegister} handleClose={handleClose} openLoginForm={handleShowLogin}  // <-- pass this handler here
/>
      <LoginForm show={showLogin} handleClose={handleCloseLogin} onForgotPassword={handleShowResetForm} />
      <ResetRequestForm show={showResetForm} onClose={handleCloseResetForm} onNext={(contact) => {
        setUserContact(contact);        // Save contact for the next form
        handleShowVerifyForm();         // Show next step form
        }}/>
      <VerifyResetCodeForm show={showVerifyForm} onClose={handleCloseVerifyForm} contact={userContact} onNext={handleShowPasswordResetForm}/>
      <PasswordResetForm show={showPasswordResetForm} handleClose={handleClosePasswordResetForm} contact={userContact} openLogin={handleShowLogin}/>
    </>
  );
}
