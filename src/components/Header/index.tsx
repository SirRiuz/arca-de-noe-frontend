import { JSX } from "react";
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
  return (
    <Container container justifyContent={"center"} style={{ height: 75 }}>
      <Wrapper container>
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
                <LogoImg src={Logo} />
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
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  background: "#F2A202",
                  padding: "10px",
                  borderRadius: 100,
                }}
              >
                <strong>Login</strong>
              </Box>
            </Box>
          </AppBar>
        </AppBarWrapper>
      </Wrapper>
    </Container>
  );
}
