import * as Styled from "./styles";
import Link from "next/link";
import ResponsiveImage from "@/atomic/ResponsiveImage";
import IconComposer from "@/svg/IconComposer";
import { FunctionComponent } from "react";
import { ImageShape } from "@/types/image";

interface TileProps {
  image: ImageShape;
  isVideo: boolean;
  link: string;
  title: string;
  prefetch?: boolean;
}

const Tile: FunctionComponent<TileProps> = ({
  image,
  isVideo,
  link,
  title,
  prefetch = false,
}) => {
  return (
    <Link legacyBehavior href={link} passHref prefetch={prefetch}>
      <Styled.TileLink>
        <ResponsiveImage image={image} ratio="16:9" title={title} />
        {isVideo && (
          <Styled.PlayButton>
            <IconComposer icon="play" />
          </Styled.PlayButton>
        )}
      </Styled.TileLink>
    </Link>
  );
};

Tile.displayName = "Layout.MasonryGridTile";

export default Tile;
