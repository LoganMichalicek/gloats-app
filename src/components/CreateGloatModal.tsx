import React from 'react';
import './CreateGloatModal.css';

interface CreateGloatModalProps {
  onClose: () => void;
}

const CreateGloatModal = ({ onClose }: CreateGloatModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>Create New Gloat</h2>
        {/* Add your form or content for creating a new gloat */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CreateGloatModal;
