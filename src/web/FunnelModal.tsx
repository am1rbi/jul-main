import React from 'react';
import { useNavigate } from 'react-router-dom';
import Funnel from './Funnel';
import BudgetPage from './BudgetPage';
import DueDatePage from './DueDatePage';
import SuccessPage from './SuccessPage';
import './funnel-modal.css';

interface FunnelModalProps {
  step: 'personal' | 'budget' | 'dueDate' | 'success';
}

const FunnelModal: React.FC<FunnelModalProps> = ({ step }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const renderStep = () => {
    switch (step) {
      case 'personal':
        return <Funnel />;
      case 'budget':
        return <BudgetPage />;
      case 'dueDate':
        return <DueDatePage />;
      case 'success':
        return <SuccessPage />;
      default:
        return null;
    }
  };

  return (
    <div className="funnel-modal-overlay">
      <div className="funnel-modal-content">
        <button className="funnel-modal-close" onClick={handleClose}>&times;</button>
        {renderStep()}
      </div>
    </div>
  );
};

export default FunnelModal;