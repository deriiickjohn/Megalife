import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
export default function Footer() {
    return (


        <Box sx={{ height: 50, backgroundColor: "rgb(63,63,63)",mt:5}} >
            <Grid container spacing={2} justifyContent="center" alignItems="center" >
                <Grid item >

                    <Typography sx={{ color: "white" }}>
                        31 Fifth Avenue, Tauranga 3110  </Typography>
                </Grid>

            </Grid>
        </Box>


    )
}
