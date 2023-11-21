// ViewGloatModal.tsx
import React from "react";
import "./ViewGloatModal.css";
import { IGloat } from "../containers/Home";

interface ViewGloatModalProps {
  gloat: IGloat;
  onClose: () => void;
}

const ViewGloatModal: React.FC<ViewGloatModalProps> = ({ gloat, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>View Gloat</h2>
        <div className="gloat-content">
          <p>
            <strong>Name:</strong> {gloat.author}
          </p>
          <p>
            <strong>Date:</strong> {gloat.creationDate}
          </p>
          <p>
            <strong>Text:</strong> {gloat.text}
          </p>
          {/* You can add more content here, like reaction buttons and comment section */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ViewGloatModal;
