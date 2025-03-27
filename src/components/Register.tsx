import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "./bg/love-animals.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";

import "./Register.css";

// ADDED: New import for validation
import * as yup from 'yup';
import { useFormik } from 'formik';
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return < MuiAlert elevation={6} ref={ref} variant="filled"{...props} />;
})

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

}






export default function Register() {
    const navigate = useNavigate();
    const vertical = "top";
    const horizontal = "right";
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    // MODIFIED: Added state for both error and success messages
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);

    // ADDED: Validation schema using Yup
    const validationSchema = yup.object({
        Nombre: yup
            .string()
            .required('Nombre es requerido')
            .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras, números y espacios'),

        email: yup
            .string()
            .email('Correo electrónico inválido')
            .required('Correo electrónico es requerido'),
        phone: yup
            .string()
            .required('Número de celular es requerido')
            .matches(/^3/, "El número de celular debe empezar por 3") // Verifica solo el primer dígito
            .matches(/^\d{10}$/, "El número de celular debe tener 10 dígitos"),
            
        password: yup
            .string()
            .required('Contraseña es requerida')
            .min(8, 'Contraseña debe tener al menos 8 caracteres'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
            .required('Confirmar contraseña es requerido')
    });

    // ADDED: Formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            Nombre: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // ADDED: Simulated registration logic 
                // In a real app, you would call your backend API here
                console.log('Registration values:', values);

                // Show success message
                setOpenSuccess(true);

                // Optional: Navigate to login or dashboard after 3 seconds
                setTimeout(() => {
                    navigate("/Login");
                }, 3000);
            } catch (error) {
                // Show error message if registration fails
                setOpenError(true);
            }
        }
    });

    // MODIFIED: Handle both error and success message closings
    const handleErrorClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenError(false);
    };

    const handleSuccessClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSuccess(false);
    };

    return (
        <>
            {/* ERROR Snackbar */}
            <Snackbar
                open={openError}
                autoHideDuration={3000}
                onClose={handleErrorClose}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert onClose={handleErrorClose} severity="error" sx={{ width: "100%" }} variant="filled">
                    Failed! Enter correct username and password
                </Alert>
            </Snackbar>

            {/* SUCCESS Snackbar */}
            <Snackbar
                open={openSuccess}
                autoHideDuration={3000}
                onClose={handleSuccessClose}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert onClose={handleSuccessClose} severity="success" sx={{ width: "100%" }} variant="filled">
                    Account Created Successfully!
                </Alert>
            </Snackbar>

            <div style={{
                backgroundColor: "#E9E9E9",
                backgroundImage: "cover",
                height: "100vh",
            }}>
                <Box sx={boxstyle}>
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

                        <Grid item xs={12} sm={12} lg={6}
                            style={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Box
                                style={{
                                    height: "92vh",
                                    width: "65vh",
                                    minHeight: "430px",
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                    display: "flex",
                                }}>
                                <ThemeProvider theme={darkTheme}>
                                    <Container className="RegisContainer">
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography component="h1" variant="h6" sx={{ color: "#F67A84", fontWeight: "bold", userSelect: "none" }}>
                                                Formulario de Registro
                                            </Typography>
                                        </Box>



                                        {/* MODIFIED: Replace form with Formik form */}
                                        <Box
                                            component="form"
                                            noValidate
                                            onSubmit={formik.handleSubmit}
                                            sx={{ mt: 2 }}
                                        >
                                            <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                {/* NOMBRE Field */}
                                                <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2.4em", mx: "auto" }}>
                                                    <TextField
                                                        required
                                                        variant="standard"
                                                        fullWidth
                                                        id="Nombre"
                                                        label="Nombre"
                                                        name="Nombre"
                                                        autoComplete="Nombre"
                                                        color="error"
                                                        value={formik.values.Nombre}
                                                        onChange={formik.handleChange}
                                                        error={formik.touched.Nombre && Boolean(formik.errors.Nombre)}
                                                        helperText={formik.touched.Nombre && formik.errors.Nombre}
                                                        sx={{
                                                            "& label": { color: "gray" },
                                                            "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                            "& .MuiInput-underline:after": { borderBottomColor: "#b65c64" }, // Borde cuando está enfocado
                                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b65c64" }, // Color del label cuando está enfocado
                                                            "& .MuiFormHelperText-root": { fontSize: "0.56rem", color: "#d33542" }, // Reducir tamaño del texto de ayuda

                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                            "& .MuiInputBase-input": { color: "#676767" },


                                                        }}
                                                    />
                                                </Grid>

                                                {/* EMAIL Field */}
                                                <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2.4em", mx: "auto" }}>
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
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                                        helperText={formik.touched.email && formik.errors.email}
                                                        sx={{
                                                            "& label": { color: "gray" },
                                                            "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                            "& .MuiInputBase-input": { color: "#676767" },
                                                            "& .MuiFormHelperText-root": { fontSize: "0.56rem", color: "#d33542" }, // Reducir tamaño del texto de ayuda

                                                            "& .MuiInput-underline:after": { borderBottomColor: "#b65c64" }, // Borde cuando está enfocado
                                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b65c64" }, // Color del label cuando está enfocado

                                                        }}
                                                    />
                                                </Grid>

                                                {/* PHONE Field */}
                                                <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2.4em", mx: "auto" }}>
                                                    <TextField
                                                        required
                                                        variant="standard"
                                                        fullWidth
                                                        id="phone"
                                                        label="Número celular"
                                                        name="phone"
                                                        autoComplete="tel"
                                                        type="text"

                                                        color="error"
                                                        value={formik.values.phone}
                                                        onChange={(e) => {
                                                            const value = e.target.value.replace(/\D/g, ""); // ❌ Elimina todo lo que no sea número
                                                            formik.setFieldValue("phone", value);
                                                        }}                                                        
                                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                        helperText={formik.touched.phone && formik.errors.phone}
                                                        sx={{
                                                            "& label": { color: "gray" },
                                                            "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                            "& .MuiInputBase-input": { color: "#676767" },
                                                            "& .MuiInput-underline:after": { borderBottomColor: "#b65c64" }, // Borde cuando está enfocado
                                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b65c64" }, // Color del label cuando está enfocado
                                                            "& .MuiFormHelperText-root": { fontSize: "0.56rem", color: "#d33542" }, // Reducir tamaño del texto de ayuda
                                                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                                                display: "none"
                                                            }, // ✅ Corrección aquí
                                                            "& input[type=number]": { MozAppearance: "textfield" }, // Oculta flechas en Firefox
                                                        }}

                                                    />
                                                </Grid>

                                                {/* PASSWORD Field */}


                                                <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2.4em", mx: "auto" }}>
                                                    <FormControl fullWidth variant="standard" error={formik.touched.password && Boolean(formik.errors.password)}
                                                        sx={{
                                                            "& label": { color: "gray" },
                                                            "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                            "& .MuiInputBase-input": { color: "#676767" },
                                                            "& .MuiFormHelperText-root": { fontSize: "0.56rem", color: "#d33542" }, // Reducir tamaño del texto de ayuda
                                                            "& .MuiInput-underline:after": { borderBottomColor: "#b65c64" }, // Borde cuando está enfocado
                                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b65c64" }, // Color del label cuando está enfocado
                                                        }}>
                                                        <InputLabel htmlFor="password">Contraseña</InputLabel>
                                                        <Input
                                                            id="password"
                                                            name="password"
                                                            type={showPassword ? "text" : "password"}
                                                            value={formik.values.password}
                                                            onChange={formik.handleChange}
                                                            disableUnderline={false} // ✅ Esto permite que solo haya línea inferior
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end"
                                                                        sx={{ color: "#676767" }}>
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                        <FormHelperText>{formik.touched.password && formik.errors.password}</FormHelperText>
                                                    </FormControl>
                                                </Grid>

                                                {/* CONFIRM PASSWORD Field */}
                                                <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2.4em", mx: "auto" }}>
                                                    <FormControl fullWidth variant="standard" error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                                        sx={{
                                                            "& label": { color: "gray" },
                                                            "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                            "& .MuiInputBase-input": { color: "#676767" },
                                                            "& .MuiFormHelperText-root": { fontSize: "0.56rem", color: "#d33542" }, // Reducir tamaño del texto de ayuda
                                                            "& .MuiInput-underline:after": { borderBottomColor: "#b65c64" }, // Borde cuando está enfocado
                                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b65c64" }, // Color del label cuando está enfocado
                                                        }}>
                                                        <InputLabel htmlFor="confirmPassword">Confirmar contraseña</InputLabel>
                                                        <Input
                                                            id="confirmPassword"
                                                            name="confirmPassword"
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            value={formik.values.confirmPassword}
                                                            onChange={formik.handleChange}
                                                            disableUnderline={false} // ✅ Línea inferior en vez de borde
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                                        edge="end"
                                                                        sx={{ color: "#676767" }}>
                                                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                        <FormHelperText>{formik.touched.confirmPassword && formik.errors.confirmPassword}</FormHelperText>
                                                    </FormControl>
                                                </Grid>

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
                                                        }}>
                                                        REGISTRATE
                                                    </Button>
                                                </Grid>

                                                <Box height={20} />

                                                <Box>
                                                    <Typography component="h5"
                                                        sx={{
                                                            color: "grey",
                                                            fontSize: "0.9rem",
                                                            mt: 3
                                                        }}>
                                                        ¿Ya tienes una cuenta?
                                                        <span
                                                            style={{ color: "#F67A84", cursor: "pointer" }}
                                                            onClick={() => {
                                                                navigate("/Login");
                                                            }}
                                                        >
                                                            Iniciar Sesión
                                                        </span>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Box>
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