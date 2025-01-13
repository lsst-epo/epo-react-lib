import { FunctionComponent, PropsWithChildren } from "react";
import { type LinkProps } from "next/link";
import IconComposer, { type IconKey } from "@/svg/IconComposer";
import * as Styled from "./styles";

export interface MasonryImageProps {
  linkProps: LinkProps;
  icon?: IconKey;
  className?: string;
}

const MasonryImage: FunctionComponent<PropsWithChildren<MasonryImageProps>> = ({
  children,
  icon,
  linkProps,
  className,
}) => {
  return (
    <Styled.TileLink prefetch={false} {...linkProps} className={className}>
      {children}
      {icon && (
        <Styled.TileIcon>
          <IconComposer size={40} icon={icon} />
        </Styled.TileIcon>
      )}
    </Styled.TileLink>
  );
};

MasonryImage.displayName = "Molecule.Masonry.Image";

export default MasonryImage;
