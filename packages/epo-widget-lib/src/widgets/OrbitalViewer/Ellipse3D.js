import * as THREE from 'three';
// import { getCurve } from './orbitalUtilities.js';

function Ellipse3D(
  aX = 0,
  aY = 0,
  xRadius,
  yRadius,
  startAngle = 0,
  endAngle = 2 * Math.PI,
  aClockwise = false,
  aRotation = 0
) {
  THREE.EllipseCurve.call(this);
}

Ellipse3D.prototype = Object.create(THREE.EllipseCurve.prototype);
Ellipse3D.prototype.constructor = Ellipse3D;

CustomSinCurve.prototype.getPoint = function(t) {
  var tx = t * 3 - 1.5;
  var ty = Math.sin(2 * Math.PI * t);
  var tz = 0;

  return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
};

export default Ellipse3D;
