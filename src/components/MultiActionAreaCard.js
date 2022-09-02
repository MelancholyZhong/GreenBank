import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

export default function MultiActionAreaCard() {
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Our earth rewards us.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here at Green Bank, you can share what you did to save our planet,
            from public transportation rides to energy savings. With all the
            moves that you take to help protect our environment, you can get a
            point and will be saved in you bank account. You can use your
            account balance to redeeem gifts or use it to do more meaningful
            things.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ padding: "10px" }}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/user")
            }}
          >
            Get started
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
