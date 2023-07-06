import { FunctionComponent, PropsWithChildren } from "react";
import {
  StyledMenuGroup,
  StyledSeparator,
  StyledMenuGroupTitle,
} from "./styles";

interface MenuGroupProps {
  title: string;
}

const MenuGroup: FunctionComponent<PropsWithChildren<MenuGroupProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <StyledMenuGroup role="group">
        <StyledMenuGroupTitle>{title}</StyledMenuGroupTitle>
        {children}
      </StyledMenuGroup>
      <StyledSeparator />
    </>
  );
};

MenuGroup.displayName = "Layout.SlideoutMenu.MenuGroup";

export default MenuGroup;
