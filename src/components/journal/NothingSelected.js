
import { Box, Grid, Paper, styled } from '@mui/material'
import React from 'react'

export const NothingSelected = () => {

    const Item = styled(Paper   )(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        width:'100%',
        color: theme.palette.text.secondary,
      }));
    return (
        <Grid container justify = "center">
            <Item>
                <p>
                    Select something
                    <br />
                    pr create an entry!
                </p>

            </Item>
             
        </Grid>
        
    )
}
