import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js'

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas)
  // controls.enablePan = true
  // 阻尼
  controls.enableDamping = true
  controls.dampingFactor = 1
  // 位置
  // controls.target.set(1,2,3)

  controls.autoRotate = true;
  controls.autoRotateSpeed = 10;

  controls.minDistance = 5;
  controls.maxDistance = 20;

  controls.minPolarAngle = 0; // default
  controls.maxPolarAngle = Math.PI * 2; // defaul

  controls.minAzimuthAngle = - Infinity; // default
  controls.maxAzimuthAngle = Infinity; // default

  // controls.enableRotate = false;
  // controls.enableZoom = false;
  // controls.enablePan = false;

  controls.tick = () => controls.update();

  return controls
}

export { createControls }