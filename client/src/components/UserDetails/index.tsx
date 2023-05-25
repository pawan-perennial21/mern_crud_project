import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
export default function UserDetails() {
    return (
        <Card
            sx={{
                maxWidth: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "auto",
                marginTop: "100px",
            }}
        >
            <CardContent>
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"20px 0"}}>
                    <Box>
                        <Avatar
                            alt='Pawan'
                            src='/static/images/avatar/1.jpg'
                        />
                    </Box>
                    <Box>
                        <NavLink to={`/edit/${1}`}>
                            <button>
                                <CreateIcon />
                            </button>
                        </NavLink>
                        <button>
                            <DeleteOutlineIcon />
                        </button>
                    </Box>
                </Box>
                <div className='row'>
                    <div>
                        <h3 className='mt-3'>
                            Username: <span>{`Pawan Patidar`}</span>
                        </h3>
                        <h3 className='mt-3'>
                            Job: <span>{`Full Stack Developer`}</span>
                        </h3>
                        <p>
                            <MailOutlineIcon />
                            Email:
                            <span>{`pawanpatidar21@gmail.com`}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <PhoneAndroidIcon />
                            mobile:
                            <span>+91 {`9617926392`}</span>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
