import * as React from "react"
import Link from "@mui/material/Link"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Title from "./Title"
import { useNavigate } from "react-router-dom"

// Generate Order Data
function createData(id, actionDate, title, points) {
  return { id, actionDate, title, points }
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", 31.5),
  createData(1, "16 Mar, 2019", "Paul McCartney", 17),
  createData(2, "16 Mar, 2019", "Tom Scholz", 11),
  createData(3, "16 Mar, 2019", "Michael Jackson", 25),
  createData(4, "15 Mar, 2019", "Bruce Springsteen", 21.5),
]

export default function Orders() {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.actionDate}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell align="right">{`$${row.points}`}</TableCell>
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
