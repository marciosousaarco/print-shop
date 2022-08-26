import { useNavigate } from "react-router-dom";
import * as Style from "./style";
import { data } from "../../utils/SidebarData";

import { ISidadebarProps } from "../../types/sidebar";

import { useSelector } from "react-redux";

export const SideBar = () => {
  const navigate = useNavigate();

  const isActiveSidebarState = useSelector(
    (state: ISidadebarProps) => state.controledSidebar.isActive
  );

  return (
    <Style.Sidebar isActive={isActiveSidebarState}>
      {data.length > 0 &&
        isActiveSidebarState &&
        data.map((order) => {
          console.log(order)
          return (
            <Style.ListItem onClick={() => navigate(order.link)}>
              <li className="order-linting-icon">{order.icon}</li>
              <li className="order-linting-title">{order.title}</li>
            </Style.ListItem>
          );
        })}
    </Style.Sidebar>
  );
};
