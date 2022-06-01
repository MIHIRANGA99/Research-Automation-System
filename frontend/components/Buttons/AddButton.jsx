import { Button, ThemeProvider } from "@mui/material";
import { addButton } from "../../themes/themes";
import React from "react";

const AddButton = ({ onClick, variant, buttonText }) => {
  return (
    <ThemeProvider theme={addButton}>
      <Button
        onClick={onClick}
        color="secondary"
        sx={{ paddingY: "5px", borderRadius: "9px", fontSize: "12px" }}
        variant={variant}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

export default AddButton;
