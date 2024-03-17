import * as THREE from 'three'

export const initCity = () => {
  // 获取 canvas 元素
  const canvas:any = document.getElementById('webgl')

  // 创建场景
  const scene = new THREE.Scene()

  // 创建相机
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000)
  camera.position.set(0, 0, 100)
  scene.add(camera)
  
  // 添加灯光
  scene.add(new THREE.AmbientLight(0xadadad))
  const directionLight = new THREE.DirectionalLight(0xffffff)
  directionLight.position.set(0, 0, 0)
  scene.add(directionLight)

  const box = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshLambertMaterial({ color: 0xff0000 })
  scene.add(new THREE.Mesh(box, material))

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ canvas })
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 设置像素比
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  // 设置场景颜色
  renderer.setClearColor(new THREE.Color(0x000000), 1)

  // 渲染场景
  renderer.render(scene, camera)

  window.addEventListener('resize', () => {
    // 更新宽高比
    camera.aspect = window.innerWidth / window.innerHeight
    // 更新相机的投影矩阵
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
    // 设置像素比
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}