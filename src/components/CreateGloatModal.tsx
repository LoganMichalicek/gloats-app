import { useState } from "react";
import "./CreateGloatModal.css";

interface CreateGloatModalProps {
  addGloat: (name: string, text: string) => void;
  onClose: () => void;
}

const CreateGloatModal = ({ addGloat, onClose }: CreateGloatModalProps) => {
  const [username, setUsername] = useState("");
  const [blurb, setBlurb] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCreateGloat = () => {
    if (!username || !blurb) {
      setError("Please enter a username and achievement.");
      return;
    }

    addGloat(username, blurb);
    setUsername("");
    setBlurb("");
    setError(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Create New Gloat</h2>
        <form>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={error && !username ? "error-input" : ""}
          />

          <textarea
            id="blurb"
            name="blurb"
            rows={4}
            placeholder="Enter your gloat..."
            value={blurb}
            onChange={(e) => setBlurb(e.target.value)}
            className={error && !blurb ? "error-input" : ""}
          ></textarea>

          {error && (
            <p className="error-message">
              {error} {/* Display error message */}
            </p>
          )}

          <div className="form-buttons">
            <button
              type="button"
              className="create-gloat"
              onClick={handleCreateGloat}
            >
              Create Gloat
            </button>
            <button type="button" className="cancel" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGloatModal;
