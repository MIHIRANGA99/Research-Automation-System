import {
    Avatar, Box, Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField, Typography
} from "@mui/material";
import CoPresentIcon from '@mui/icons-material/CoPresent';
import {useState} from "react";
import api from "../../axios/PanelMemberAPI";
import {useParams} from "react-router-dom";

function createData(description, mark) {
    return { description, mark };
}

const rows = [
    createData('Frozen yoghurt', 10),
    createData('Ice cream sandwich', 20),
    createData('Eclair', 14),
    createData('Cupcake', 23),
    createData('Gingerbread', 20),
];

export default function EvaluatePresentation(){
    const { id } = useParams();
    const [marks, setMarks] = useState([]);

    const updateState = (desc, value) => {
        const newState = marks.map(obj => {
            if (obj.description.includes(desc)) {
                return {...obj, mark: value};
            }
            return obj;
        });

        setMarks(newState);
    };

    return (
        <>
            <br/>
            <br/>
            <Container component={Paper} sx={{backgroundColor: "#C4A484"}}>
                <br/>
                <Box  sx={{display:"flex", justifyContent:"center",}}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main', width: 60, height: 60}}>
                        <CoPresentIcon/>
                    </Avatar>
                </Box>
                <hr/>
                <Typography variant={"h4"} sx={{display:"flex", justifyContent:"center",}}>Marking Scheme</Typography>
                <hr/>
                <br/>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: 600, fontSize: 18}}>Description</TableCell>
                                <TableCell align="right" sx={{fontWeight: 600, fontSize: 18}}>Marks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.description}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.description}</TableCell>
                                    <TableCell align="right">{row.mark}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                <hr/>
                <Typography variant={"h4"} sx={{display:"flex", justifyContent:"center",}}>Presentation Marks</Typography>
                <hr/>
                <Typography variant={"h6"} sx={{display:"flex", justifyContent:"center",}}>Group ID :- {id}</Typography>
                <br/>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: 600, fontSize: 18}}>Description</TableCell>
                                <TableCell align="right" sx={{fontWeight: 600, fontSize: 18}}>Marks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.description}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.description}</TableCell>
                                    <TableCell align="right">
                                        <TextField
                                            type="number"
                                            label="mark"
                                            defaultValue={0}
                                            InputProps={{ inputProps: {
                                                min: 0,
                                                max: row.mark,
                                                // onKeyDown: (event) => {
                                                //         event.preventDefault();
                                                //     },
                                                } }}
                                            onBlur={() => {
                                                if(marks.length > 0){
                                                    const flag = marks.every((data) => {
                                                        if (data.description.includes(row.description)) {
                                                            return false;
                                                        }
                                                        return true
                                                    })

                                                    if(flag === false){
                                                        updateState(row.description, event.target.value)
                                                    }
                                                    else {
                                                        setMarks([...marks, {
                                                            description: row.description,
                                                            mark: event.target.value
                                                        }])
                                                    }
                                                }
                                                else {
                                                    setMarks([...marks, {
                                                        description: row.description,
                                                        mark: event.target.value
                                                    }])
                                                }

                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={() => {
                        api.PanelMember.evaluatePresentation({groupID: "20112456", marksDetails: marks})
                        //console.log(marks)
                    }}
                >
                    Submit
                </Button>
            </Container>
            <br/>
            <br/>
        </>
    )
}