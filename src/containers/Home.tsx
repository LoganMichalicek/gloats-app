// Home.js
import { useState } from "react";
import "./Home.css";
import sampleData from "../samples/gloats-data.json";
import Card from "../components/Card";
import CreateGloatButton from "../components/CreateGloatButton";
import CreateGloatModal from "../components/CreateGloatModal";
import { v4 as uuidv4 } from "uuid";

interface Gloat {
  author: string;
  creationDate: string;
  text: string;
  id: string;
}

const Home = () => {
  const [gloats, setGloats] = useState<Gloat[]>(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGloat = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function handleDeleteGloat(id: string) {
    setGloats(gloats.filter((gloat) => gloat.id !== id));
  }

  function addGloat(name: string, text: string) {
    const newGloat = {
      author: name,
      creationDate: new Date().toLocaleDateString("en-US"),
      text: text,
      id: uuidv4(),
    };
    setGloats([newGloat, ...gloats]);
  }

  return (
    <div className="home">
      <h1>Latest Gloats</h1>
      <CreateGloatButton onClick={handleCreateGloat} />
      <div className="card-container">
        {gloats.map((card, idx) => {
          return (
            <Card
              key={idx}
              username={card.author}
              date={card.creationDate}
              blurb={card.text}
              onDelete={() => handleDeleteGloat(card.id)}
            />
          );
        })}
      </div>
      {isModalOpen && (
        <CreateGloatModal addGloat={addGloat} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Home;
