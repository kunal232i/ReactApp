import "../style/card.styles.css";

type CardProps = {
  title: string;
  desc: string;
  date: string;
  color: string;
  deleteNote: (index: number) => void;
  index: number; 
}

const Card: React.FC<CardProps> = (props) => {
  const { title, desc, date, color, deleteNote, index } = props;
  return (
    <div style={{ backgroundColor: color }} className="card">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="meta-card">
        <div className="date">{date}</div>
        <div className="delete" onClick={() => deleteNote(index)}>
          🗑️"Delete"
        </div>
      </div>
    </div>
  );
};
export default Card;
