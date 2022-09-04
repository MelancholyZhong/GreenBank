import React from "react"
import { Typography, Grid } from "@mui/material"
import Stack from "@mui/material/Stack"
import RedeemItem from "../components/RedeemItem"
import { useEffect, useState } from "react"

export default function Redeem() {
  const [redeemItems, setRedeemItems] = useState()

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:1234/redeem")
        const responseData = await response.json()
        setRedeemItems(responseData.redeemItems)
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
          Redeem
        </Typography>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Stack spacing={3}>
          {redeemItems &&
            redeemItems.map((item) => <RedeemItem key={item.id} item={item} />)}
        </Stack>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}
