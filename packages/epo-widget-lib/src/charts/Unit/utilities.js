export const units = {
  hubbleConstant: ' km/s/Mpc',
  temperature: ' K',
  luminosity: ' L',
  stellarMass: ' M',
  mass: ' kg',
  lifetime: ' Gyr',
  radius: ' R',
  count: ' stars',
  distance: ' Mpc',
  velocity: ' m/s',
  velocity_large: ' km/s',
  inclination: '°',
  semimajor_axis: ' au',
  moid: ' au',
  diameter: ' m',
  craterDiameter: ' m',
  craterDepth: ' m',
  kineticEnergy: ' J',
  volume: ' m³',
  density: ' kg/m³',
  overPressure: ' Pa',
  observerDistance: ' m',
};

export const renderUnit = function(type) {
  return units[type] || null;
};
