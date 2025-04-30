import { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import { Box } from "@mui/material";
import { TABS } from "./constants";
import {
  AppBar,
  AppBarWrapper,
  Container,
  Content,
  IconWrapper,
  LogoImg,
  Wrapper,
} from "./styled";
import Item from "./Item";
import Logo from "../../assets/logo.png";

import {useAppContext} from "../../AppContext";


export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAppContext();
  
  return (
    <Container container justifyContent={"center"} style={{ height: 75, width:"100vw" }}>
      <Wrapper container style={{boxShadow: "1px 1px 5px rgba(1, 41, 10, 0.16)", backgroundColor:"#114F3C", border:"0px" ,borderRadius:"0px"}}>
        <AppBarWrapper>
          <AppBar
            justifyContent={{
              lg: "space-between",
              md: "space-between",
              sm: "flex-end",
              xs: "flex-end",
            }}
          >
            <IconWrapper
              sx={{
                display: {
                  lg: "flex",
                  md: "flex",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              <Link to={"/"}>
              
                <LogoImg src={Logo} 
                />
              </Link>
            </IconWrapper>
            <Content
              display={{
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              }}
            >
              {TABS.map((item, key) => (
                <Item data={item} key={key} />
              ))}
            </Content>
            <Box
              sx={{
                display:'flex',
                justifyContent: "center",
                alignContent: "center",
                color:"white",
                // padding: "10px",
                // margin:"10px",
                height: "100%",
                // height:"30px",
              }}
            >

                {isAuthenticated ? (
                <>
                  <span style={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
                    {/* Bienvenido, {user?.name} */}
                    Bienvenido, user
                  </span>
                  <Box
                    sx={{
                      background: "#E43434",
                      paddingLeft: "15px",
                      paddingRight: "15px",  
                      display: "flex", 
                      alignItems: "center",
                      justifyContent: "center", 
               
                      margin: "15px",
                      borderRadius: 10,                      
                      cursor: "pointer",
                    }}
                    onClick={logout}
                  >
                    Cerrar sesión
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      background: "#009963",
                      paddingLeft: "15px",
                      paddingRight: "15px",                      
                      justifyContent: "center", 
                      alignItems: "center",
                      display: "flex",
                      margin: "15px",
                      borderRadius: 10,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/Login")}
                  >
                    Iniciar sesión
                  </Box>
                  <Box
                    sx={{
                      background: "#F6EFE7",
                      color: "black",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      justifyContent: "center", 
                      alignItems: "center",
                      display: "flex",
                      margin: "15px",
                      borderRadius: 10,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/Register")}
                  >
                    Registrate
                  </Box>
                </>
              )}
            </Box>
          </AppBar>
        </AppBarWrapper>
      </Wrapper>
    </Container>
  );
};