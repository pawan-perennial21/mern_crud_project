import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/ContextProvider";
import { baseURL } from "../../core";

export default function Home() {
    const navigate = useNavigate();
      const { users,setUsers, deleteUser}: any =
        useContext(UserContext);
    const columns = ["Id", "Username", "Email", "Job", "Number"];
    
        const handledeleteUser = async (deleteId: number) => {
            console.log(deleteId);
            try {
                await axios.delete(
                    `${baseURL}/deleteuser/${deleteId}`
                );
                deleteUser(deleteId);
            } catch (err) {
                console.log(err);
            }
    };
    
            useEffect(() => {
                let isMounted = true;
                const fetchTodo = async () => {
                    try {
                        const res = await axios.get(
                            `${baseURL}/getusers`
                        );
                        const userList = res.data
                        if (isMounted) {
                            setUsers(userList);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                };

                fetchTodo();
                return () => {
                    isMounted = false;
                };
            }, []);

    const handleAddItem=() => {
        navigate("/register")
    }
    return (
        <Box>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px",
                }}
            >
                <Button
                    variant='contained'
                    size='large'
                    onClick={handleAddItem}
                >
                    Add Items
                </Button>
            </Box>
            <TableContainer
                style={{
                    margin: "auto",
                    minWidth: 650,
                    maxWidth: 1100,
                    maxHeight: 440,
                }}
                component={Paper}
            >
                <Table
                    sx={{ minWidth: 650, maxWidth: 1000 }}
                    stickyHeader
                    aria-label='sticky table'
                >
                    <TableHead>
                        <TableRow>
                            {columns.map((el) => (
                                <TableCell
                                    style={{ fontWeight: "bold" }}
                                >
                                    {el}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((row: any) => (
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
                                <TableCell>{row.job}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.mobile}</TableCell>
                                <TableCell>
                                    <NavLink to={`details/${row.id}`}>
                                        <Button
                                            variant='contained'
                                            size='small'
                                        >
                                            View
                                        </Button>
                                    </NavLink>
                                    <Button
                                        style={{ margin: "10px" }}
                                        onClick={() =>
                                            handledeleteUser(row.id)
                                        }
                                        variant='contained'
                                        size='small'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            navigate(
                                                `/edit/${row.id}`
                                            )
                                        }
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
