import * as THREE from "three";

export const AU_TO_VIZ_SCALER = 100;
export const DAY_PER_VIZ_SEC = 1;

export const ORBITAL_COLORS = {
  sun: {
    objectColor: "#f8da86",
  },
  mercury: {
    objectColor: "#dce0e3",
    orbitColor: "#a6a9ab",
  },
  venus: {
    objectColor: "#cd84ec",
    orbitColor: "#9c65b4",
  },
  earth: {
    objectColor: "#3f9ef0",
    orbitColor: "#3079b8",
  },
  mars: {
    objectColor: "#ed4c4c",
    orbitColor: "#b53a3a",
  },
  jupiter: {
    objectColor: "#f1b571",
    orbitColor: "#b98b57",
  },
  saturn: {
    objectColor: "#f1b571",
    orbitColor: "#b98b57",
  },
  uranus: {
    objectColor: "#3cae3f",
    orbitColor: "#29762b",
  },
  neptune: {
    objectColor: "#3cae3f",
    orbitColor: "#29762b",
  },
  asteroid: {
    objectColor: "#b1f2ef",
    orbitColor: "#6a6e6e",
    objectHighlight: "#00ffff",
    orbitHighlight: "#ffffff",
  },
  neos: {
    objectColor: "#0ff",
    orbitColor: "#b2ffff",
  },
};

export const apollo = {
  a: 1.4700451,
  e: 0.5598234,
  i: 6.35515,
  H: 16.25,
  Ref: "Apollo",
  name: "Apollo",
  Principal_desig: "1932 HA",
  Translated_desig_key: "neo.apollo",
  orbitColor: ORBITAL_COLORS.neos.orbitColor,
  objectColor: ORBITAL_COLORS.neos.objectColor,
  objectRadius: 5,
};

export const atira = {
  a: 0.740919,
  e: 0.3221221,
  i: 25.62023,
  H: 16.3,
  Ref: "Atira",
  Principal_desig: "2003 CP20",
  Translated_desig_key: "neo.atira",
  orbitColor: ORBITAL_COLORS.neos.orbitColor,
  objectColor: ORBITAL_COLORS.neos.objectColor,
  objectRadius: 5,
};

export const amor = {
  a: 1.9194158,
  e: 0.4353207,
  i: 11.87658,
  H: 17.7,
  Ref: "Amor",
  Principal_desig: "1932 EA1",
  Translated_desig_key: "neo.amor",
  orbitColor: ORBITAL_COLORS.neos.orbitColor,
  objectColor: ORBITAL_COLORS.neos.objectColor,
  objectRadius: 5,
};

const mercury = {
  a: 0.3870985999720061,
  e: 0.2056388603896368,
  i: 7.003501846793779,
  Peri: 29.19562974467869,
  Node: 48.29980598100707,
  M: 105.992664141149,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -0.613,
  Ref: "Mercury",
  Principal_desig: "Mercury",
  Translated_desig_key: "planets.mercury",
  orbitColor: ORBITAL_COLORS.mercury.orbitColor,
  objectColor: ORBITAL_COLORS.mercury.objectColor,
  objectRadius: 5,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Mercury" },
    { rowTitle: "Orbit Size", rowContent: "0.39 au" },
    { rowTitle: "Eccentricity", rowContent: "0.21" },
    { rowTitle: "Inclination", rowContent: "7°" },
  ],
};

const venus = {
  a: 0.72332828016788,
  e: 0.006746556763939849,
  i: 3.394393148278816,
  Peri: 55.14940226959075,
  Node: 76.61185476218141,
  M: 280.8773278933108,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -4.384,
  Ref: "Venus",
  Principal_desig: "Venus",
  Translated_desig_key: "planets.venus",
  orbitColor: ORBITAL_COLORS.venus.orbitColor,
  objectColor: ORBITAL_COLORS.venus.objectColor,
  objectRadius: 5,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Venus" },
    { rowTitle: "Orbit Size", rowContent: "0.72 au" },
    { rowTitle: "Eccentricity", rowContent: "0.01" },
    { rowTitle: "Inclination", rowContent: "3°" },
  ],
};

const earth = {
  a: 1.000884650641156,
  e: 0.01753651968213598,
  i: 0.002982836329941365,
  Peri: 268.9829676951879,
  Node: 194.3236213637096,
  M: 357.7530261587325,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -3.9,
  Ref: "Earth",
  Principal_desig: "Earth",
  Translated_desig_key: "planets.earth",
  orbitColor: ORBITAL_COLORS.earth.orbitColor,
  objectColor: ORBITAL_COLORS.earth.objectColor,
  objectRadius: 5,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Earth" },
    { rowTitle: "Orbit Size", rowContent: "1 au" },
    { rowTitle: "Eccentricity", rowContent: "0.02" },
    { rowTitle: "Inclination", rowContent: "0°" },
  ],
};

const mars = {
  a: 1.523736037742823,
  e: 0.09343062300589623,
  i: 1.847582979021374,
  Peri: 286.7112749944513,
  Node: 49.48671092840425,
  M: 124.7071179763737,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -1.52,
  Ref: "Mars",
  Principal_desig: "Mars",
  Translated_desig_key: "planets.mars",
  orbitColor: ORBITAL_COLORS.mars.orbitColor,
  objectColor: ORBITAL_COLORS.mars.objectColor,
  objectRadius: 4,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Mars" },
    { rowTitle: "Orbit Size", rowContent: "1.52 au" },
    { rowTitle: "Eccentricity", rowContent: "0.09" },
    { rowTitle: "Inclination", rowContent: "2°" },
  ],
};

const jupiter = {
  a: 5.202160270171651,
  e: 0.04818088102829143,
  i: 1.303360823367923,
  Peri: 273.5234096674986,
  Node: 100.5220108668394,
  M: 59.11699857122984,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -25.9,
  Ref: "Jupiter",
  Principal_desig: "Jupiter",
  Translated_desig_key: "planets.jupiter",
  orbitColor: ORBITAL_COLORS.jupiter.orbitColor,
  objectColor: ORBITAL_COLORS.jupiter.objectColor,
  // objectRadius: 69911000,
  objectRadius: 7,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Jupiter" },
    { rowTitle: "Orbit Size", rowContent: "5.2 au" },
    { rowTitle: "Eccentricity", rowContent: "0.5" },
    { rowTitle: "Inclination", rowContent: "1°" },
  ],
};

const saturn = {
  a: 9.555965622360498,
  e: 0.05519415582085801,
  i: 2.486075821564771,
  Peri: 337.1287754755643,
  Node: 113.5682939332158,
  M: 265.0305087322729,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -8.914,
  Ref: "Saturn",
  Principal_desig: "Saturn",
  Translated_desig_key: "planets.saturn",
  orbitColor: ORBITAL_COLORS.saturn.orbitColor,
  objectColor: ORBITAL_COLORS.saturn.objectColor,
  objectRadius: 7,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Saturn" },
    { rowTitle: "Orbit Size", rowContent: "9.6 au" },
    { rowTitle: "Eccentricity", rowContent: "0.06" },
    { rowTitle: "Inclination", rowContent: "2°" },
  ],
};

const uranus = {
  a: 19.30117510550269,
  e: 0.04562819752466522,
  i: 0.7724579163336742,
  Peri: 90.49558992124597,
  Node: 74.02362288993339,
  M: 255.8775935340201,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -8.914,
  Ref: "Uranus",
  Principal_desig: "Uranus",
  Translated_desig_key: "planets.uranus",
  orbitColor: ORBITAL_COLORS.uranus.orbitColor,
  objectColor: ORBITAL_COLORS.uranus.objectColor,
  objectRadius: 7,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Uranus" },
    { rowTitle: "Orbit Size", rowContent: "19 au" },
    { rowTitle: "Eccentricity", rowContent: "0.05" },
    { rowTitle: "Inclination", rowContent: "1°" },
  ],
};

const neptune = {
  a: 30.18125663855555,
  e: 0.01265249163321324,
  i: 1.773758782382816,
  Peri: 268.6501234941719,
  Node: 131.9097792363592,
  M: 319.1997389570363,
  epoch_jd: 2460677.0,
  epoch_mjd: 60676.5,
  epoch_str_utc: "2025-01-01T12:00:00.000",
  H: -25.9,
  Ref: "Neptune",
  Principal_desig: "Neptune",
  Translated_desig_key: "planets.neptune",
  orbitColor: ORBITAL_COLORS.neptune.orbitColor,
  objectColor: ORBITAL_COLORS.neptune.objectColor,
  objectRadius: 6,
  object_details: [
    { rowTitle: "Scientific Name", rowContent: "Neptune" },
    { rowTitle: "Orbit Size", rowContent: "30 au" },
    { rowTitle: "Eccentricity", rowContent: "0.01" },
    { rowTitle: "Inclination", rowContent: "2°" },
  ],
};

export const getRefObjProps = (id) => {
  return (
    {
      mercury,
      venus,
      earth,
      mars,
      jupiter,
      saturn,
      uranus,
      neptune,
      atira,
      apollo,
      amor,
    }[id] || null
  );
};

export const formatValue = function (number, decimalPlaces) {
  return Number.parseFloat(Number.parseFloat(number).toFixed(decimalPlaces));
};

export const randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
    0, // aRotation
  );
};

export const getLineGeometry = (points) => {
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
export const auToUnit = (value) => {
  return value * AU_TO_VIZ_SCALER;
};
// args must be in VIZ_UNITS
export const unitToAu = (value) => {
  return value / AU_TO_VIZ_SCALER;
};
// a must be in AU
export const getMinorAxis = (a, e) => {
  return auToUnit(a * Math.sqrt(1 - e ** 2));
};

export const auToMeters = (value) => {
  return 1.496e11 * value;
};

export const metersToAu = (value) => {
  return value / 1.496e11;
};

export const degsToRads = (i) => {
  return i * (Math.PI / 180);
};

export const radsToDegs = (i) => {
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

export const getRadius = (magnitude) => {
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
      ascendingNode ? degsToRads(ascendingNode) : 0,
    );
};

export const getLabelSize = (zoomLevel, defaultZoom) => {
  const minSize = 12;
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
