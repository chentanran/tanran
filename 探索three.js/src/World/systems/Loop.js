import { Clock } from 'https://cdn.skypack.dev/three@0.136.0'

const clock = new Clock()

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera
    this.scene = scene
    this.renderer = renderer
    this.updatables = []
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick()
      this.renderer.render(this.scene, this.camera)
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null)
  }

  tick() {
    const delta = clock.getDelta()
    for (const object of this.updatables) {
      object.tick(delta)
    }
  }
}

export { Loop }