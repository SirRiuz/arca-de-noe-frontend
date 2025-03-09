import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import  bg  from "./bg/Pets_2.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});


const boxstyle ={
    position: "absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%, -50%)",
    width:"75%",
    height:"80%",
    bgcolor:"background.paper",
    boxShadow:24,
    borderRadius: "20px",

}

const center = {
    position: "relative",
    top: "50%",
    left: "37%",
};



export default function Register() {
    return(
        <>
        <div style={{
            backgroundColor:"violet",
            backgroundImage:"cover",
            height: "100vh",
            color:"black",
        }}
        >
            <Box sx={boxstyle}>
                {/* Imagen de los perritos */}
                <Grid container>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box 
                        style={{
                            backgroundImage:`url(${bg})`,
                            backgroundSize:"cover",
                            marginTop:"5px",
                            marginBottom:"5px",
                            marginLeft:"5px",
                            marginRight:"10px",
                            height:"78vh",
                            color:"white",
                            borderRadius: "10px",
                            
                        }}>
                        </Box>


                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>

                    <Box
                    style={{
                        backgroundSize: "cover",
                        height: "50hv",
                        minHeight: "430px",
                        backgroundColor: "#4a5568",
                        marginTop:"5px",
                        marginBottom:"5px",
                        marginRight:"10px",
                        borderRadius: "10px",
                         }}
                    > 
                    <ThemeProvider theme={darkTheme}>
                    <Container>
                         <Box height={20} />
                         <Box sx={center}>
                            <Typography component="h1" variant="h4">
                                Sig Up 
                            </Typography>
                        </Box>
                        <Box height={10}/>

                        <Grid container spacing={1}>
                    <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em",  height: "2em", mb:"1em"}}>
                         <TextField
                        required
                        fullWidth
                        id="Nombre"
                        label="Nombre"
                        name="Nombre"
                        autoComplete="Nombre"
                                
                                
    />
</Grid>


                            {/* Campo de correo electrónico */}
                    <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "1em" }}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Correo electrónico"
                        name="email"
                        autoComplete="email"
                        type="email"
    />
</Grid>

                            {/* Campo de número celular */}
                    <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "1em" }}>
                        <TextField
                        required
                        fullWidth
                        id="phone"
                        label="Número celular"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
    />
</Grid>

                            {/* Campo de contraseña */}
                    <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2em" }}>
                        <TextField
                        required
                        fullWidth
                        id="password"
                        label="Contraseña"
                        name="password"
                        autoComplete="new-password"
                        type="password"
    />
</Grid>

                     {/* Campo de verificación de contraseña */}
                     
                     <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "1em" }}>
                        <TextField
                        required
                        fullWidth
                        id="confirmPassword"
                        label="Confirmar contraseña"
                        name="confirmPassword"
                        autoComplete="new-password"
                        type="password"
    />
</Grid>

                          
                            
                        </Grid>

                    

                        </Container>
                         </ThemeProvider>

  
                    </Box>


                    </Grid>

                </Grid>

            </Box>
        </div>
        
        
        </>
    )
}