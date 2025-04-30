import { JSX } from "react";
import { Link } from "react-router";
import { ItemProps } from "./types";
import { Container, LabelWrapper } from "./styled";

export default function Item({ data }: ItemProps): JSX.Element {
  return (
    <Container>
      <Link
        to={data.route}
        style={{ color: "#1f1e19", textDecoration: "none", fontSize: 16.5, fontWeight: 400 }}
      >
        <LabelWrapper>{data.label}</LabelWrapper>
      </Link>
    </Container>
  );
}
