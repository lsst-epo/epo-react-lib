import * as Styled from "./styles";
import Link from "next/link";
import ResponsiveImage from "@/atomic/ResponsiveImage";
import { ImageProps } from "@/atomic/Image";
import IconComposer from "@/svg/IconComposer";
import { FunctionComponent } from "react";

interface TileProps {
  image: ImageProps["image"];
  isVideo: boolean;
  link: string;
  title: string;
}

const Tile: FunctionComponent<TileProps> = ({
  image,
  isVideo,
  link,
  title,
}) => {
  return (
    <Link legacyBehavior href={link} passHref>
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
