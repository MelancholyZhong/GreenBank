import * as React from "react"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Title from "./Title"
import { useNavigate } from "react-router-dom"

export default function Deposits() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        349.5 points
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on Septermber 03, 2022
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          onClick={() => {
            navigate("/redeem")
          }}
        >
          Go to redeem
        </Link>
      </div>
    </React.Fragment>
  )
}
