import styled, { css } from "styled-components";

type containerProps = {
  sidebarIsActive: boolean;
};

export const Container = styled.main(({ sidebarIsActive }: containerProps) => {
  return css`
    height: calc(100vh - 60px);
    /* width: 100%; */
    margin-left: ${sidebarIsActive ? '300px' : '0px'};
    /* background: ${sidebarIsActive ? 'red' : 'blue'}; */
    transition: linear .17s;
  `;
});

export const MainContainer = styled.section`
  height: 100vh;
  width: 100%;
`;
