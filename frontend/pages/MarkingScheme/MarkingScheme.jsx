import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    ThemeProvider,
  } from "@mui/material";
import React, { useState } from "react";
import AddButton from "../../components/Buttons/AddButton";
import { storage } from "../../Firebase/firebaseConfig";
import { dialog } from "../../themes/themes";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addMarkingScheme } from "../../controllers/markingSchemeController";
import './MarkingScheme.css'

const MarkingScheme = () => {
  const [popup, setPopup] = useState(false);

  const [url, setURL] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  const [file, setFile] = useState({});
  const [docName, setDocName] = useState("");

  const uploadDoc = () => {
    if (!!file.size && docName !== "") {
      console.log(file.name.replace(/\s/g, ""));
      const storageRef = ref(storage, `markingSchemes/${file.name.replace(/\s/g, "")}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setIsProgress(true);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              setURL(downloadURL);

              // save in mongoDB database
              const info = {
                name: docName,
                url: downloadURL,
              };

              addMarkingScheme(info)
                .then((res) => {
                  console.log(res.data);
                  setIsProgress(false);
                  setPopup(false);
                })
                .catch((e) => {
                  console.log(e.message);
                });
            })
            .catch((e) => {
              console.log(e.message);
            });
        }
      );
    } else {
      console.log(file, docName);
    }
  };

  return (
    <div className="markingSchemeMain">
      <AddButton
        buttonText="Upload new Document"
        onClick={() => setPopup(true)}
        variant="contained"
      />
      {/*Upload Popup*/}
      <ThemeProvider theme={dialog}>
        <Dialog
          className="uploadPopup"
          open={popup}
          onClose={() => setPopup(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle className="dialogTitle" id="alert-dialog-title">
            {"Upload Marking Scheme"}
          </DialogTitle>
          <DialogContent className="popUp">
            <Button fullWidth variant="contained" component="label">
              {!!file.size ? file.name : "select file here"}
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                hidden
              />
            </Button>
            <TextField
              fullWidth
              id="name"
              label="Name"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              disabled={isProgress}
              sx={{ width: "100%" }}
              variant="contained"
              onClick={() => uploadDoc()}
              autoFocus
            >
              {isProgress ? <CircularProgress /> : "Upload and Save"}
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default MarkingScheme;
