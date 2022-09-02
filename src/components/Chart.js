import * as React from "react"
import { useTheme } from "@mui/material/styles"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import Title from "./Title"

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

const data = [
  createData("Sun", 35.0),
  createData("Mon", 22.5),
  createData("Tue", 10),
  createData("Wed", 18),
  createData("Thu", 23.5),
  createData("Fri", 16.5),
  createData("Sat", 24),
]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>This week</Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
