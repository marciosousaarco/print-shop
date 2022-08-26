import * as Style from "./style";
import { useDispatch, useSelector } from "react-redux";

import { changedSidebar } from "../../features/sidebar/sidebar";
import { ISidadebarProps } from "../../types/sidebar";

import { BiMenu, BiMenuAltLeft } from "react-icons/bi";

type headerProps = {
  size: string;
};

export const Header = ({ size }: headerProps) => {
  const dispatch = useDispatch();
  const isActiveSidebarState = useSelector(
    (state: ISidadebarProps) => state.controledSidebar.isActive
  );
  return (
    <>
      {size !== "/" && (
        <Style.Container>
          <Style.Button onClick={() => dispatch(changedSidebar())}>
            {isActiveSidebarState ? (
              <BiMenu size={35} color="#fff" />
            ) : (
              <BiMenuAltLeft size={35} color="#fff" />
            )}
          </Style.Button>
        </Style.Container>
      )}
    </>
  );
};
