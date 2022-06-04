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
import {useEffect, useState} from "react";
import {addButton} from "../../themes/themes";

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
    const [groupList, setGroupList] = useState([]);

    useEffect(() => {
        api.PanelMember.getGrouplistById("0099")
            .then((data) => {
                setGroupList([])
                data.forEach((data1) => {
                    api.PanelMember.getGroupDetailsById(data1)
                        .then((group) => {
                            setGroupList(groupList => groupList.concat(group))
                        })
                })
            })
    }, [])

    function IsEvaluated(id){
        const [isEvaluated, setIsEvaluated] = useState();
        api.PanelMember.getPresenEvaluDetailsById(id)
            .then((data) => {
                if(data == ""){
                    setIsEvaluated(false)
                }else {
                    setIsEvaluated(true)
                }
            })
            .catch((error) => console.error(error))
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
                <Typography variant={"h4"} sx={{display:"flex", justifyContent:"center",}}>Presentation Evaluation Group List</Typography>
                <hr/>
                <br/>
                <TableContainer component={Paper}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: 600, fontSize: 18}}>Group Name</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Leader</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Member</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Member</TableCell>
                                <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>Group Member</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row._id}
                                >
                                    <TableCell >{(row.groupID).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupLeader).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupMember1).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupMember2).toUpperCase()}</TableCell>
                                    <TableCell align="center">{(row.groupMember3).toUpperCase()}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="small"
                                            disabled={IsEvaluated(row.groupID)}
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
        </ThemeProvider>
    )
}