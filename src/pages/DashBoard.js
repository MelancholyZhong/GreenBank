import React from "react"
import { Grid, Container, Paper } from "@mui/material"
import Chart from "../components/Chart"
import Orders from "../components/Orders"
import Balance from "../components/Balance"

export default function DashBoard() {
  const depositTitle = {
    title: "Recent deposits",
    col1: "Date",
    col2: "Title",
    col3: "Points",
  }

  const orderTitle = {
    title: "Recent orders",
    col1: "Date",
    col2: "Product Name",
    col3: "Price",
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={7} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Balance />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders type="deposit" titles={depositTitle} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders type="order" titles={orderTitle} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
