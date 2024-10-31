import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import FunnelModal from "./FunnelModal";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";

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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <a href="#features" onClick={(e) => scrollToSection(e, "features")}>
            תכונות
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
            אודות
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="content-section">
            <div className="text-content">
              <h1 className="main-title">יש דרך חדשה לרכוש תכשיטים.</h1>
              <p>
                בין אם אתם יודעים בדיוק איזה תכשיט אתם רוצים או פשוט זקוקים
                לעזרה בבחירה – אנחנו כאן בשבילכם. בכמה קליקים והצוות שלנו ימצא
                לכם את התכשיט המושלם, מותאם לצרכים שלכם. תחסכו זמן, כסף ומאמץ –
                והכל בחינם וללא התחייבות.
              </p>
              <div className="cta-buttons">
                <button className="continue-button" onClick={openFunnelModal}>
                  לחצו כאן כדי להתחיל
                </button>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <AboutSection />
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
