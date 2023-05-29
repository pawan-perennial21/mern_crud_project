import  { useContext, useState } from "react";
import {
    TextField,
    Button,
} from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../core";
import { UserContext } from "../../contexts/ContextProvider";


export default function FormRegister() {
    const { addUser }: any =
        useContext(UserContext);
    const navigate = useNavigate();
     const initialValues = {
         userName: "",
         email: "",
         job: "",
         mobile: "",
     };
     const handleInputChange = (e:any) => {
         const { name, value } = e.target;
         setFormValues({
             ...formValues,
             [name]: value,
         });
     };

    const [formValues, setFormValues] = useState(initialValues);

      const handleSubmit = async (event: { preventDefault: () => void; }) => {
          event.preventDefault();
          try {
              const res = await axios.post(
                  `${baseURL}/create`,
                  formValues
              );
              addUser(res.data);
              navigate("/")
          } catch (err) {
              console.log(err)
          }
    };

    return (
        <>
            <h2 style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"20px"}}>User Registration</h2>
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
                                value={formValues.userName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='email'
                                name='email'
                                placeholder='Email'
                                type='text'
                                value={formValues.email}
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
                                value={formValues.job}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='mobile'
                                name='mobile'
                                placeholder='Mobile'
                                type='number'
                                value={formValues.mobile}
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
                            size="large"
                            type='submit'
                            style={{
                                margin: "5px",
                                width:"30%"
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
