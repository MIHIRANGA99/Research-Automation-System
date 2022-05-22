import { Button, ThemeProvider } from "@mui/material";
import { dashboard, deleteButton } from '../../themes/themes'
import { useLocation } from "react-router-dom";
import React from "react";

function navButton({ variant, buttonText, link }) {

  const loc = useLocation();

  return(
      <ThemeProvider theme={dashboard}>
          <Button href={link} color={loc.pathname === link? "secondary": "primary"} fullWidth sx={{paddingY: "17px", borderRadius: "9px", fontSize: "15px"}} variant={variant}>{buttonText}</Button>
      </ThemeProvider>
  );
}

export default navButton;
