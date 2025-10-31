import * as THREE from 'three';

export const AU_TO_VIZ_SCALER = 100;
export const DAY_PER_VIZ_SEC = 1;

export const ORBITAL_COLORS = {
  sun: {
    objectColor: '#f8da86',
  },
  mercury: {
    objectColor: '#dce0e3',
    orbitColor: '#a6a9ab',
  },
  venus: {
    objectColor: '#cd84ec',
    orbitColor: '#9c65b4',
  },
  earth: {
    objectColor: '#3f9ef0',
    orbitColor: '#3079b8',
  },
  mars: {
    objectColor: '#ed4c4c',
    orbitColor: '#b53a3a',
  },
  jupiter: {
    objectColor: '#f1b571',
    orbitColor: '#b98b57',
  },
  neptune: {
    objectColor: '#3cae3f',
    orbitColor: '#29762b',
  },
  asteroid: {
    objectColor: '#b1f2ef',
    orbitColor: '#6a6e6e',
    objectHighlight: '#00ffff',
    orbitHighlight: '#ffffff',
  },
};

const earth = {
  a: 1,
  e: 0.01671022,
  i: 0,
  H: -3.9,
  Ref: 'Earth',
  Principal_desig: 'Earth',
  Translated_desig_key: 'astronomy::planets.earth',
  orbitColor: ORBITAL_COLORS.earth.orbitColor,
  objectColor: ORBITAL_COLORS.earth.objectColor,
  // objectRadius: 6371000,
  objectRadius: 5,
};

const mars = {
  a: 1.52366231,
  e: 0.09341233,
  i: 1.85061,
  H: -1.52,
  Ref: 'Mars',
  Principal_desig: 'Mars',
  Translated_desig_key: 'astronomy::planets.mars',
  orbitColor: ORBITAL_COLORS.mars.orbitColor,
  objectColor: ORBITAL_COLORS.mars.objectColor,
  objectRadius: 4,
};

const jupiter = {
  a: 5.2028,
  e: 0.048,
  i: 1.31,
  H: -25.9,
  Ref: 'Jupiter',
  Principal_desig: 'Jupiter',
  Translated_desig_key: 'astronomy::planets.jupiter',
  orbitColor: ORBITAL_COLORS.jupiter.orbitColor,
  objectColor: ORBITAL_COLORS.jupiter.objectColor,
  // objectRadius: 69911000,
  objectRadius: 7,
};

const neptune = {
  a: 30.06896348,
  e: 0.00858587,
  i: 1.76917,
  H: -25.9,
  Ref: 'Neptune',
  Principal_desig: 'Neptune',
  Translated_desig_key: 'astronomy::planets.neptune',
  orbitColor: ORBITAL_COLORS.neptune.orbitColor,
  objectColor: ORBITAL_COLORS.neptune.objectColor,
  // objectRadius: 24622000,
  objectRadius: 6,
};

export const getRefObjProps = id => {
  return (
    {
      neptune,
      earth,
      mars,
      jupiter,
    }[id] || null
  );
};

// args must be in VIZ_UNITS
export const getCurve = (xRadius, yRadius, aX = 0, aY = 0) => {
  return new THREE.EllipseCurve(
    aX, // aX
    aY, // aY
    xRadius, // xRadius
    yRadius, // yRadius
    0, // aStartAngle
    2 * Math.PI, // aEndAngle
    false, // aClockwise
    0 // aRotation
  );
};

export const getLineGeometry = points => {
  return new THREE.BufferGeometry().setFromPoints(points);
};

// pos and sunPos must be Vector3
export const getAngleFromPos = (pos, sunPos) => {
  // x=c; y=a; z=b
  const z = pos.distanceTo(sunPos);
  const { x, y } = pos;
  const rads = Math.acos((z ** 2 + x ** 2 - y ** 2) / (2 * z * x));
  return (rads * 180) / Math.PI;
};

// path must be EllipseCurve
export const getPosFromArcLength = (arcLength, path) => {
  const { x, y } = path.getPoint(arcLength);
  return new THREE.Vector3(x, y, 0);
};

// args must be in AU
export const auToUnit = value => {
  return value * AU_TO_VIZ_SCALER;
};
// args must be in VIZ_UNITS
export const unitToAu = value => {
  return value / AU_TO_VIZ_SCALER;
};
// a must be in AU
export const getMinorAxis = (a, e) => {
  return auToUnit(a * Math.sqrt(1 - e ** 2));
};

export const auToMeters = value => {
  return 1.496e11 * value;
};

export const metersToAu = value => {
  return value / 1.496e11;
};

export const degsToRads = i => {
  return i * (Math.PI / 180);
};

export const radsToDegs = i => {
  return i * (180 / Math.PI);
};
// args must be in VIZ_UNITS
export const getVelocity = (radius, maj) => {
  const GM = 0.000296005155 * AU_TO_VIZ_SCALER ** 3; // Converted from AU3/day2 to UNIT3/day2
  return Math.sqrt(GM * (2 / radius - 1 / maj));
};
// args must be in VIZ_UNITS
export const getFocus = (majAxis, minAxis) => {
  return Math.sqrt(majAxis ** 2 - minAxis ** 2);
};

export const getDiameter = (magnitude, albedo) => {
  return (1329 / Math.sqrt(albedo)) * 10 ** (-0.2 * magnitude);
};

export const getRadius = magnitude => {
  const realRadius = getDiameter(magnitude, 0.15);
  const adjustedRadius = 0.002 * realRadius * AU_TO_VIZ_SCALER; // Wrong!!!!!!
  const [minSize, maxSize] = [2, 7];

  if (adjustedRadius < minSize) {
    return minSize;
  }

  if (adjustedRadius > maxSize) {
    return maxSize;
  }

  return adjustedRadius;
};

export const convert2dTo3d = (vector2D, orbitData) => {
  const { i, Peri: peri, Node: ascendingNode } = orbitData;
  const yAxisOfRotation = new THREE.Vector3(0, 1, 0);
  const zAxisOfRotation = new THREE.Vector3(0, 0, 1);

  return new THREE.Vector3(vector2D.x, vector2D.y, 0)
    .applyAxisAngle(zAxisOfRotation, peri ? degsToRads(peri + 90) : 0)
    .applyAxisAngle(yAxisOfRotation, degsToRads(i))
    .applyAxisAngle(
      zAxisOfRotation,
      ascendingNode ? degsToRads(ascendingNode) : 0
    );
};

export const getLabelSize = (zoomLevel, defaultZoom) => {
  const minSize = 4;
  const maxSize = 15;
  const scaledLabelSize = maxSize * (zoomLevel / defaultZoom);

  if (scaledLabelSize <= minSize) {
    return minSize;
  }

  if (scaledLabelSize >= maxSize) {
    return maxSize;
  }

  return scaledLabelSize;
};
