import {Avatar, Box, Container, Paper, TextField, Typography} from "@mui/material";
import {Topic} from "@mui/icons-material";
import {useParams} from "react-router-dom";

export default function EvaluateTopic(){
    const { id } = useParams();
    return (
        <>
            <br/>
            <br/>
            <Container component={Paper} sx={{backgroundColor: "#C4A484"}}>
                <br/>
                <Box  sx={{display:"flex", justifyContent:"center",}}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main', width: 60, height: 60}}>
                        <Topic/>
                    </Avatar>
                    <hr/>
                    <Typography variant={"h4"}>Topics Evaluation</Typography>
                    <hr/>
                    <br/>
                    <Typography variant={"h6"}>{id}</Typography>
                    <br/>
                    <TextField
                        type="number"
                        label="mark"
                        defaultValue={0}
                    />
                </Box>
                <br/>
            </Container>
        </>
    )
}