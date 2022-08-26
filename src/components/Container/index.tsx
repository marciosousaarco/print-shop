import { Outlet, useLocation } from "react-router-dom";

import { Header } from "../header";
import { SideBar } from "../SideBar";
import { ISidadebarProps } from '../../types/sidebar';

import { useSelector } from "react-redux";

import * as Styled from "./style";

export const Container = () => {
  const pathNameUrl = useLocation();
  const isActiveSidebarState = useSelector(
    (state: ISidadebarProps) => state.controledSidebar.isActive
  );

  return (
    <Styled.MainContainer>
      <SideBar  />
      <Header size={pathNameUrl.pathname} />
      <Styled.Container sidebarIsActive={isActiveSidebarState}>
        <Outlet />
      </Styled.Container>
    </Styled.MainContainer>
  );
};
