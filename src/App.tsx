import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import ContactUs from './pages/contactUs';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer'; // 
import '@fortawesome/fontawesome-free/css/all.min.css';


const App: React.FC = () => {
  return (
    <div className="app-container"> 
      <CustomNavbar />
      <div className="content-wrapper"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default App;