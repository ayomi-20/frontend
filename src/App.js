import React from 'react';
import Profile from './components/user_profile/profile';
import Navbar from "./components/Navbar";
import Footer from './components/footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage';
import About from './components/pages/about';
import Contact from './components/pages/contact';
// import Project from './components/pages/project';
import Services from './components/pages/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/pages/project';




function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
