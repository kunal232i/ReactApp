import { useState } from "react";
import "../style/modal.styles.css";

const Modal = ({ setShow, addNote }) => {
  const [newNote, setNewNote] = useState({
    title: "",
    desc: "",
    color: "#a4e3a3",
    date: new Date().toDateString(),
  });

  const onChangeFunc = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };
  const onClickFunc = () => {
    console.log(newNote);
    addNote(newNote);
    setShow(false);
  };
  return (
    <div className="modal">
      <h1>Create A Note</h1>
      <div className="title-modal">
        <input
          onChange={(e) => onChangeFunc(e)}
          name="title"
          type="text"
          placeholder="Title of your note"
        />
      </div>
      <div className="desc-modal">
        <textarea
          onChange={(e) => onChangeFunc(e)}
          name="desc"
          id=""
          cols="30"
          rows="10"
          placeholder="Desciption of your Note"
        ></textarea>
      </div>
      <div className="meta">
        <input
          onChange={(e) => onChangeFunc(e)}
          type="color"
          name="color"
          id=""
        />
        <button onClick={() => setShow(false)} className="cancel">
          Cancel
        </button>
        <button onClick={() => onClickFunc()} className="create">
          Create
        </button>
      </div>
    </div>
  );
};
export default Modal;
