// import React from 'react';
import './Card.css'; // Replace with the correct path to your CSS file

interface CardProps {
  username: string;
  date: string;
  blurb: string;
}

const Card = ({username, date, blurb}: CardProps) => {
  return (
    <div className="card">
      <div className="username">{username}</div>
      <div className="date">{date}</div>
      <div className="blurb">{blurb}</div>
    </div>
  );
};

export default Card;
