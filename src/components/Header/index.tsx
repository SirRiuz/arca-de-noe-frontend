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



export default function Header(): JSX.Element {
  const navigate = useNavigate();
  
  return (
    <Container container justifyContent={"center"} style={{ height: 75}}>
      <Wrapper container style={{boxShadow: "1px 1px 5px #000000"}}>
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
                color:"white"
              }}
            >
              <Box
                sx={{
                  background: "#E43434",
                  padding: "10px",
                  margin:"10px",
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  height:"30px"
                }}
              >
                <span
                  style={{ color: "#FFFFFF", cursor: "pointer", paddingTop: "2px" }}
                  onClick={() => {
                    navigate("/Login")
                }}>Iniciar sesión</span>
              </Box>
              <Box
                sx={{
                  background: "#E43434",
                  padding: "10px",
                  margin:"10px",
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",                  width:"65px",
                  height:"30px"
                }}
              >
                <span
                style={{ color: "#FFFFFF", cursor: "pointer" , paddingTop: "2px"}}
                onClick={() => {
                  navigate("/Register")
              }}
                >Registro</span>
                
              </Box>
            </Box>
          </AppBar>
        </AppBarWrapper>
      </Wrapper>
    </Container>
  );
}
