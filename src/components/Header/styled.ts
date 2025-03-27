import Grid from "@mui/material/Grid2";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AppBarWrapper = styled(Grid)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled(Box)`
  gap: 30px;
`;

export const AppBar = styled(Grid)`
  display: flex;
  flex: 1;
`;

export const Wrapper = styled(Grid)`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: solid 1px rgba(164, 167, 138, 0.2);
  border-left: solid 1px rgba(164, 167, 138, 0.2);
  border-right: solid 1px rgba(164, 167, 138, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const IconWrapper = styled(Grid)`
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const Container = styled(Grid)``;
