import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Typography,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const NewEntryModal = ({ open, handleClose }) => {
  const [date, setDate] = useState("");
  const [sleepTime, setSleepTime] = useState("");
  const [wakeupTime, setWakeupTime] = useState("");
  const [totalSleepDuration, setTotalSleepDuration] = useState(0);

  const calculateTotalSleepDuration = () => {
    if (!sleepTime || !wakeupTime) {
      setTotalSleepDuration(0);
      console.log("Sleep or wakeup time is missing");
      return;
    }

    const sleepTimestamp = new Date(`1970-01-01T${sleepTime}:00Z`).getTime();
    let wakeupTimestamp = new Date(`1970-01-01T${wakeupTime}:00Z`).getTime();

    if (wakeupTimestamp < sleepTimestamp) {
      wakeupTimestamp += 24 * 60 * 60 * 1000;
    }

    const durationHours = (wakeupTimestamp - sleepTimestamp) / (1000 * 60 * 60);
    console.log("Sleep Timestamp:", sleepTimestamp);
    console.log("Wake-up Timestamp:", wakeupTimestamp);
    console.log("Duration Hours:", durationHours);
    setTotalSleepDuration(durationHours.toFixed(2));
  };

  useEffect(() => {
    calculateTotalSleepDuration();
  }, [wakeupTime, sleepTime]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSleepTimeChange = (event) => {
    const value = event.target.value;
    const paddedValue = value.length === 4 ? `0${value}` : value;
    console.log("Sleep Time:", paddedValue);
    setSleepTime(paddedValue);
  };

  const handleWakeupTimeChange = (event) => {
    const value = event.target.value;
    const paddedValue = value.length === 4 ? `0${value}` : value;
    console.log("Wakeup Time:", paddedValue);
    setWakeupTime(paddedValue);
  };

  const handleSubmit = () => {
    calculateTotalSleepDuration();
    handleClose();
  };

  const handleReset = () => {
    setDate("");
    setSleepTime("");
    setWakeupTime("");
    setTotalSleepDuration(0);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="new-entry-modal-title"
      aria-describedby="new-entry-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: 400,
          width: "95%",
        }}
      >
        <Typography variant="h5" id="new-entry-modal-title" gutterBottom>
          New Entry
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <TextField
              id="date"
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={date}
              onChange={handleDateChange}
              sx={{ marginBottom: "12px" }}
            />
            <TextField
              id="sleep-time"
              label="Sleep Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300,
              }}
              value={sleepTime}
              onChange={handleSleepTimeChange}
            />
            <TextField
              id="wakeup-time"
              label="Wake-up Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300,
              }}
              value={wakeupTime}
              onChange={handleWakeupTimeChange}
              sx={{ marginLeft: "12px" }}
            />
          </Box>
          <Box
            sx={{
              width: "263px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1">Total Sleep Duration</Typography>
            <CircularProgressbar
              value={Number(totalSleepDuration)}
              maxValue={24}
              text={`${totalSleepDuration} hours`}
              styles={{
                root: { width: 100, height: 100 },
                path: { stroke: "#4285F4" },
                text: { fill: "#4285F4", fontSize: "16px" },
              }}
            />
          </Box>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleReset}
            sx={{ ml: 1 }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{ ml: 1 }}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default NewEntryModal;
