
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import CourcesPage from './pages/CourcesPage';
import NotFoundPage from './pages/NotFoundPage';
// Header
import Header from './components/Header/Headers';
//Footer
import Footer from "./components/Footer/Footers";
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Yash Vaibhav Pawar"
          studentPhotoUrl="/Images/pic1.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <div className="app-container">
        <Header />
        <main style={{ padding: '1rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/apply" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cources" element={<CourcesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <ChatbotComponent />
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
