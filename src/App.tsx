import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { Container } from "@mui/material";
import { AppProvider } from "./AppContext";

function App(): JSX.Element {
  return (
    <AppProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/reset-password" element={<ForgotPassword />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
