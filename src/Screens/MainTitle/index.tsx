import dog from "../../assets/dog.png";
import heart from "../../assets/heart.png";
import { JSX } from "react";
import { BookButton } from "./BookButton";
import {
  Container,
  DogIcon,
  DogIconWrapper,
  MainSection,
  Subtitle,
  Title,
  TitleWrapper,
} from "./styled";

export default function MainTitle(): JSX.Element {
  return (
    <Container>
      <MainSection>
        <div style={{ display: "flex", gap: "25px", height: 70 }}>
          <TitleWrapper>
            <Title>AQUI</Title>
          </TitleWrapper>
          <DogIconWrapper>
            <DogIcon src={dog} height={80} />
          </DogIconWrapper>
        </div>
        <TitleWrapper>
          <Title>A TUS MASCOTAS</Title>
        </TitleWrapper>
        <div style={{ display: "flex", height: 70, gap: "25px" }}>
          <TitleWrapper>
            <Title>CUIDARE</Title>
          </TitleWrapper>
          <div style={{ transform: "rotate(15deg)" }}>
            <img src={heart} height={70} />
          </div>
        </div>
      </MainSection>
      <Subtitle>
      En nuestra clínica, tu mascota recibe el mismo amor y cuidado que en casa, 
      porque su bienestar es nuestra mayor recompensa.
      </Subtitle>
      <BookButton />

      
    </Container>
  );
}
