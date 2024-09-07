import React from "react";
import { useContext } from "react";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";
import Control from "../components/Control";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
      <Control />
    </div>
  );
};

export default NotesPage;
