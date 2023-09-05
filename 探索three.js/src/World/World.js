import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js'
import { createControls } from './systems/controls.js'
// import { createMeshGroup } from './components/meshGroup.js'
import { Train } from './components/Train/Train.js'
import { loadBirds } from './components/birds/birds.js'

let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    loop = new Loop(camera, scene, renderer)

    container.append(renderer.domElement);

    controls = createControls(camera, renderer.domElement)

    // const controls = createControls(camera, renderer.domElement)
    // container.addEventListener('change', () => {
    //   this.render()
    // })

    // const { cube, cube1, cube2 } = createCube()
    const { mainlight, ambientLight } = createLights()
    // scene.add(cube, mainlight, ambientLight)
    // scene.add(cube1, mainlight, ambientLight)
    // scene.add(cube2, mainlight, ambientLight)

    // const cube2 = createCube()
    // console.log(cube2, 'cube2')
    // cube2.position.set(3, 0, 0)
    // scene.add(cube2)

    // loop.updatables.push(cube)
    // loop.updatables.push(camera)
    // loop.updatables.push(light)

    // const meshGroup = createMeshGroup()
    // loop.updatables.push(controls)
    scene.add(ambientLight, mainlight)

    // const train = new Train()
    // loop.updatables.push(train)
    // scene.add(ambientLight, mainlight, train)

    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render()
    // }

  }
  
  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds()
    controls.target.copy(parrot.position)
    loop.updatables.push(parrot, flamingo, stork)
    scene.add(parrot, flamingo, stork)
  }
}
  
export { World };