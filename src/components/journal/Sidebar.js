import React from "react";
import { useDispatch } from "react-redux";
import { JournalEntries } from "./JournalEntries";
import { startNewNote } from "../../actions/notes";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
export const Sidebar = () => {
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  return (
    <Item >
      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <Button variant="outlined">
            <AddIcon/>
            New entry
        </Button>
      </div>
      <JournalEntries />
   </Item>
    
  );
};
