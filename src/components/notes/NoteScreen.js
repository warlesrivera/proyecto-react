import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesAppBar } from "./NotesAppBar";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../../actions/notes";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
export const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <Grid container spacing={2} xs={12}  >
      <Grid item xs={12}>
        <NotesAppBar />
      </Grid>
      <Grid item xs={12} spacing={2} style={{maxHeight: "400px", overflow: 'auto'}}>
        <Box component="form" sx={{ m: 2 }}>
          <TextField 
            placeholder="Some awesome title"
            autoComplete="off"
            id="title"
            fullWidth
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
            label="Some awesome title"
            variant="standard"
          />
        </Box>
        <Box component="form" sx={{ m: 2 }}>
          <TextareaAutosize
            placeholder="What happened today"
            minRows={7}
            name="body"
            style={{ width: "100%", border: "none", "font-family": "Arial" }}
            value={body}
            onChange={handleInputChange}
          />
        </Box>
        <Box component="form" sx={{ m: 2 }}>
          {note.url && (
            <Box
              component="img"
              sx={{
                height: 500,
                width: 900,
                maxHeight: { xs: 233, md: 500 },
                maxWidth: { xs: 350, md: 500 },
              }}
              alt={note.title}
              src={note.url}
            />
          )}
        </Box>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Grid>

    //

    // </div>
  );
};
