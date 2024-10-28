import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import FunnelModal, { FunnelModalProps } from "./FunnelModal";

const LandingPage: React.FC = () => {
  const [isFunnelModalOpen, setIsFunnelModalOpen] = useState(false);
  const navigate = useNavigate();

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openFunnelModal = () => {
    setIsFunnelModalOpen(true);
  };

  const closeFunnelModal = () => {
    setIsFunnelModalOpen(false);
  };

  return (
    <div className="landing-page noto-sans-hebrew" dir="rtl">
      <header>
        <div className="logo">Jul.</div>
        <nav>
          <a href="#features">תכונות</a>
          <a href="#about">אודות</a>
        </nav>
      </header>

      <main className="hero-section">
        <div className="content-section">
          <div className="text-content">
            <h1 className="main-title">יש דרך חדשה לרכוש תכשיטים.</h1>
            <p>
              בכמה קליקים בלבד, והצוות שלנו כבר יתחיל לחפש עבורכם את התכשיט
              המושלם, המותאם בדיוק לצרכים ולדרישות האישיות שלכם. כך תחסכו זמן
              יקר, כסף ומאמץ - והכל ללא עלות וללא התחייבות.
            </p>
            <div className="cta-buttons">
              <button className="continue-button" onClick={openFunnelModal}>
                לחצו כאן כדי להתחיל
              </button>
            </div>
          </div>
        </div>
      </main>

      {isFunnelModalOpen && (
        <FunnelModal step="personal" onClose={closeFunnelModal} />
      )}

      <footer>
        <div className="footer-content">
          <p>&copy; 2023 Gold & Gem</p>
          <p>רחוב הזהב 123, תל אביב</p>
          <p>טלפון: 03-1234567</p>
          <p>info@goldandgem.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
