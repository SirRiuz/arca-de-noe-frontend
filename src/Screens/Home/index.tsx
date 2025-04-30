import { JSX } from "react";
import Header from "../../components/Header";
import BannerDog from "../../assets/banner_dog.svg";
import Grid from "@mui/material/Grid2";
import MainTitle from "../MainTitle";
import { Container, DogImage } from "./styled";

export default function Home(): JSX.Element {
  // document.body.style.backgroundColor = "#114F3C";

  return (
    <Container>
      <Header />
      <Grid container sx={{ marginTop: "30px", width:"90vw", marginLeft:"30px" }}>
        <Grid container size={5} alignContent={"center"}>
          <MainTitle />
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignContent={"center"}
          size={7}
        >
          <DogImage src={BannerDog} />
        </Grid>
      </Grid>
    </Container>
  );
}
