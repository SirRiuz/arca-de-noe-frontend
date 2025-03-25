import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import  bg  from "./bg/love-animals.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiAlert, { AlertProps} from "@mui/material/Alert";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide, {SlideProps} from "@mui/material/Slide";


// ADDED: New import for validation
import * as yup from 'yup';
import { useFormik } from 'formik';


const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref){
    return < MuiAlert elevation={6} ref={ref} variant="filled"{...props}/>;
})

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






export default function Register() {
    const navigate = useNavigate();
    const vertical = "top";
    const horizontal = "right";


   // MODIFIED: Added state for both error and success messages
   const [openError, setOpenError] = useState(false);
   const [openSuccess, setOpenSuccess] = useState(false);

   // ADDED: Validation schema using Yup
   const validationSchema = yup.object({
       Nombre: yup
           .string()
           .required('Nombre es requerido')
           .min(2, 'Nombre debe tener al menos 2 caracteres'),
       email: yup
           .string()
           .email('Correo electrónico inválido')
           .required('Correo electrónico es requerido'),
       phone: yup
           .string()
           .required('Número de celular es requerido')
           .matches(/^[0-9]{10}$/, 'Número de celular debe tener 10 dígitos'),
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
                               }}>
                               <ThemeProvider theme={darkTheme}>
                                   <Container>
                                       <Box height={20} />
                                       <Box sx={{ textAlign: 'center' }}>
                                           <Typography component="h1" variant="h6" sx={{ color: "#E43434", fontWeight: "bold" }}>
                                               Registration Form
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
                                               <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2em", mx: "auto" }}>
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
                                                           "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                           "& .MuiInputBase-input": { color: "#676767" }
                                                       }}
                                                   />
                                               </Grid>

                                               {/* EMAIL Field */}
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
                                                       value={formik.values.email}
                                                       onChange={formik.handleChange}
                                                       error={formik.touched.email && Boolean(formik.errors.email)}
                                                       helperText={formik.touched.email && formik.errors.email}
                                                       sx={{
                                                           "& label": { color: "gray" },
                                                           "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                           "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                           "& .MuiInputBase-input": { color: "#676767" }
                                                       }}
                                                   />
                                               </Grid>

                                               {/* PHONE Field */}
                                               <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2em", mx: "auto" }}>
                                                   <TextField
                                                       required
                                                       variant="standard"
                                                       fullWidth
                                                       id="phone"
                                                       label="Número celular"
                                                       name="phone"
                                                       autoComplete="tel"
                                                       type="tel"
                                                       color="error"
                                                       value={formik.values.phone}
                                                       onChange={formik.handleChange}
                                                       error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                       helperText={formik.touched.phone && formik.errors.phone}
                                                       sx={{
                                                           "& label": { color: "gray" },
                                                           "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                           "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                           "& .MuiInputBase-input": { color: "#676767" }
                                                       }}
                                                   />
                                               </Grid>

                                               {/* PASSWORD Field */}
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
                                                       value={formik.values.password}
                                                       onChange={formik.handleChange}
                                                       error={formik.touched.password && Boolean(formik.errors.password)}
                                                       helperText={formik.touched.password && formik.errors.password}
                                                       sx={{
                                                           "& label": { color: "gray" },
                                                           "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                           "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                           "& .MuiInputBase-input": { color: "#676767" }
                                                       }}
                                                   />
                                               </Grid>

                                               {/* CONFIRM PASSWORD Field */}
                                               <Grid item xs={8} sx={{ ml: "1.5em", mr: "1.5em", height: "2em", mb: "2em", mx: "auto" }}>
                                                   <TextField
                                                       required
                                                       variant="standard"
                                                       fullWidth
                                                       id="confirmPassword"
                                                       label="Confirmar contraseña"
                                                       name="confirmPassword"
                                                       autoComplete="new-password"
                                                       type="password"
                                                       color="error"
                                                       value={formik.values.confirmPassword}
                                                       onChange={formik.handleChange}
                                                       error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                                       helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                                       sx={{
                                                           "& label": { color: "gray" },
                                                           "& .MuiInput-underline:before": { borderBottomColor: "gray" },
                                                           "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "gray" },
                                                           "& .MuiInputBase-input": { color: "#676767" }
                                                       }}
                                                   />
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
                                                           backgroundColor: "#E43434",
                                                           mx: "auto"
                                                       }}>
                                                       CREATE ACCOUNT
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
                                                       I have an Account?
                                                       <span
                                                           style={{ color: "#E43434", cursor: "pointer" }}
                                                           onClick={() => {
                                                               navigate("/Login");
                                                           }}
                                                       >
                                                           Sing in
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