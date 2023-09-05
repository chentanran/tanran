import { MeshStandardMaterial, TextureLoader } from "https://cdn.skypack.dev/three@0.136.0"

function createMaterial() {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/assets/textures/uv-test-col.png')
  const material = new MeshStandardMaterial({ map: texture });
  return material
}

function createMaterial1() {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png')
  const material = new MeshStandardMaterial({ map: texture });
  return material
}

function createMaterial2() {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png')
  const material = [
    
    new MeshStandardMaterial({ color: 'white', opacity: 0.8, transparent: true }),
    new MeshStandardMaterial({ map: texture }),
    new MeshStandardMaterial({ color: 'white', opacity: 0.8, transparent: true }),
    
  ]
  return material
}


function createMaterials() {
  // const body = new MeshStandardMaterial({
  //   color: 'firebrick',
  //   flatShading: true
  // })

  const body = createMaterial()

  // const detail = new MeshStandardMaterial({
  //   color: 'darkslategray',
  //   flatShading: true
  // })

  const detail = createMaterial1()

  const test = createMaterial2()

  return { body, detail, test }
}

export { createMaterials }