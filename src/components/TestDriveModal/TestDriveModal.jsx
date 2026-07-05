// src/components/TestDriveModal/TestDriveModal.jsx
import './TestDriveModal.css';

const TestDriveModal = ({ isOpen, onClose, vehicleName }) => {
  // If the modal is NOT open, return null (render absolutely nothing)
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* e.stopPropagation() prevents clicking inside the white box from closing the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h3>Test Drive the {vehicleName}</h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Enter your details below and a dealer will contact you shortly.
        </p>

        <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="date" required />
          <button type="submit" className="submit-btn">Request Date</button>
        </form>
        
      </div>
    </div>
  );
};

export default TestDriveModal;