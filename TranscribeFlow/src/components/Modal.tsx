import { ChangeEvent, SetStateAction, useState } from "react";
import "../style/modal.styles.css";

type Note = {
  title: string;
  desc: string;
  color: string;
  date: string;
}

type ModalProps = {
  setShow: React.Dispatch<SetStateAction<boolean>>;
  addNote: (note: Note) => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { setShow, addNote } = props;
  const [newNote, setNewNote] = useState<Note>({
    title: "",
    desc: "",
    color: "#a4e3a3",
    date: new Date().toDateString(),
  });

  const onChangeFunc = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
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
          onChange={onChangeFunc}
          name="title"
          type="text"
          placeholder="Title of your note"
        />
      </div>
      <div className="desc-modal">
        <textarea
          onChange={onChangeFunc}
          name="desc"
          id=""
          cols={30}
          rows={10}
          placeholder="Desciption of your Note"
        ></textarea>
      </div>
      <div className="meta">
        <input
          onChange={onChangeFunc}
          type="color"
          name="color"
          id=""
        />
        <button onClick={() => setShow(false)} className="cancel">
          Cancel
        </button>
        <button onClick={onClickFunc} className="create">
          Create
        </button>
      </div>
    </div>
  );
};
export default Modal;
