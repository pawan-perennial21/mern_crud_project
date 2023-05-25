import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";

export default function Home() {
    const rows = [
        {
            id: "1",
            userName: "pawanpatidar21",
            job: "fullstack developer",
            email: "pawanpatidar21@gmail.com",
            mobile: "9617926392",
        },
        {
            id: "2",
            userName: "pawanpatidar21",
            job: "fullstack developer",
            email: "pawanpatidar21@gmail.com",
            mobile: "9617926392",
        },
    ];
    const columns = ["Id", "Username", "Email", "Job", "Number"];
    return (
        <Box>
            <Box alignItems='right'>
                <Button>Add Items</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    aria-label='simple table'
                >
                    <TableHead>
                        <TableRow>
                            {columns.map((el) => (
                                <TableCell align='right'>
                                    {el}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component='th' scope='row'>
                                    {row.id}
                                </TableCell>
                                <TableCell
                                    component='th'
                                    scope='row'
                                    align='left'
                                >
                                    {row.userName}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.job}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.email}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.mobile}
                                </TableCell>
                                <TableCell align='right'>
                                    <Button
                                        variant='contained'
                                        size='small'
                                    >
                                        View
                                    </Button>
                                    <Button
                                        variant='contained'
                                        size='small'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant='contained'
                                        size='small'
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
