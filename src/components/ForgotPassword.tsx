import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import  bg  from "./bg/love-animals.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

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
    width:"99vw",
    height:"99vh",
    bgcolor:"#E9E9E",
    boxShadow:24,
    borderRadius: "20px",

}




export default function  ForgotPassword() {
    const navigate = useNavigate();
    return(
        <>
        {/* contenedor rosado */}
        <div style={{
            backgroundColor:"#E9E9E9",
            backgroundImage:"cover",
            height: "100vh",
            
        }}
        >
            <Box sx={boxstyle}>

                {/* Imagen de los perritos */}
                <Grid container>
                    <Grid item xs={12} sm={12} lg={6} >
                        <Box
                        style={{
                            backgroundImage:`url(${bg})`,
                            backgroundSize:"cover",
                            backgroundPosition: "center",
                            height:"99vh",   
                            borderRadius: "10px",
                            
                            
                        }}>
                        </Box>


                    </Grid>
                    {/* formulario */}
                    
                    <Grid item xs={12} sm={12} lg={6}
                    style={{
                        display:"flex",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >

                    <Box
                    style={{
                        height: "50vh",
                        width: "65vh",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "20px",
                         }}
                    > 
                    <ThemeProvider theme={darkTheme}>
                    <Container>
                         <Box  height={10} />
                         <Box sx={{textAlign:'center'}}>
                         <Typography component="h1" variant="h6" sx={{ color: "#E43434", fontWeight: "bold", textAlign: "center" }}>
                    Recuperar Contraseña
                  </Typography>
                        </Box>
                        <Box height={10}/>

                    


                            {/* Campo de correo electrónico */}
                    <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2em",mx: "auto"  }}>
                        <TextField
                        required
                        variant="standard"
                        id="email"
                        fullWidth
                        label="Correo electrónico"
                        name="email"
                        autoComplete="email"
                        type="email"
                        color="error"
                        sx={{
                            "& label": { color: "gray" }, // Color del label en estado normal
                            "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Color del border bottom en estado normal
                            // También puedes personalizar el border cuando está en hover o focus
                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                            "& .MuiInputBase-input": { color: "#676767" } // Color del texto que escribe el usuario  
                        }}
    />
</Grid>

                      {/* Botón para recuperar contraseña */}
                  <Grid container justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        mt: "20px",
                        color: "#ffffff",
                        backgroundColor: "#E43434",
                        Width: "100px",
                      }}
                    >
                      Enviar enlace de recuperación
                    </Button>
                  </Grid>




  

                  {/* Botón para volver al inicio de sesión */}
                  <Grid container justifyContent="center">
                    <Typography
                      variant="body1"
                      component="span"
                      onClick={() => navigate("/login")}
                      style={{ marginTop: "20px", cursor: "pointer", color: "#E43434", textAlign: "center" }}
                    >
                      Volver al inicio de sesión
                    </Typography>
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