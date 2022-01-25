import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link} from 'react-router-dom';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
export const menuItems = (
  <div>
    <ListItem to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    {/* clientes*/}
    <ListItem to="/user" component={Link}>
      <ListItemIcon>
        <PeopleOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    {/* clientes*/}
    <ListItem to="/notes" component={Link}>
      <ListItemIcon>
        <ShoppingBagOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Notas" />
    </ListItem>
  </div>
);

