import React from "react";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
export const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12} sm={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={9}>
        <List sx={{  bgcolor: "background.paper" }}>
          {active ? <NoteScreen /> : <NothingSelected />}
        </List>
      </Grid>
    </Grid>
  );
};
