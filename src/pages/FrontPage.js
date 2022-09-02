import React from "react"
import Button from "@mui/material/Button"
import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import MultiActionAreaCard from "../components/MultiActionAreaCard"
import Calendar from "../components/Calendar"

export default function FrontPage() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={6}>
          <Calendar />
        </Grid>
      </Grid>
    </Container>
  )
}
