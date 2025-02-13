import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./customStyles.css";
import "./MatrixRain.js"; // Import Matrix Rain animation script

function App() {
  return (
    <Router>
      {/* Header component with navigation */}
      <Header />
      
      {/* Main content container */}
      <main className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      {/* Footer component */}
      <Footer />
    </Router>
  );
}

export default App;
