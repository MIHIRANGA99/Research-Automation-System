import {
    Avatar, Box,
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
import {LoadingButton} from "@mui/lab";
import {AddModerator} from "@mui/icons-material";
import CoPresentIcon from '@mui/icons-material/CoPresent';

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
    return (
        <>
            <br/>
            <br/>
            <Container component={Paper} >
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
                                            label="mark"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Submit
                </LoadingButton>
            </Container>
            <br/>
            <br/>
        </>
    )
}