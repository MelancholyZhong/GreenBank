import { Box, Button, Paper, Typography } from "@mui/material"
import React from "react"

export function genUniqueId() {
  const dateStr = Date.now().toString(36) // convert num to base 36 and stringify

  const randomStr = Math.random().toString(36).substring(2, 8) // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`
}

export default function RedeemForm(props) {
  const item = props.item

  const handlesubmit = async () => {
    try {
      await fetch("http://localhost:1234/profile/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: genUniqueId(),
          title: item.name,
          purchaseDate: "Sep 3, 2022",
          description: item.description,
          price: item.price,
        }),
      })
    } catch (err) {
      console.log(err)
    }
    props.onSubmit()
  }

  return (
    <Paper sx={{ padding: "4" }} elevation={3}>
      <Box padding={4}>
        <Typography variant="h3" align="center">
          Confirm your order
        </Typography>
        <Box
          m={3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="h5" align="center">
            {item.name}
          </Typography>
        </Box>

        <Box
          m={3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="h5" align="center">
            {item.price}
          </Typography>
        </Box>

        <Box
          m={3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="body1" align="center">
            {item.description}
          </Typography>
        </Box>

        <Box
          m={3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handlesubmit}
          >
            {props.buttonName}
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
