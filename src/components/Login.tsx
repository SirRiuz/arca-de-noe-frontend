import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "./bg/love-animals.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

// Función de validación de correo electrónico
const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
};

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
    bgcolor: "#E9E9E",
    boxShadow: 24,
    borderRadius: "20px",
};

export default function Login() {
    const navigate = useNavigate();

    // Estados para manejar el formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Manejar el inicio de sesión
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!email.trim() || !password.trim()) {
            setError("Todos los campos son obligatorios");
            setOpenSnackbar(true);
            return;
        }
    
        if (!validateEmail(email)) {
            setEmailError("Correo electrónico no válido");  // Refuerza el error
            return;
        }
        if (password.length < 8) { // Validación adicional al enviar
            setPasswordError(" mínimo 8 caracteres");
            return;
        }

        // Validar campos vacíos
        if (!email.trim() || !password.trim()) {
            setError('Todos los campos son obligatorios');
            setOpenSnackbar(true);
            return;
        }

        // Validar formato de correo
        if (!validateEmail(email)) {
            setError('El formato del correo electrónico no es válido');
            setOpenSnackbar(true);
            return;
        }

        // Validación de credenciales (ejemplo simplificado)
        if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
            navigate("/");
        } else {
            setError('Credenciales incorrectas');
            setOpenSnackbar(true);
        }
    };

    // Cerrar Snackbar
    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <>
            {/* contenedor rosado */}
            <div style={{
                backgroundColor: "#E9E9E9",
                backgroundImage: "cover",
                height: "100vh",
            }}>
                <Box sx={boxstyle}>
                    {/* Imagen de los perritos */}
                    <Grid container>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Box
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "99vh",
                                    borderRadius: "10px",
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
                            <ThemeProvider theme={darkTheme}>
                                <Box
                                    style={{
                                        height: "50vh",
                                        width: "65vh",
                                        minHeight: "430px",
                                        backgroundColor: "white",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <Container>
                                        <Box height={20} />
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography component="h1" variant="h6" sx={{ color: "#E43434", fontWeight: "bold" }}>
                                                Sign Up
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
                                                    value={email}
                                                    color="error"
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        // Validación en tiempo real
                                                        if (e.target.value.trim() === "") {
                                                            setEmailError("");  // No mostrar error si está vacío
                                                        } else if (!validateEmail(e.target.value)) {
                                                            setEmailError("Correo electrónico no válido");
                                                        } else {
                                                            setEmailError("");  // Correo válido
                                                        }
                                                    }}
                                                    error={!!emailError}  // Resalta el campo en rojo si hay error
                                                    helperText={emailError}  // Muestra el mensaje de error
                                                    sx={{
                                                        "& label": { color: "gray" },
                                                        "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                        "& .MuiInputBase-input": { color: "#676767" }
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
        autoComplete="current-password"
        type={showPassword ? "text" : "password"}
        value={password}
        color="error"
        onChange={(e) => {
            setPassword(e.target.value);
            // Validación en tiempo real (mínimo 8 caracteres)
            if (e.target.value.trim() === "") {
                setPasswordError(""); // No mostrar error si está vacío
            } else if (e.target.value.length < 8) {
                setPasswordError("Debe tener mínimo 8 caracteres");
            } else {
                setPasswordError(""); // Contraseña válida
            }
        }}
        error={!!passwordError} // Resalta el campo en rojo si hay error
        helperText={passwordError} // Mensaje de error
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ 
                            color: "#676767",
                            "&:hover": { color: "#E43434" }
                        }}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            )
        }}
        sx={{
            "& label": { color: "gray" },
            "& .MuiInput-underline:before": { borderBottomColor: "gray" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { 
                borderBottomColor: passwordError ? "#E43434" : "gray" 
            },
            "& .MuiInputBase-input": { color: "#676767" },
            "& .MuiFormHelperText-root": { // Estilo del mensaje de error
                color: "#E43434",
                fontSize: "0.75rem",
                marginLeft: 0
            }
        }}
    />
</Grid>

                                            {/* BOTÓN DE OLVIDAR CONTRASEÑA  */}
                                            <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                <Stack direction="row" spacing={2}>
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                        onClick={() => {
                                                            navigate("/reset-password");
                                                        }}
                                                        style={{ marginTop: "10px", cursor: "pointer", color: "#E43434", fontSize: "0.9rem" }}
                                                    >
                                                        Forgot password?
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
                                                        backgroundColor: "#E43434",
                                                        mx: "auto"
                                                    }}
                                                    onClick={handleLogin}
                                                >
                                                    Sign Up
                                                </Button>
                                            </Grid>

                                            <Box height={20} />

                                            {/* BOTON DE CREAR NUEVA CUENTA  */}
                                            <Grid container justifyContent="center" item xs={12} sx={{ ml: "1em", mr: "1em" }}>
                                                <Stack spacing={2}>
                                                    <Typography
                                                        component="h5"
                                                        style={{ marginTop: "10px", color: "#808080", fontSize: "0.9rem" }}
                                                    >
                                                        Not registered yet?{" "}
                                                        <span
                                                            style={{ color: "#E43434", cursor: "pointer" }}
                                                        >
                                                            Create an Account
                                                        </span>
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Container>

                                    {/* Snackbar para mostrar mensajes de error */}
                                    <Snackbar
                                        open={openSnackbar}
                                        autoHideDuration={6000}
                                        onClose={handleCloseSnackbar}
                                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                                    >
                                        <MuiAlert
                                            onClose={handleCloseSnackbar}
                                            severity="error"
                                            sx={{ width: '100%' }}
                                        >
                                            {error}
                                        </MuiAlert>
                                    </Snackbar>
                                </Box>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}