import { TextField } from '@mui/material';
import React from 'react';

export  const BuildTextFiled=({name,value,label,type,InputChange,margin,autoComplete,id}) => {

  return (
    <TextField
    margin={(margin)?margin:'normal'} 
    requierd
    fullWidth
    autoFocus

    id={id}
    label={label}
    type={type}
    name={name}
    value={value}
    autoComplete={(autoComplete)?autoComplete:'off'}
    onChange={InputChange}
  />
  );
}
