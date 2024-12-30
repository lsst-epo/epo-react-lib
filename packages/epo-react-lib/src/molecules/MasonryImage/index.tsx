import { FunctionComponent, PropsWithChildren } from "react";
import { type LinkProps } from "next/link";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";

interface MasonryImageProps {
  linkProps: LinkProps;
  isVideo?: boolean;
}

const MasonryImage: FunctionComponent<PropsWithChildren<MasonryImageProps>> = ({
  children,
  isVideo = false,
  linkProps,
}) => {
  return (
    <Styled.TileLink prefetch={false} {...linkProps}>
      {children}
      {isVideo && (
        <Styled.PlayButton>
          <IconComposer size={40} icon="play" />
        </Styled.PlayButton>
      )}
    </Styled.TileLink>
  );
};

MasonryImage.displayName = "Molecule.Masonry.Image";

export default MasonryImage;
