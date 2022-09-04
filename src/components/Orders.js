import * as React from "react"
import Link from "@mui/material/Link"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Title from "./Title"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

// Generate Order Data

export default function Orders(props) {
  const [recentDeposits, setRecentDeposits] = useState()
  const [recentOrders, setRecentOrders] = useState()
  const tableTitle = props.titles
  const navigate = useNavigate()

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const depositsResponse = await fetch(
          "http://localhost:1234/profile/deposit"
        )
        const depositsResponseData = await depositsResponse.json()
        setRecentDeposits(depositsResponseData.deposits)
        const ordersResponse = await fetch(
          "http://localhost:1234/profile/order"
        )
        const ordersResponseData = await ordersResponse.json()
        setRecentOrders(ordersResponseData.orders)
      } catch (err) {
        console.log(err)
      }
    }
    sendRequest()
  }, [])

  return (
    <React.Fragment>
      <Title>{tableTitle.title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{tableTitle.col1}</TableCell>
            <TableCell>{tableTitle.col2}</TableCell>
            <TableCell align="right">{tableTitle.col3}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.type === "deposit"
            ? recentDeposits &&
              recentDeposits.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.actionDate}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell align="right">{row.points}</TableCell>
                </TableRow>
              ))
            : recentOrders &&
              recentOrders.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.purchaseDate}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="#"
        onClick={() => {
          navigate("/explore")
        }}
        sx={{ mt: 3 }}
      >
        Make a deposit.
      </Link>
    </React.Fragment>
  )
}
