import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";

import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { Container } from "@mui/material";


function App(): JSX.Element {
  return (
    <BrowserRouter>

         <Container>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/register"  element={<Register />}></Route>
        <Route path="/Login"  element={<Login />}></Route>
        <Route path="/reset-password" element={<ForgotPassword />}></Route>
      </Routes>
         </Container>

    </BrowserRouter>
  );
}

export default App;
