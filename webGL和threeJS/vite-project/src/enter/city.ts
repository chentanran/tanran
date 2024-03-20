import { Scene } from 'three'
import { loadFBX } from '../utils'
import { SurroundLine } from '../effect/surroundLine'
import { Background } from '../effect/background'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'

export class City {
  scene: Scene
  camera: THREE.PerspectiveCamera
  tweenPosition: any
  tweenRotation: any
  height: { value: number }
  time: { value: number }
  constructor(scene: Scene, camera: THREE.PerspectiveCamera) {
    this.scene = scene
    this.camera = camera
    this.tweenPosition = null
    this.tweenRotation = null
    
    this.height = {
      value: 5
    }

    this.time = {
      value: 0
    }

    this.loadCity()
  }

  loadCity() {
    // 加载模型， 渲染到画布上
    loadFBX('/src/model/beijing.fbx').then((object: any) => {
      object.traverse((child: any) => {
        if (child.isMesh) {
          new SurroundLine(this.scene, child, this.height, this.time)
        }
      })
      this.initEffect()
    })
  }

  initEffect() {
    new Background(this.scene)

    this.addClick()
  }

  addClick() {
    let flag = true
    document.onmousedown = () => {
      flag = true

      document.onmousemove = () => {
        flag = false
      }
    }

    document.onmouseup = (event) => {
      if (flag) {
        this.clickEvent(event)
      }
      document.onmousemove = null
    }
  }

  clickEvent(event: any) {
    // 获取到浏览器坐标
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1

    // 创建设备坐标(三维)
    const standarVector = new THREE.Vector3(x, y, 0.1)

    // 转化为世界坐标
    const worldVector = standarVector.unproject(this.camera)

    // 做序列化
    const ray = worldVector.sub(this.camera.position).normalize()

    // 创建一个射线发射器，用来发射一条射线
    const raycaster = new THREE.Raycaster(this.camera.position, ray)

    // 返回射线碰撞到的物体
    const intersects = raycaster.intersectObjects(this.scene.children, true)
    let point3d = null
    if (intersects.length > 0) {
      point3d = intersects[0]
    }
    console.log(point3d, 'pount3d')
    if (point3d) {
      const proportion = 1
      // 开始动画
      const time = 2000

      this.tweenPosition = new TWEEN.Tween(this.camera.position).to({
        x: point3d.point.x * proportion,
        y: point3d.point.y * proportion,
        z: point3d.point.z * proportion
      }, time).start()
      
      this.tweenRotation = new TWEEN.Tween(this.camera.rotation).to({
        x: this.camera.rotation.x,
        y: this.camera.rotation.y,
        z: this.camera.rotation.z
      }, time).start()
    }
  }

  start(delta: number) {
    if (this.tweenPosition && this.tweenRotation) {
      this.tweenPosition.update()
      this.tweenRotation.update()
    }

    this.time.value += delta

    this.height.value += 0.4
    if (this.height.value > 160) {
      this.height.value = 5
    }
  }
}