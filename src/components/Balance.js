import * as React from "react"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Title from "./Title"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Balance() {
  const navigate = useNavigate()

  const [accountBalance, setAccountBalance] = useState(0)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:1234/profile/balance")
        const responseData = await response.json()
        setAccountBalance(responseData.balance)
      } catch (err) {
        console.log(err)
      }
    }
    sendRequest()
  }, [])

  return (
    <React.Fragment>
      <Title>Account Balance</Title>
      <Typography component="p" variant="h4">
        {accountBalance} points
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
