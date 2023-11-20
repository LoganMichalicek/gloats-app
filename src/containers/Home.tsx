// Home.js
import { useState } from 'react';
import Card from '../components/Card'; // Adjust the path based on your folder structure
import './Home.css'; // Import the CSS file for Home
import sampleData from '../samples/gloats-data.json'; // Import the sample data
import NewGloatButton from '../components/CreateGloatButton';

interface Gloat {
  author: string;
  creationDate: string;
  text: string;
}

const Home = () => {
  const [gloats, setGloats] = useState<Gloat[]>(sampleData);

  function addGloat() {
    const newGloat = {
      author: 'New Gloater',
      creationDate: new Date().toISOString(),
      text: 'This is a new gloat!'
    };
    setGloats([newGloat, ...gloats]);
  }

  return (
    <div className="home">
      <h1>Latest Gloats</h1>
      <NewGloatButton onClick={addGloat} />
      <div className="card-container">
        {gloats.map((card, idx) => {
          return (<Card
            key={idx}
            username={card.author}
            date={card.creationDate}
            blurb={card.text}
          />)
        })}
      </div>
    </div>
  );
};

export default Home;
