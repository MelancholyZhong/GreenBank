import { Box, Grid, Paper, Rating } from "@mui/material"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import React from "react"

export default function MarketItem(props) {
  const item = props.item

  return (
    <Paper elevation={3}>
      <Box paddingX={5} paddingY={3}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {item.title}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Rating
              name="half-rating-read"
              defaultValue={3}
              precision={0.5}
              value={item.points}
              readOnly
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" align="right" marginTop={0.3}>
              {item.actionDate}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" color="text.secondary" align="left">
          {item.description}
        </Typography>
        <Box
          m={1}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button variant="contained" color="success" size="medium">
            Add my own
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
