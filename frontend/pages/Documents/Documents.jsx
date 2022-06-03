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
import { storage } from "../../Firebase/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import AddButton from "../../components/Buttons/AddButton";
import { dialog } from "../../themes/themes";
import { addDoc } from "../../controllers/documentUploadController";

const Documents = () => {
  const [popup, setPopup] = useState(false);

  const [url, setURL] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  const [file, setFile] = useState({});
  const [type, setType] = useState("");
  const [docName, setDocName] = useState("");

  const uploadDoc = () => {
    if (!!file.size && type !== "" && docName !== "") {
      console.log(file.name.replace(/\s/g, ""));
      const storageRef = ref(storage, `files/${file.name.replace(/\s/g, "")}`);
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
                type: type,
                name: docName,
                url: downloadURL,
              };

              addDoc(info)
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
      console.log("ba", file, type, docName);
    }
  };

  return (
    <>
      <div>
        <AddButton
          buttonText="Upload new Document"
          onClick={() => setPopup(true)}
          variant="contained"
        />
      </div>
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
            {"Create Submission Type"}
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
              id="type"
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              variant="outlined"
            />
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
    </>
  );
};

export default Documents;
