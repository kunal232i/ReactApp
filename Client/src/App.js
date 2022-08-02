import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearechBar";
// import NotesArea from "../components/NotesArea";

function App() {
  const [searchNotes, setSearchNotes] = useState("");
  return (
    <div className="App">
      <Nav />
      <SearchBar setSearchNotes={setSearchNotes} />
      <NotesArea searchNotes={searchNotes} />
    </div>
  );
}

export default App;
