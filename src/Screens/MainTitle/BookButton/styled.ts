import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const DogIcon = styled.img`
  width: 15px;
  height: 15px;
  transform: scaleX(-1);
`;

export const Container = styled.div`
  border-radius: 100px;
  border: none;
  background: #f2a300;
  color: white;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 50px;
  cursor: pointer;
`;
