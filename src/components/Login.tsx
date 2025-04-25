import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "./bg/love-animals.jpg";
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
import "./Login.css";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});


const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "99vw",
    height: "99vh",
    bgcolor: "#E9E9E9",
    boxShadow: 24,

    borderRadius: "20px",

}

const center = {
    textAlign: 'center'
};



export default function Login() {
    const navigate = useNavigate();
    document.body.style.backgroundColor = "#E9E9E9";

    return (
        <div id="MainContainerOfLogin">
            {/* contenedor rosado */}
            <div style={{
                backgroundColor: "#E9E9E9",
                backgroundImage: "cover",
                height: "100vh",
                

            }}
            >
                <Box sx={boxstyle}>

                    {/* Imagen de los perritos */}
                    <Grid container>
                        <Grid item xs={12} sm={12} lg={6} >
                            <Box
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "99vh",
                                    borderRadius: "10px",
                                    backgroundColor: "#E9E9E9"


                                }}>
                            </Box>


                        </Grid>
                        {/* formulario */}

                        <Grid item xs={12} sm={12} lg={6}
                            style={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >

                            <Box
                                id="LoginContainer"
                                style={{
                                    height: "50vh",
                                    width: "65vh",
                                    minHeight: "430px",
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                }}
                            >
                                <ThemeProvider theme={darkTheme}>
                                    <Container>
                                        <Box sx={{ textAlign: 'center' }}>

                                            <Typography component="h1" variant="h6" sx={{ color: "#E43434", fontWeight: "bold" }}>
                                                Iniciar sesión

                                            </Typography>
                                        </Box>
                                        <Box height={10} />

                                        {/* Campo del nombre */}

                                        <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>



                                            {/* Campo de correo electrónico */}
                                            <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2em", mx: "auto" }}>
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
                                                        "& .MuiInput-underline:after": { borderBottomColor: "#b65c64" }, // Borde cuando está enfocado
                                                        "& .MuiInputLabel-root.Mui-focused": { color: "#b65c64" },
                                                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                        "& .MuiInputBase-input": { color: "#676767" } // Color del texto que escribe el usuario  
                                                    }}
                                                />
                                            </Grid>

                                            {/* Campo de contraseña */}
                                            <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2em", mx: "auto" }}>
                                                <TextField
                                                    required
                                                    variant="standard"
                                                    fullWidth
                                                    id="password"
                                                    label="Contraseña"
                                                    name="password"
                                                    autoComplete="new-password"
                                                    type="password"
                                                    color="error"
                                                    sx={{
                                                        "& label": { color: "gray" }, // Color del label en estado normal
                                                        "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Color del border bottom en estado normal
                                                        // También puedes personalizar el border cuando está en hover o focus
                                                        "& .MuiInput-underline:after": { borderBottomColor: "#b65c64" }, // Borde cuando está enfocado
                                                        "& .MuiInputLabel-root.Mui-focused": { color: "#b65c64" },
                                                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                        "& .MuiInputBase-input": { color: "#676767" } // Color del texto que escribe el usuario
                                                    }} />
                                            </Grid>                         {/* BOTÓN DE OLVIDAR CONTRASEÑA  */}

                                            <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                <Stack direction="row" spacing={2}>
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                        onClick={() => {
                                                            navigate("/reset-password");
                                                        }}
                                                        style={{ marginTop: "10px", cursor: "pointer", color: "#F67A84", fontSize: "0.9rem" }}
                                                    >
                                                        

                                                        ¿Olvidaste tu contraseña?

                                                    </Typography>
                                                </Stack>
                                            </Grid>

                                            {/* Boton de iniciar sesión  */}

                                            <Grid container justifyContent="center">
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    sx={{
                                                        mt: "30px",
                                                        mr: "40px",
                                                        color: "#ffffff",


                                                        minWidth: "150px",
                                                        backgroundColor: "#F67A84",

                                                        mx: "auto"
                                                    }}
                                                    onClick={() => navigate("/")}
                                                >
                                                    Iniciar sesión

                                                </Button>
                                            </Grid>

                                            <Box height={20} />


                                            {/*  CREAR NUEVA CUENTA  */}

                                            <Grid container justifyContent="center" item xs={12} sx={{ ml: "1em", mr: "1em" }}>
                                                <Stack spacing={2}>
                                                    <Typography
                                                        component="h5"
                                                        style={{ marginTop: "10px", color: "#808080", fontSize: "0.9rem" }}
                                                    >
                                                        ¿Aún no estás registrado?{" "}

                                                        <span
                                                            style={{ color: "#F67A84", cursor: "pointer" }}
                                                            onClick={() => navigate("/register")} // <-- Aquí agregamos la redirección
                                                        >
                                               Crear una cuenta

                                                        </span>
                                                    </Typography>
                                                </Stack>
                                            </Grid>




                                        </Grid>



                                    </Container>
                                </ThemeProvider>


                            </Box>


                        </Grid>

                    </Grid>

                </Box>
            </div>


        </div>
    )
}