import {
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import api from "../../axios/PanelMemberAPI";
import {useNavigate} from "react-router-dom";

function createData(groupID, groupLeader, groupMember1, groupMember2, groupMember3) {
    return { groupID, groupLeader, groupMember1, groupMember2, groupMember3 };
}

const rows = [
    createData('group1', 'saman', 'nuwan', 'chamal', 'nimal'),
    createData('group2', 'saman', 'nuwan', 'chamal', 'nimal'),
    createData('group3', 'saman', 'nuwan', 'chamal', 'nimal'),
    createData('group4', 'saman', 'nuwan', 'chamal', 'nimal'),
    createData('group5', 'saman', 'nuwan', 'chamal', 'nimal'),
];

export default function PresentationGroupList(){
    const navigate = useNavigate();
return (
    <>
        <br/>
        <br/>
        <Container component={Paper} sx={{backgroundColor: "#C4A484"}}>
            <br/>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 600, fontSize: 18}}>Group ID</TableCell>
                            <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Topic</TableCell>
                            <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Marks</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.description}
                            >
                                <TableCell >{row.groupID}</TableCell>
                                <TableCell align="center">{row.groupLeader}</TableCell>
                                <TableCell align="center">{row.groupMember1}</TableCell>
                                <TableCell align="center">{row.groupMember2}</TableCell>
                                <TableCell align="center">{row.groupMember3}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="small"
                                        sx={{mt: 3, mb: 2}}
                                        onClick={() => navigate(`/staff/panel/evaluate/presentation/${row.groupID}`)}
                                    >
                                        Evaluate
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
        </Container>
    </>
)
}