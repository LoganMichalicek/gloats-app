// Home.js
import { useState } from "react";
import "./Home.css";
import sampleData from "../samples/gloats-data.json";
import GloatCard from "../components/GloatCard";
import CreateGloatButton from "../components/CreateGloatButton";
import CreateGloatModal from "../components/CreateGloatModal";
import ViewGloatModal from "../components/ViewGloatModal";
import { v4 as uuidv4 } from "uuid";

export interface IGloat {
  author: string;
  creationDate: string;
  text: string;
  id: string;
}

const Home = () => {
  const [gloats, setGloats] = useState<IGloat[]>(sampleData);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedGloat, setSelectedGloat] = useState<IGloat | null>(null);

  const handleCreateGloat = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleDeleteGloat = (id: string) => {
    setGloats(gloats.filter((gloat) => gloat.id !== id));
  };

  const addGloat = (name: string, text: string) => {
    const newGloat = {
      author: name,
      creationDate: new Date().toLocaleDateString("en-US"),
      text: text,
      id: uuidv4(),
    };
    setGloats([newGloat, ...gloats]);
  };

  const onSelectGloat = (id: string) => {
    setSelectedGloat(gloats.find((gloat) => gloat.id === id) || null);
  };

  return (
    <div className="home">
      <h1>Latest Gloats</h1>
      <CreateGloatButton onClick={handleCreateGloat} />
      <div className="card-container">
        {gloats.map((card, idx) => {
          return (
            <GloatCard
              key={idx}
              username={card.author}
              date={card.creationDate}
              blurb={card.text}
              onDelete={() => handleDeleteGloat(card.id)}
              onView={() => onSelectGloat(card.id)}
            />
          );
        })}
      </div>
      {isCreateModalOpen && (
        <CreateGloatModal addGloat={addGloat} onClose={handleCloseModal} />
      )}
      {selectedGloat && (
        <ViewGloatModal
          gloat={selectedGloat}
          onClose={() => setSelectedGloat(null)}
        />
      )}
    </div>
  );
};

export default Home;
