import * as Styled from "./styles";
import Tile from "./MasonryGridTile";
import { FunctionComponent } from "react";
import { GalleryEntry, GalleryItemCategory } from "@/types/gallery";

interface MasonryGridProps {
  items: GalleryEntry[];
  randomize?: boolean;
}

const MasonryGrid: FunctionComponent<MasonryGridProps> = ({
  items,
  randomize,
}) => {
  const template = (i: number, width: number) => `
          a:nth-child(${i + 1}n + ${i + 1}) {
            width: ${width}%;
          }
        `;

  const getBrickSizes = () => {
    const widthMap = [20, 20, 20, 20, 30, 30, 30, 40, 40, 80];
    let str = "";
    for (let i = 0; i < 20; i++) {
      const width = randomize
        ? widthMap[Math.floor(Math.random() * widthMap.length)]
        : widthMap[i];
      str += template(i, width);
    }
    return str;
  };

  const checkIfVideo = (cats: GalleryItemCategory[]) =>
    cats?.[0]?.slug === "video";

  const brickSizes = getBrickSizes();

  return (
    <Styled.BrickRow $brickSizes={brickSizes}>
      {items.map(({ galleryItemCategory, id, image, title, uri }) => (
        <Tile
          key={id}
          image={image?.[0]}
          link={`/${uri}`}
          title={title}
          isVideo={checkIfVideo(galleryItemCategory)}
        />
      ))}
    </Styled.BrickRow>
  );
};

MasonryGrid.displayName = "Layout.MasonryGrid";

export default MasonryGrid;
