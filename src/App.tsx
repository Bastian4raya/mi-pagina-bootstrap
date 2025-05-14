import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import ContactUs from './pages/contactUs';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer'; // Asegúrate de importar el Footer
import '@fortawesome/fontawesome-free/css/all.min.css';


const App: React.FC = () => {
  return (
    <div className="app-container"> {/* Añade un contenedor */}
      <CustomNavbar />
      <div className="content-wrapper"> {/* Contenedor para el contenido principal */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer style={{ marginTop: 'auto' }} /> {/* Aplica marginTop: auto al Footer */}
    </div>
  );
};

export default App;