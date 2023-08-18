import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../style/notesArea.styles.css";
import Modal from "./Modal";
import { useSnackbar } from "notistack";

type NotesProp = {
  searchNotes: string;
}

type Note = {
  title: string;
  desc: string;
  date: string;
  color: string;
}

const NotesArea: React.FC<NotesProp> = ({ searchNotes }) => {
  const [show, setShow] = useState<boolean>(false);
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const addNote = (note: Note) => {
    if (localStorage.getItem("notes")) {
      const currentNotes = JSON.parse(localStorage.getItem("notes")!);
      const newNotes = [...currentNotes, note];
      setAllNotes(newNotes);
      localStorage.setItem("notes", JSON.stringify(newNotes));
    } else {
      localStorage.setItem("notes", JSON.stringify([note]));
      setAllNotes([note]);
    }
    enqueueSnackbar("New Note Added!", { variant: "success" });
  };

  const deleteNote = (index: number) => {
    const currentNotes = JSON.parse(localStorage.getItem("notes")!);
    const newAllNotes = currentNotes.filter((i: number) => i !== index);
    setAllNotes(newAllNotes);
    localStorage.setItem("notes", JSON.stringify(newAllNotes));
    enqueueSnackbar("Note deleted successfully!", { variant: "success" });
  };

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      const currentNotes = JSON.parse(localStorage.getItem("notes")!);
      setAllNotes(currentNotes);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      const currentNotes = JSON.parse(localStorage.getItem("notes")!);
      const filteredNotes = currentNotes.filter((note: Note) =>
        note.title.includes(searchNotes)
      );
      setAllNotes(filteredNotes);
    }
  }, [searchNotes]);

  return (
    <div className="notes-area">
      {allNotes.map((currNote, i) => (
        <Card
          key={i}
          title={currNote.title}
          desc={currNote.desc}
          date={currNote.date}
          color={currNote.color}
          deleteNote={() => deleteNote(i)}
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
