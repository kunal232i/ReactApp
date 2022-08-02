import '../style/card.styles.css';
const Card = ({ title, desc, date, color, deleteNote, index }) => {
  return (
    <div style={{ backgroundColor: color }} className="card">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="meta-card">
        <div className="date">{date}</div>
        <div className="delete" onClick={() => deleteNote(index)}>
          delete
        </div>
      </div>
    </div>
  );
};
export default Card;