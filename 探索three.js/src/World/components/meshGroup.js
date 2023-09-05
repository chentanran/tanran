import { SphereBufferGeometry, Group, MathUtils, Mesh, MeshStandardMaterial, TextureLoader } from 'https://cdn.skypack.dev/three@0.136.0';

function createMaterial() {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/assets/textures/uv-test-col.png')
  const material = new MeshStandardMaterial({ map: texture });
  return material
}

function createMeshGroup() {
  const group = new Group()

  const geometry = new SphereBufferGeometry(0.25, 20, 20)

  // const material = new MeshStandardMaterial({ color: 'green' })
  // const material = createMaterial()
  const material = new MeshStandardMaterial({
    color: 'red',
    flatShading: true,
  })

  const protoShere = new Mesh(geometry, material)

  group.add(protoShere)

  for (let i = 0; i < 1; i += 0.1) {
    const sphere = protoShere.clone()
    sphere.position.x = Math.cos(2 * Math.PI * i)
    sphere.position.y = Math.sin(2 * Math.PI * i)
    sphere.scale.multiplyScalar(0.01 + i)
    group.add(sphere)
    
  }

  const radiansPerSecond = MathUtils.degToRad(120)

  group.tick = (delta) => {
    group.rotation.z += delta * radiansPerSecond
  }

  return group
}

export { createMeshGroup }