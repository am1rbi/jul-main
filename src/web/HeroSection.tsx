// src/web/components/HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  openFunnelModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openFunnelModal }) => {
  return (
    <section className="hero-section">
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
    </section>
  );
};

export default HeroSection;