import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { addButton } from "../../themes/themes";
import React from 'react'

const AllocateButton = ({buttonText, variant, onClick, disabled}) => {
    return (
        <ThemeProvider theme={addButton}>
          <Button
            onClick={onClick}
            color="secondary"
            sx={{ paddingY: "5px", borderRadius: "99px", fontSize: "12px" }}
            variant={variant}
            disabled = {disabled}
          >
            {buttonText}
          </Button>
        </ThemeProvider>
      );
}

export default AllocateButton