import React, { useState } from "react";
import { Button } from "@mui/material";
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
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        New Entry
      </Button>
      <NewEntryModal open={isNewEntryModalOpen} handleClose={handleClose} />
    </div>
  );
};

export default NewUserLogin;
