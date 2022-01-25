import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <Grid container spacing={2} xs={12}>
      <Grid item xs={4} spacing={2} >
        28 de agosto 2020
      </Grid>
      <Grid item xs={3} spacing={2} >
        <input
          id="fileSelector"
          type="file"
          name="file"
          style="display:none"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Button variant="contained" onClick={handlePictureClick}>
          Picture
        </Button>
      </Grid>
      <Grid item xs={3} spacing={2} >
        <Button variant="contained" color="secondary" onClick={handleSave}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};
