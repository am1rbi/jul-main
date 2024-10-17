import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnelContext } from './FunnelContext';
import { FaCheckCircle } from 'react-icons/fa';
import './funnel.css';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    firstName, lastName, phoneNumber, lowerBound, upperBound, 
    dueDate, specificDate, uploadedImages 
  } = useFunnelContext();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(amount);
  };

  const getDueDateText = (dueDate: string, specificDate: string) => {
    switch (dueDate) {
      case 'now': return 'מיידי';
      case 'week': return 'תוך שבוע';
      case 'month': return 'תוך חודש';
      case 'specific': return specificDate;
      default: return 'לא צוין';
    }
  };

  return (
    <div className="funnel-page success-page">
      <div className="success-content">
        <FaCheckCircle className="success-icon" />
        <h1>תודה רבה!</h1>
        <p>קיבלנו את הפרטים שלך ונחזור אליך בהקדם.</p>
        <div className="summary">
          <h2>סיכום הפרטים:</h2>
          <div className="summary-item">
            <span className="summary-label">שם מלא:</span>
            <span className="summary-value">{`${firstName} ${lastName}`}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">טלפון:</span>
            <span className="summary-value">{phoneNumber}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">תקציב:</span>
            <span className="summary-value">{`${formatCurrency(lowerBound)} - ${formatCurrency(upperBound)}`}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">תאריך יעד:</span>
            <span className="summary-value">{getDueDateText(dueDate, specificDate)}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">מספר תמונות שהועלו:</span>
            <span className="summary-value">{uploadedImages.length}</span>
          </div>
        </div>
        <button className="home-button" onClick={() => navigate('/')}>חזרה לדף הבית</button>
      </div>
    </div>
  );
};

export default SuccessPage;