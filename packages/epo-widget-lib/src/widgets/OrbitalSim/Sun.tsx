import React, { FC } from 'react';
import { Html } from '@react-three/drei';
import { getLabelSize, ORBITAL_COLORS } from './orbitalUtilities';
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

type SunPropTypes = {
  zoomLevel: Number,
  defaultZoom: Number
}

const Sun: FC<SunPropTypes> = ({ defaultZoom, zoomLevel }) => {
  const { t } = useTranslation();
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[9, 16, 8]} />
      <meshBasicMaterial
        attach="material"
        color={ORBITAL_COLORS.sun.objectColor}
      />
      <Html>
        <Styled.SunLabel
          style={{
            fontSize: getLabelSize(zoomLevel, defaultZoom),
          }}
        >
          {t("orbital_sim.astronomy.orbital_bodies.sun")}
        </Styled.SunLabel>
      </Html>
    </mesh>
  );
}

export default Sun;
