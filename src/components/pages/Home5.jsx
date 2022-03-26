import { Paper, Box, Grid, Container, Typography } from '@mui/material'
import React from 'react'
import Content from '../Content'
import { worshipleaders } from '../consts/worshipleaders'
import '../../App.css'



export default function Home5() {
  return (
    <>
      <Content titlePage={"Worship Leaders"} />

      <Container>
        <Grid container spacing={6} justifyItems="center" marginTop={3}>

          {worshipleaders.map((leader) => (
            <Grid key={leader.id} item xs={4} sx={{ display: "flex", flexDirection: "column" }} >

              <Paper elevation={3}>
                <img src={leader.imgSrc} className="worshipLeaderImg"

                ></img>

                <Box marginTop={2} >
                  <Typography variant="h5" component={"h5"} textAlign="center" fontWeight={450}>
                    {leader.name}
                  </Typography>
                </Box>

                <Box>
                  <Typography className="about" variant="subtitle2" component={"h5"} m={4}  >
                     {leader.about}
                  </Typography>
                </Box>


              </Paper>

            </Grid>

          ))}

        </Grid>
      </Container>


    </>


  )
}



