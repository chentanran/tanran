import * as THREE from 'three'

export class SurroundLine {
  scene: any
  child: any
  constructor(scene: any, child: any) {
    this.scene = scene
    this.child = child

    this.render()
  }

  render() {
    const material = new THREE.MeshLambertMaterial({
      color: 0xffc0cb
    })
    const mesh = new THREE.Mesh(this.child.geometry, material)
    // 让 mesh 继承 child 的旋转，缩放，平移
    mesh.position.copy(this.child.position)
    mesh.rotation.copy(this.child.rotation)
    mesh.scale.copy(this.child.scale)

    this.scene.add(mesh)
  }
}