import * as React from "react"
import dayjs from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker"

export default function Calendar() {
  const [date, setDate] = React.useState(dayjs())

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
  )
}
