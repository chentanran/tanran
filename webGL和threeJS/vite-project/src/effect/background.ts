import * as THREE from 'three'

export class Background {
  scane: any
  url: string
  constructor(scene: any) {
    this.scane = scene
    this.url = '/src/assets/white-bg.png'

    this.init()
  }

  init() {
    const loader = new THREE.TextureLoader()
    const geometry = new THREE.SphereGeometry(5000, 32, 32)
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(this.url),
      side: THREE.BackSide,
    })
    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.copy({
      x: 0,
      y: 0,
      z: 0,
    })
    this.scane.add(sphere)
  }
}