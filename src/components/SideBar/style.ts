import styled, { css } from "styled-components";

type propsSidebar = {
  isActive: boolean;
};

export const Sidebar = styled.nav(({ isActive }: propsSidebar) => {
  return css`
    height: calc(100% - 60px);
    width: ${isActive ? '280px' : '0px'};
    background: #fff;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    transition: linear .17s;
  `;
});

export const ListItem = styled.ul`
  width: 85%;
  display: flex;
  justify-content: space-around;
  margin: 8px 8px;
  align-items: center;
  list-style: none;
  padding: 5px;
  border-radius: 20px;
  transition: ease-in-out 0.3s;
  background: transparent;

  .order-linting-icon {
    margin: 0 auto 0 10px;
  }

  .order-linting-icon svg {
    margin: 0;
    background: none;
    color: transparent;
  }

  .order-linting-title {
    margin: 0 30% 0 auto;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    background: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(130%);
    background: #ffaee2;
    transform: scale(1.05);
  }
`;