import { Typography, Grid } from "@mui/material"
import Stack from "@mui/material/Stack"
import React from "react"
import MarketItem from "../components/MarketItem"

export default function Explore() {
  const items = [
    {
      id: 123,
      title: "whuhdw",
      points: 3.5,
      actionDate: "9-8-5",
      description: "addes aisn shhs iiso.",
    },
    {
      id: 345,
      title: "wcbbiwc",
      points: 2.5,
      actionDate: "9-7-5",
      description: "addes ahixduoewohwhs iiso.",
    },
    {
      id: 456,
      title: "帮老奶奶过马路",
      points: 5,
      actionDate: "2022-7-9",
      description: ".帮老奶奶过马路",
    },
    {
      id: 4567,
      title: "帮老奶奶过马路",
      points: 5,
      actionDate: "2022-7-9",
      description: ".帮老奶奶过马路",
    },
    {
      id: 678,
      title: "帮老奶奶过马路",
      points: 5,
      actionDate: "2022-7-9",
      description: ".帮老奶奶过马路",
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
          Explore
        </Typography>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Stack spacing={3}>
          {items.map((item) => (
            <MarketItem key={item.id} item={item} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}
