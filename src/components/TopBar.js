import React from "react"
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf"
import { useNavigate } from "react-router-dom"

export default function TopBar() {
  const navigate = useNavigate()
  return (
    <Box marginBottom={14}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={1} justifyContent="left">
            <Grid item xs={0.5}>
              <IconButton
                color="secondary"
                aria-label="go to front page"
                onClick={() => {
                  navigate("/")
                }}
              >
                <EnergySavingsLeafIcon fontSize="large" color="success" />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h5"
                textAlign="center"
                sx={{ padding: "5px" }}
              >
                Green Bank
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate("/explore")
                }}
              >
                Explore
              </Button>
            </Grid>
            <Grid item xs={1.5}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate("/redeem")
                }}
              >
                Redeem
              </Button>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={1.5}>
              <IconButton
                onClick={() => {
                  navigate("/user")
                }}
              >
                <AccountCircleIcon color="success" fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
