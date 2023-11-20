import { useState } from 'react';
import './CreateGloatButton.css';
import CreateGloatModal from './CreateGloatModal';

const NewGloatButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGloat = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <button className="new-gloat-button" onClick={handleCreateGloat}>
        Create New Gloat
      </button>
      {isModalOpen && <CreateGloatModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default NewGloatButton;
