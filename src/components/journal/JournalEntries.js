import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";


export const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <Container style={{padding:1}} style={{height:'400px',maxHeight: "400px", overflow: 'auto'}}>
      {notes.map((note) => (
        <JournalEntry key={note.id} {...note} />
      ))}
    </Container>
  );
};
