import React from 'react';
import '../styles/SuccessModal.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, orderNumber }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="success-icon">
          <span className="checkmark"></span>
        </div>
        <h2>Thank You!</h2>
        {orderNumber && (
          <div className="order-number">
            <p>Order # <strong>{orderNumber}</strong></p>
          </div>
        )}
        <p>Your cleaning request has been received successfully.</p>
        <p>We'll get back to you within 24 hours to confirm your appointment.</p>
        <p className="warning-text">Please wait for us to contact you. Submitting multiple requests may result in delays in processing your booking.</p>
        <button className="btn-primary" onClick={onClose}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal; 