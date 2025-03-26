import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Screens/Home";
import { Container } from "@mui/material";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
