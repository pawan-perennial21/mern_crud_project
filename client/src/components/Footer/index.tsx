import { Box, Container, Grid, Typography } from "@mui/material";
export default function Footer() {
    return (
        <Box
            sx={{
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                height: "auto",
                backgroundColor: "#1976D2",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth='lg'>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                >
                    <Grid item xs={12}>
                        <Typography color='#ffffff' variant='h5'>
                            React Starter App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            color='#ffffff'
                            variant='subtitle1'
                        >
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
