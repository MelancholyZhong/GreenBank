import React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import DepositForm from "./DepositForm"
import { Button } from "@mui/material"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

export default function MakeDeposit(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        size="medium"
        onClick={handleOpen}
      >
        Add my own
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DepositForm
            onSubmit={handleClose}
            buttonName="Confirm"
            item={props.item}
          />
        </Box>
      </Modal>
    </div>
  )
}
