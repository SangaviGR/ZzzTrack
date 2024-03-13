import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NewEntryModal from "./Modal";

const NewUserLogin = () => {
  const [isNewEntryModalOpen, setIsNewEntryModalOpen] = useState(false);

  const handleOpen = () => {
    setIsNewEntryModalOpen(true);
  };

  const handleClose = () => {
    setIsNewEntryModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h2" gutterBottom>Daily Sleep Tracker</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        startIcon={<AddIcon />}
      >
        New Entry
      </Button>
      <NewEntryModal open={isNewEntryModalOpen} handleClose={handleClose} />
    </div>
  );
};

export default NewUserLogin;
