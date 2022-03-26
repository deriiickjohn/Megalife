import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Content(props) {
    return (
        <Box sx={{ minHeight: "100%", width: "auto" }}>

            <Typography variant='h1' component='h1' sx={{ display: "flex", marginTop: "3%", justifyContent: "center", fontFamily: "Sora" }}>
                {props.titlePage}
            </Typography>

        </Box>


    )
}
