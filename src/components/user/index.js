import React, {  useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from 'react-redux';
import { useColumn } from "../../hooks/useColumns";


const Customers = () => {
  const [columns] = useColumn();
 
  // consulta hooks
  const { users } = useSelector( state => state.users );
  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <Grid container spacing={3}>
        {/* header de la grid  */}
        <Grid item xs={10}>
          <h3 sx={{ m: 0 }}>Users</h3>
        </Grid>
        
        <Grid item xs={12}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Customers;
