import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
      activeNote(id, {
        date,
        title,
        body,
        url,
      })
    );
  };

  return (
    <>
      <ListItem alignItems="flex-start" style={{padding:1}}>
        <ListItemAvatar onClick={handleEntryClick}>
          <Avatar alt="Travis Howard" src={url} />
        </ListItemAvatar>
        <ListItemText spacing={{m:0}}
          primary={title}
          secondary={
            <React.Fragment >
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {title}
              </Typography>
              {
                (body!=undefined)
                ?  `${body.substring(0,20)}...`:' '
                
              }
              
              <Typography
             
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {noteDate.format("YYYY-MM-DD")}
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
