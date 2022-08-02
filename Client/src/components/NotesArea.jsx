import Card from "./Card";
import "../style/notesArea.styles.css";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

const NotesArea = ({ searchNotes }) => {
  const [show, setShow] = useState(false);

  const [allNotes, setAllNotes] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  console.log("something");
  const addNote = (note) => {
    if (localStorage.getItem("notes")) {
      const val = JSON.parse(localStorage.getItem("notes"));
      val.push(note);
      setAllNotes(val);
      localStorage.setItem("notes", JSON.stringify(val));
    } else {
      localStorage.setItem("notes", JSON.stringify(new Array(note)));
      setAllNotes(new Array(note));
    }
    setAllNotes([...allNotes, note]);
    enqueueSnackbar("New Note Added!", { variant: "success" });
  };

  const deleteNote = (index) => {
    const val = JSON.parse(localStorage.getItem("notes"));
    const newAllNotes = val.filter((note, i) => i !== index);
    setAllNotes(newAllNotes);
    localStorage.setItem("notes", JSON.stringify(newAllNotes));
    enqueueSnackbar("Note deleted successfully!", { variant: "success" });
  };

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setAllNotes(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setAllNotes(
        JSON.parse(localStorage.getItem("notes")).filter((note) =>
          note.title.includes(searchNotes)
        )
      );
    }
  }, [searchNotes]);

  return (
    <div className="notes-area">
      {allNotes.map((currNote, i) => (
        <Card
          title={currNote.title}
          desc={currNote.desc}
          date={currNote.date}
          color={currNote.color}
          deleteNote={deleteNote}
          index={i}
        />
      ))}

      {show && <Modal addNote={addNote} setShow={setShow} />}
      <div onClick={() => setShow(!show)} className="add-icon">
        +
      </div>
    </div>
  );
};
export default NotesArea;
