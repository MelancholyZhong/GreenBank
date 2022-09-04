import { Typography, Grid } from "@mui/material"
import Stack from "@mui/material/Stack"
import React from "react"
import MarketItem from "../components/MarketItem"
import { useEffect, useState } from "react"

export default function Explore() {
  const [exploreItems, setExploreItems] = useState()

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:1234/explore")
        const responseData = await response.json()
        setExploreItems(responseData.exploreItems)
      } catch (err) {
        console.log(err)
      }
    }
    sendRequest()
  }, [])

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
          {exploreItems &&
            exploreItems.map((item) => (
              <MarketItem key={item.id} item={item} />
            ))}
        </Stack>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}
