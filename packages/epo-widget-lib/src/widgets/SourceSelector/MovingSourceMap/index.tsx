import { FunctionComponent } from "react";
import { MovingSources } from "@/types/astro";
import { getRadius } from "../utils";
import * as Styled from "./styles";

export interface MovingSourceMapProps {
  width: number;
  height: number;
  isPlaying: boolean;
  movingSources: MovingSources[];
  selectedSource: string[];
  currentIndex: number;
}

const invertY = (y: number | string, height: number) => {
  if (typeof y === "string") {
    const isPercent = y.includes("%");
    return isPercent ? `${100 - parseFloat(y)}%` : height - parseFloat(y);
  }

  return height - y;
};

const MovingSourceMap: FunctionComponent<MovingSourceMapProps> = ({
  width,
  height,
  movingSources,
  selectedSource,
  currentIndex
}) => {

  return (
    <>    {
      movingSources && movingSources.map((movingSource, idx) => {
        let currentFrame = movingSource.sources[currentIndex];
        if(selectedSource.includes(movingSource.id)) {
          return <Styled.SVG
            preserveAspectRatio="xMidYMid meet"
            viewBox={`0 0 ${width} ${height}`}
          >
            <g role="list">
                  <Styled.Point
                    key={`${movingSource.id}-${idx}`}
                    cx={currentFrame.x}
                    cy={invertY(currentFrame.y, height)}
                    fill="transparent"
                    stroke={movingSource.color ?? "#fed828" } 
                    strokeWidth={3}
                    tabIndex={0}
                    role="listitem"
                    r={`${getRadius(movingSource.type,NaN) * 100}%`}
                    id={`${movingSource.id}`}
                  />
            </g>
          </Styled.SVG>
        }
        
      })
    }
    </>

    
  );
};

MovingSourceMap.displayName = "Widgets.MovingSourceMap";

export default MovingSourceMap;
