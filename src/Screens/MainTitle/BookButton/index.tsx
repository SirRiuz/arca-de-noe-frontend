import { JSX } from "react";
import { Container, DogIcon, Wrapper } from "./styled";
import IconDog from "../../../assets/icon_dog.png";

export function BookButton(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <strong>Book a Schedule</strong>
        <div style={{ width: 0.5, height: 10, background: "white" }} />
        <DogIcon src={IconDog} />
      </Wrapper>
    </Container>
  );
}
