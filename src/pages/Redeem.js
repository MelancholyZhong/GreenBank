import React from "react"
import { Typography, Grid } from "@mui/material"
import Stack from "@mui/material/Stack"
import RedeemItem from "../components/RedeemItem"

export default function Redeem() {
  const items = [
    {
      id: 30,
      name: "Flight",
      imgSrc:
        "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description: "A good flight for free!",
    },
    {
      id: 31,
      name: "Aircraft",
      imgSrc:
        "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description: "A good plane for free!",
    },
  ]
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Redeem
        </Typography>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Stack spacing={3}>
          {items.map((item) => (
            <RedeemItem key={item.id} item={item} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}
