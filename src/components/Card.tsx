// import React from 'react';
import './Card.css'; // Replace with the correct path to your CSS file

interface CardProps {
  username: string;
  date: string;
  blurb: string;
  onDelete: () => void;
}

const Card = ({username, date, blurb, onDelete}: CardProps) => {
  return (
    <div className="card">
      <div className="delete-button" onClick={onDelete}>
        &times;
      </div>
      <div className="username">{username}</div>
      <div className="date">{date}</div>
      <div className="blurb">{blurb}</div>
    </div>
  );
};

export default Card;
