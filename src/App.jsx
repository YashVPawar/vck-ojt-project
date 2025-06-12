
import React from 'react';
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


function App() {
  return (
    <Router>
      
      <Header/>
      
      <main style={{ padding: '1rem' }}>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cources" element={<CourcesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </main>
       
      <ChatbotComponent/>
      <Footer/>
    </Router>
  );
}

export default App;
