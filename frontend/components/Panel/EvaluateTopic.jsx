import {Avatar, Box, Button, Container, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {Topic} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import api from "../../axios/PanelMemberAPI";
import {toast} from "react-toastify";

export default function EvaluateTopic(){
    const { id } = useParams();
    const [remark, setRemark] = useState();
    const navigate = useNavigate();

    return (
        <>
            <br/>
            <br/>
            <Container component={Paper} sx={{backgroundColor: "#C4A484"}}>
                <br/>
                <Paper>
                    <br/>
                    <Box  sx={{display:"flex", justifyContent:"center",}}>
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main', width: 60, height: 60}}>
                            <Topic/>
                        </Avatar>
                    </Box>
                        <hr/>
                        <Typography variant={"h4"} sx={{display:"flex", justifyContent:"center",}}>Topics Evaluation</Typography>
                        <hr/>
                        <br/>
                        <Typography variant={"h6"} sx={{display:"flex", justifyContent:"center",}}>Group ID :- {id}</Typography>
                        <br/>
                    <hr/>
                    <Typography variant={"h6"} sx={{display:"flex", justifyContent:"center",}}>Topic</Typography>
                    <hr/>
                    <Typography variant={"h6"} sx={{display:"flex", justifyContent:"center",}}>Defect prediction: Some Machine Learning techniques can be used for predictions.</Typography>
                    <br/>
                    <br/>
                    <Box  sx={{display:"flex", justifyContent:"center",}}>
                        <TextareaAutosize
                            label="Description"
                            defaultValue={"Description"}
                            onChange={() => setRemark(event.target.value)}
                        />
                    </Box>
                    <Box  sx={{display:"flex", justifyContent:"center",}}>
                        <Button
                            type="submit"
                            variant="contained"
                            color={"success"}
                            sx={{mt: 3, mb: 2}}
                            onClick={() => {
                                api.PanelMember.evaluateTopic({groupID: id, remark: remark, status: "ACCEPTED"})
                                    .then(() => {
                                        toast.success('Successfully Evaluated');
                                        navigate('/staff/panel/topic/groupList')
                                    })
                                    .catch((error) => console.error(error))
                            }}
                        >
                            Accept
                        </Button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Button
                            type="submit"
                            variant="contained"
                            color={"error"}
                            sx={{mt: 3, mb: 2}}
                            onClick={() => {
                                api.PanelMember.evaluateTopic({groupID: id, remark: remark, status: "REJECTED"})
                                    .then(() => {
                                        toast.success('Successfully Evaluated');
                                        navigate('/staff/panel/topic/groupList')
                                    })
                                    .catch((error) => console.error(error))
                            }}
                        >
                            Reject
                        </Button>
                    </Box>
                    <br/>
                </Paper>
                <br/>
            </Container>
        </>
    )
}