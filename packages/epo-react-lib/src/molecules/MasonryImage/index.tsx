import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { type LinkProps } from "next/link";
import IconComposer, { type IconKey } from "@/svg/IconComposer";
import * as Styled from "./styles";

export interface MasonryImageProps {
  linkProps: LinkProps;
  icon?: ReactNode | IconKey;
  className?: string;
}

const MasonryImage: FunctionComponent<PropsWithChildren<MasonryImageProps>> = ({
  children,
  icon,
  linkProps,
  className,
}) => {
  return (
    <Styled.TileLink {...linkProps} className={className}>
      {children}
      {icon && (
        <Styled.TileIcon>
          {typeof icon === "string" ? (
            <IconComposer size={40} icon={icon} />
          ) : (
            icon
          )}
        </Styled.TileIcon>
      )}
    </Styled.TileLink>
  );
};

MasonryImage.displayName = "Molecule.Masonry.Image";

export default MasonryImage;
