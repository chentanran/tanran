import {
  DirectionalLight,
  PointLight,
  SpotLight,
  RectAreaLight,
  Color,
  AmbientLight,
  HemisphereLight
} from "https://cdn.skypack.dev/three@0.136.0";

function createLights() {
  const mainlight = new DirectionalLight('white', 8)
  mainlight.position.set(10, 10, 10)

  mainlight.intensity = 0

  // const ambientLight = new AmbientLight('white', 2)
  const ambientLight = new HemisphereLight('white', 'darkslategrey', 5)
  // ambientLight.color = ''
  // ambientLight.groundColor = 'skyblue'

  mainlight.tick = () => {
    mainlight.position.x += 1
    mainlight.position.y += 1
    mainlight.position.z += 1
  }

  return { mainlight, ambientLight };
}

export { createLights };
