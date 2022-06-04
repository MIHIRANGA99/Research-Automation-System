import {
  Button,
  Card,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./Card.css";
import React, { useEffect, useState } from "react";
import RejectButton from "../Buttons/RejectButton";
import AcceptButton from "../Buttons/AcceptButton";
import { dialog } from "../../themes/themes";
import {
  acceptRequest,
  rejectRequest,
} from "../../controllers/requestsController";

function RequestCard({ objID, groupId, members, researchTopic, popup }) {
  const styles = {
    display: "flex",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  };

  const styles1 = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  };


  const [acceptPop, setAcceptPop] = useState(false);
  const [rejectPop, setRejectPop] = useState(false);

  useEffect(() => {
    setAcceptPop(popup);
  }, [popup]);

  const acceptARequest = () => {
    acceptRequest(objID)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };

  const rejectARequest = () => {
    rejectRequest(objID)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };

  return (
    <>
      <Card
        sx={{
          color: "white",
          display: "flex",
          paddingY: "20px",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.137)",
        }}
      >
        <Typography sx={styles}>{groupId}</Typography>
        <Typography sx={styles1}>{members.map((mem) => <Typography sx ={styles1}>{mem}</Typography>)}</Typography>
        <Typography sx={styles}>{researchTopic}</Typography>
        <CardActions sx={{ ...styles, marginX: "12px" }}>
          <AcceptButton
            onClick={() => setAcceptPop(true)}
            buttonText="Accept Request"
            variant="contained"
          />
          <RejectButton
            onClick={() => setRejectPop(true)}
            buttonText="Reject Request"
            variant="contained"
          />
        </CardActions>
      </Card>
      {/* Popup Dialog */}
      <ThemeProvider theme={dialog}>
        <Dialog
          open={acceptPop}
          onClose={() => setAcceptPop(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
          <DialogContent>
            <Typography>
              to accept the request from <b>{groupId}</b> to assign as their
              Supervisor?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setAcceptPop(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => acceptARequest()}
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={rejectPop}
          onClose={() => setRejectPop(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
          <DialogContent>
            <Typography>
              This will remove <b>{groupId}</b> from the system permanently.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setRejectPop(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => rejectARequest()}
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
export default RequestCard;
