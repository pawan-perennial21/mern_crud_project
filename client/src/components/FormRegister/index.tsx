import  { useState } from "react";
import {
    TextField,
    Button,
} from "@mui/material";
import { Grid } from "@mui/material";

export default function FormRegister() {
     const initialValues = {
         userName: "",
         email: "",
         job: "",
         number: "",
     };
     const handleInputChange = (e:any) => {
         const { name, value } = e.target;
         setFormValues({
             ...formValues,
             [name]: value,
         });
     };

     const [formValues, setFormValues] = useState(initialValues);
      const handleSubmit = (event: { preventDefault: () => void; }) => {
          event.preventDefault();
          console.log(formValues);
      };
    return (
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
                            label='UserName'
                            type='text'
                            value={formValues.userName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id='email'
                            name='email'
                            label='Email'
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
                            label='Job'
                            type='text'
                            value={formValues.job}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id='number'
                            name='number'
                            label='Number'
                            type='number'
                            value={formValues.number}
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
                        color='primary'
                        type='submit'
                        style={{
                            backgroundColor: "orange",
                            margin: "5px",
                        }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
