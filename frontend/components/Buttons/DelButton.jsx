import { Button, ThemeProvider } from '@mui/material';
import { deleteButton } from '../../themes/themes';
import React from 'react'

function DelButton({buttonText, variant, onClick}) {
  return(
    <ThemeProvider theme={deleteButton}>
        <Button onClick={onClick} color='secondary' fullWidth sx={{paddingY: "5px", borderRadius: "9px", fontSize: "15px"}} variant={variant}>{buttonText}</Button>
    </ThemeProvider>
);
}

export default DelButton