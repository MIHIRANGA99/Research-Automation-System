import {
  Button,
  Card,
  CardActions,
  Typography,
} from "@mui/material";
import "./Card.css";
import React, { useEffect, useState } from "react";
import EvaluateButton from "../Buttons/EvaluateButton";

function RequestCard({ objID, groupId, members, docName }) {
  const styles = {
    display: "flex",
    flex: 13,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  };

  const styles1 = {
    display: "flex",
    flex: 11,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  };

  return (
    <>
      <Card
        sx={{
          color: "white",
          display: "flex",
          paddingY: "10px",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.137)",
        }}
      >
        <Typography sx={styles}>{groupId}</Typography>
        <Typography sx={styles1}>{members}</Typography>
        <Typography sx={styles}>{docName}</Typography>
        <CardActions sx={{ ...styles, marginX: "12px" }}>
          <EvaluateButton
            buttonText="Evaluate"
            variant="contained"
          />
        </CardActions>
      </Card>
    </>
  );
}
export default RequestCard;
