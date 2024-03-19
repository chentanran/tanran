import { Scene } from 'three'
import { loadFBX } from '../utils'
import { SurroundLine } from '../effect/surroundLine'

export class City {
  scene: Scene
  constructor(scene: Scene) {
    this.scene = scene
    this.loadCity()
  }

  loadCity() {
    // 加载模型， 渲染到画布上
    loadFBX('/src/model/beijing.fbx').then((object: any) => {
      object.traverse((child: any) => {
        if (child.isMesh) {
          new SurroundLine(this.scene, child)
        }
      })
    })
  }

  start() {}
}