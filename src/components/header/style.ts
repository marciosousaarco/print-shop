import styled from "styled-components";

export const Container = styled.main`
  height: 60px;
  width: 100%;
  background: brown;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  margin: 0 auto 0 10px;
  cursor: pointer;
  border: 0;
  background: transparent;
  transition: ease-in-out .2s;
  border-radius: 5px;

  svg {
    background: transparent;
  }

`;
