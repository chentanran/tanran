import { BoxBufferGeometry, Mesh, MeshBasicMaterial, CircleGeometry, BufferGeometry, MeshStandardMaterial, Euler, MathUtils, Matrix4, TextureLoader, SphereBufferGeometry } from 'https://cdn.skypack.dev/three@0.136.0';

function createMaterial() {
  const textureLoader = new TextureLoader()

  // const texture = textureLoader.load('/assets/textures/uv-test-bw.png')
  const texture = textureLoader.load('/assets/textures/uv-test-col.png')

  // const spec = {
  //   color: 'purple',
  // }
  const material = new MeshStandardMaterial({ map: texture });
  return material
}

function createCube() {
  // create a geometry
  // const geometry = new BoxBufferGeometry(2, 2, 2);
  // const geometry = new CircleGeometry(2, 100, 0, 2 * Math.PI);

  const radius = 0.25;
  const widthSegments = 16;
  const heightSegments = 16;

  const geometry = new SphereBufferGeometry(
    radius,
    widthSegments,
    heightSegments
  );

  // const material = new MeshBasicMaterial();

 const material = createMaterial()

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  const cube1 = cube.clone();
  const cube2 = cube.clone();

  // cube.rotation.set(-0.5, -0.1, 0.8)
  // cube.rotation = new Euler()
  cube.rotation.x = 1;
  cube.rotation.y = 1;
  cube.rotation.z = 1

  cube1.rotation.x = 0.5;
  cube1.rotation.y = 2;
  cube1.rotation.z = 2

  // cube.matrix = new Matrix4();
  // cube.matrixWorld = new Matrix4();

  // move A relative to its parent the scene
// cube.position.x = 5;

cube.updateMatrix();
cube.updateMatrixWorld();

  // cube.rotation.set(2, 2, 2);

  // cube.position.x = 1
  // cube.position.y = 0
  // cube.position.z = 1
  cube.position.set(1, 1, 1)

  cube.scale.set(1, 1, 1)

  cube.tick = () => {
    cube.rotation.z += 0.02;
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
  }

  cube1.position.set(0.5, 0.5, 0.5)

  cube1.scale.set(1, 1, 1)

  cube1.tick = () => {
    cube.rotation.z += 1;
    cube.rotation.x += 1;
    cube.rotation.y += 1;
  }

  // const radiansPerSecond = MathUtils.degToRad(30);
  // cube.tick = (delta) => {
  //   cube.rotation.z += radiansPerSecond * delta;
  //   cube.rotation.x += radiansPerSecond * delta;
  //   cube.rotation.y += radiansPerSecond * delta;
  // }

  // cube = new Vec

  return { cube, cube1, cube2 };
}

export { createCube };