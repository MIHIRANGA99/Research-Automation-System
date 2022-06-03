import { Button, ThemeProvider } from "@mui/material";
import { dashboard } from "../../themes/themes";
import React from "react";

function AcceptButton({ buttonText, variant, onClick }) {
  return (
    <ThemeProvider theme={dashboard}>
      <Button
        onClick={onClick}
        color="secondary"
        fullWidth
        sx={{ paddingY: "5px", borderRadius: "9px", fontSize: "15px" }}
        variant={variant}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
}

export default AcceptButton;
