import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  Paper,
  Grid,
} from "@mui/material"
import RedeemConfim from "./RedeemConfirm"

export default function RedeemItem(props) {
  const item = props.item
  return (
    <Paper elevation={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={item.imgSrc}
            alt="green iguana"
          />
          <CardContent>
            <Grid container>
              <Grid item xs={5}>
                <Typography gutterBottom variant="h4" component="div">
                  {item.name}
                </Typography>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={3}>
                <Typography variant="h5" textAlign="center">
                  {item.price} points
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box sx={{ padding: "10px" }}>
            <RedeemConfim item={item} />
          </Box>
        </CardActions>
      </Card>
    </Paper>
  )
}
