// src/web/components/Header.tsx
import React from 'react';

interface HeaderProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header>
      <div className="logo">Jul.</div>
      <nav>
        <a href="#features" onClick={(e) => scrollToSection(e, "features")}>
          פתרונות
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          אודות
        </a>
      </nav>
    </header>
  );
};

export default Header;