import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js'

async function loadBirds() {
  const loader = new GLTFLoader()

  // const parrotData = await loader.loadAsync('/assets/models/Parrot.glb')
  // const flamingoData = await loader.loadAsync('/assets/models/Flamingo.glb');
  // const storkData = await loader.loadAsync('/assets/models/Stork.glb');

  // console.log(parrotData, 'parrotData')

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),
    loader.loadAsync('/assets/models/Flamingo.glb'),
    loader.loadAsync('/assets/models/Stork.glb')
  ])

  console.log(parrotData, 'parrotData')

  const parrot = setupModel(parrotData)
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);

  return { parrot, flamingo, stork }
}

export { loadBirds }