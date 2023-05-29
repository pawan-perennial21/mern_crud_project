import { ChangeEvent,useEffect, useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../core";
import { UserContext } from "../../contexts/ContextProvider";

export default function EditUser() {
    const { users, updateUser }: any = useContext(UserContext);
    const { id }: any = useParams();

    const [updateUserData, setUpdateUserData] = useState<any>({});
    console.log("adddataadddata", users);
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdateUserData({
            ...updateUserData,
            [name]: value,
        });
    };
    useEffect(() => {
        let isMounted = true;
        const fetchTodo = async () => {
            try {
                const res = await axios.get(
                    `${baseURL}/getsingleuser/${id}`
                );
                const singleUser = res.data[0];
                if (isMounted) {
                    setUpdateUserData(singleUser);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchTodo();
        return () => {
            isMounted = false;
        };
    }, [id]);

    const handleSubmit = async (event: {
        preventDefault: () => void;
    }) => {
        event.preventDefault();
        const updatedData = {
            userName: updateUserData.userName,
            email: updateUserData.email,
            job: updateUserData.job,
            mobile: updateUserData.mobile,
        };
        try {
            const res = await axios.put(
                `${baseURL}/updateuser/${id}`,
                updatedData
            );
            updateUser(id, res.data);
            navigate("/");
            console.log("res", res.data, updatedData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h2
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px",
                }}
            >
                Edit User Registration
            </h2>
            <form onSubmit={handleSubmit}>
                <Grid>
                    <Grid
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                            margin: "20px",
                            columnGap: "10px",
                        }}
                    >
                        <Grid item>
                            <TextField
                                id='userName'
                                name='userName'
                                placeholder='UserName'
                                type='text'
                                autoComplete='off'
                                value={updateUserData.userName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='email'
                                name='email'
                                placeholder='Email'
                                type='text'
                                value={updateUserData.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                            margin: "20px",
                            columnGap: "10px",
                        }}
                    >
                        <Grid item>
                            <TextField
                                id='job'
                                name='job'
                                placeholder='Job'
                                type='text'
                                value={updateUserData.job}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='mobile'
                                name='mobile'
                                placeholder='Mobile'
                                type='number'
                                value={updateUserData.mobile}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                            margin: "20px",
                        }}
                        item
                    >
                        <Button
                            variant='contained'
                            size='large'
                            type='submit'
                            style={{
                                margin: "5px",
                                width: "30%",
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
