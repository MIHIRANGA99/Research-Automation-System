import { Card, CardActions, Typography } from "@mui/material";
import React from "react";
import DelButton from "../Buttons/DelButton";
import UpdateButton from "../Buttons/UpdateButton";

function UserCard({name, faculty, idNo, role}) {

  const styles = {display: 'flex', flex: 1, textAlign: 'center', alignItems: 'center',  justifyContent: 'center', fontSize: '16px'};

  return (
    <Card sx={{color: "white", display: 'flex', paddingY: '20px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.137)'}}>
      <Typography sx={styles}>{name}</Typography>
      <Typography sx={styles}>{idNo}</Typography>
      <Typography sx={styles}>{faculty}</Typography>
      <Typography sx={styles}>{role}</Typography>
      <CardActions sx={{...styles, marginX: '12px'}}>
        <UpdateButton onClick={() => alert('update function')} buttonText='Update' variant='contained' />
        <DelButton onClick={() => alert('delete function')} buttonText='Delete' variant='contained' />
      </CardActions>
    </Card>
  );
}
export default UserCard;
