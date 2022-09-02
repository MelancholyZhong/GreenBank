import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions, Box } from "@mui/material"

export default function RedeemItem(props) {
  const item = props.item
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={item.imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ padding: "10px" }}>
          <Button variant="contained" color="primary">
            Redeem
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
