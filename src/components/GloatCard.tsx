import "./GloatCard.css";
import { stringToHslColor } from "../utils/getColorCode";

interface GloatCardProps {
  username: string;
  date: string;
  blurb: string;
  onDelete: () => void;
  onView?: () => void;
}

const GloatCard = ({
  username,
  date,
  blurb,
  onDelete,
  onView,
}: GloatCardProps) => {
  const cardStyle = {
    backgroundColor: stringToHslColor(blurb, 50, 75),
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onClick={onView ? onView : () => {}}
    >
      <div className="delete-button" onClick={onDelete}>
        &times;
      </div>
      <div className="username">{username}</div>
      <div className="date">{date}</div>
      <div className="blurb">{blurb}</div>
    </div>
  );
};

export default GloatCard;
