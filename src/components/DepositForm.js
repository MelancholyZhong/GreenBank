import {
  Box,
  Button,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material"
import React, { useState } from "react"

export function genUniqueId() {
  const dateStr = Date.now().toString(36) // convert num to base 36 and stringify

  const randomStr = Math.random().toString(36).substring(2, 8) // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`
}

export default function DepositForm(props) {
  const item = props.item

  const [titleValue, setTitleValue] = useState(item.title)
  const [dateValue, setDateValue] = useState("")
  const [descriptionValue, setDescriptionValue] = useState(item.description)
  const pointsValue = item.points

  const handlesubmit = () => {
    const newTodo = {
      id: genUniqueId(),
      title: titleValue,
      actionDate: dateValue,
      description: descriptionValue,
      points: pointsValue,
    }
    props.onSubmit()
  }

  return (
    <Paper sx={{ padding: "4" }} elevation={3}>
      <Box padding={4}>
        <Typography variant="h3" align="center">
          Make a deposit
        </Typography>
        <Box
          m={3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <TextField
            required
            id="title-input"
            label="Title"
            variant="outlined"
            sx={{ width: "35%" }}
            onChange={(e) => {
              setTitleValue(e.target.value)
            }}
            defaultValue={titleValue}
          />
          <TextField
            id="duedate-input"
            label="Action Date"
            variant="outlined"
            sx={{ width: "35%" }}
            onChange={(e) => {
              setDateValue(e.target.value)
            }}
          />
        </Box>

        <Box
          m={3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <TextField
            id="description-input"
            label="Description"
            multiline
            rows={4}
            onChange={(e) => {
              setDescriptionValue(e.target.value)
            }}
            sx={{ width: "80%" }}
            defaultValue={descriptionValue}
          />
        </Box>

        <Box
          m={3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <div>
            <Typography variant="h4" component="legend" m={1} align="center">
              Points
            </Typography>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Rating
                id="importance-input"
                name="points"
                value={pointsValue}
                precision={0.5}
                size="large"
                readOnly
              />
            </Box>
          </div>
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
