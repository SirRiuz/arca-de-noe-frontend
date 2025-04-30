import { JSX } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import { AppProvider } from "./AppContext";
import AppRoutes from "./Routes/AppRoutes";


function App(): JSX.Element {
  return (
    <AppProvider>
      <BrowserRouter>
        <div style={{ overflowX: "hidden"}}>
          <AppRoutes></AppRoutes>
        </div>  
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
