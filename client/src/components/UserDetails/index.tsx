import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Avatar from "@mui/material/Avatar";
import {  useParams } from "react-router-dom";
import { Box,Typography } from "@mui/material";
import axios from "axios";

interface IUser {
    userName: string;
    id: number;
    email: string;
    mobile: string;
    job: string;
}
export default function UserDetails() {
    const [singleUser, setSingleUser] = useState<IUser>();
    console.log("singleUsersingleUser", singleUser);
    const {id} = useParams()

           useEffect(() => {
               let isMounted = true;
               const getSingleUserData = async () => {
                   try {
                       const {data} = await axios.get(
                           `http://localhost:8003/getsingleuser/${id}`
                       );
                       if (isMounted) {
                           console.log("res.datares.data", data);
                           setSingleUser({...data[0]})
                       }
                   } catch (err) {
                       console.log(err);
                   }
               };

               getSingleUserData();
               return () => {
                   isMounted = false;
               };
           }, [id]);
    return (
        <Card
            sx={{
                maxWidth: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "auto",
                marginTop: "100px",
            }}
        >
            <CardContent
                sx={{
                    width: "100%",
                    border: "1px solid red",
                }}
            >
                <Box
                    sx={{
                        maxWidth: 400,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "auto",
                    }}
                >
                    <Box>
                        <Typography
                            variant='h5'
                            sx={{ fontWeight: 500 }}
                        >
                            User Profile
                        </Typography>
                    </Box>
                    <Box>
                        <Avatar
                            alt='Pawan'
                        />
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography
                            variant='h6'
                            sx={{ fontWeight: 500 }}
                        >
                            Username:
                            <span>{singleUser?.userName}</span>
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{ fontWeight: 500 }}
                        >
                            Job: <span>{singleUser?.job}</span>
                        </Typography>
                    </Box>
                </Box>
                <Box className='row'>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <MailOutlineIcon />
                        <Box>
                            <label
                                htmlFor=''
                                style={{ fontWeight: "bold" }}
                            >
                                Email:
                            </label>
                            <span>{singleUser?.email}</span>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <PhoneAndroidIcon />
                        <Box>
                            <label
                                htmlFor=''
                                style={{ fontWeight: "bold" }}
                            >
                                Mobile:
                            </label>
                            <span>{singleUser?.mobile}</span>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
