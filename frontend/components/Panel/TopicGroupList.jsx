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
    TextField, ThemeProvider, Typography
} from "@mui/material";
import api from "../../axios/PanelMemberAPI";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {red} from "@mui/material/colors";
import {addButton, dashboard} from "../../themes/themes";

function createData(groupID, groupLeader, groupMember1, groupMember2, groupMember3, status) {
    return { groupID, groupLeader, groupMember1, groupMember2, groupMember3, status };
}

const rows = [
    createData('group1', 'saman', 'nuwan', 'chamal', 'nimal', 'new'),
    createData('group2', 'saman', 'nuwan', 'chamal', 'nimal', 'new'),
    createData('group3', 'saman', 'nuwan', 'chamal', 'nimal', 'rejected'),
    createData('group4', 'saman', 'nuwan', 'chamal', 'nimal', 'accepted'),
    createData('group5', 'saman', 'nuwan', 'chamal', 'nimal', 'new'),
];

export default function TopicGroupList(){
    const navigate = useNavigate();

    function IsEvaluated(status){
        const [isEvaluated, setIsEvaluated] = useState();
        if(status.toUpperCase() == "NEW"){
            setIsEvaluated(false);
        }else {
            setIsEvaluated(true);
        }
        return isEvaluated;
    }

    return (
        <ThemeProvider theme={addButton}>
        <>
            <br/>
            <br/>
            <Container component={Paper} sx={{backgroundColor: "#C4A484"}}>
                <br/>
                <hr/>
                <Typography variant={"h4"} sx={{display:"flex", justifyContent:"center",}}>Topics Evaluation Group List</Typography>
                <hr/>
                <br/>
                <TableContainer component={Paper}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: 600, fontSize: 18}}>Group ID</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Leader</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Member</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Member</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Member</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Topic Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.description}
                                    hover={true}
                                >
                                    <TableCell >{(row.groupID).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupLeader).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupMember1).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupMember2).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupMember3).toUpperCase()}</TableCell>
                                    {(row.status).toUpperCase() == "REJECTED" ?
                                        <TableCell align="center" sx={{backgroundColor: "red"}}>{(row.status).toUpperCase()}</TableCell>
                                        :
                                        (row.status).toUpperCase() == "ACCEPTED" ?
                                        <TableCell align="center" sx={{backgroundColor: "green"}}>{(row.status).toUpperCase()}</TableCell>
                                            :
                                        <TableCell align="center" sx={{backgroundColor: "lightblue"}}>{(row.status).toUpperCase()}</TableCell>
                                    }
                                    <TableCell align="center">
                                    {(row.status).toUpperCase() == "NEW" ?
                                            <Button
                                                variant="contained"
                                                size="small"
                                                onClick={() => navigate(`/staff/panel/evaluate/topic/${row.groupID}`)}
                                            >
                                                Evaluate Topic
                                            </Button>
                                        :
                                        <></>
                                    }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
            </Container>
        </>
        </ThemeProvider>
    )
}