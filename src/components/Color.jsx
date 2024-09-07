import React from "react";
import { db } from "../appwrite/databases";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const Color = ({ color }) => {
  const { selectedNote, notes, setNotes } = useContext(NoteContext);

  const changeColor = () => {
    try {
      const currentNoteIndex = notes.findIndex(
        (note) => note.$id === selectedNote.$id
      );

      const updateNote = {
        ...notes[currentNoteIndex],
        colors: JSON.stringify(color),
      };

      const newNotes = [...notes];
      newNotes[currentNoteIndex] = updateNote;
      setNotes(newNotes);

      db.notes.update(selectedNote.$id, {
        colors: JSON.stringify(color),
      });
    } catch (error) {
      alert("You must select a note before changing colors");
    }
  };

  return (
    <div
      className="color"
      onClick={changeColor}
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
};

export default Color;
