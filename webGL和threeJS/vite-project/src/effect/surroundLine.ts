import * as THREE from 'three'
import { color } from '../config'

export class SurroundLine {
  scene: any
  child: any
  height: any
  time: any
  constructor(scene: any, child: any, height: any, time: any) {
    this.scene = scene
    this.child = child
    this.height = height
    this.time = time

    this.createMesh()
    this.createLine()
  }

  computedMesh() {
    this.child.geometry.computeBoundingBox()
    this.child.geometry.computeBoundingSphere()
  }

  createMesh() {
    this.computedMesh()

    const { max, min } = this.child.geometry.boundingBox

    const size = max.z - min.z
    console.log(this.height, '---this.height')
    const material = new THREE.ShaderMaterial({
      uniforms: {
        // 当前扫描高度
        u_height: this.height,
        // 扫描线条的颜色
        u_up_color: {
          value: new THREE.Color(color.risingColor)
        },
        v_city_color: {
          value: new THREE.Color(color.mesh)
        },
        u_head_color: {
          value: new THREE.Color(color.head)
        },
        u_size: {
          value: size
        }
      },
      vertexShader: `
        varying vec3 v_position;
        void main() {
          v_position = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 v_position;
        uniform vec3 u_city_color;
        uniform vec3 u_head_color;
        uniform float u_size;
        uniform float u_height;
        uniform vec3 u_up_color;

        void main() {
          vec3 base_color = u_city_color;
          base_color = mix(base_color, u_head_color, v_position.z / u_size);
          
          // 上升线条的高度是多少
          if ((u_height > v_position.z) && (u_height < v_position.z + 6.0)) {
            float f_index = (u_height - v_position.z) / 3.0;
            base_color = mix(u_up_color, base_color, abs(f_index - 1.0));
          };

          gl_FragColor = vec4(base_color, 1.0);
        }
      `
    })
    const mesh = new THREE.Mesh(this.child.geometry, material)
    // 让 mesh 继承 child 的旋转，缩放，平移
    mesh.position.copy(this.child.position)
    mesh.rotation.copy(this.child.rotation)
    mesh.scale.copy(this.child.scale)

    this.scene.add(mesh)
  }

  createLine() {
    // 获取建筑物的外围
    const geometry = new THREE.EdgesGeometry(this.child.geometry)
    // const material = new THREE.LineBasicMaterial({ color: color.soundLine })
    const { max, min } = this.child.geometry.boundingBox

    // 自定义线条渲染
    const material = new THREE.ShaderMaterial({
      uniforms: {
        line_color: {
          value: new THREE.Color(color.soundLine)
        },
        u_time: this.time,
        u_max: {
          value: max
        },
        u_min: {
          value: min
        },
        live_color: {
          value: new THREE.Color(color.liveColor)
        }
      },
      vertexShader: `
        uniform float u_time;
        uniform vec3 live_color;
        uniform vec3 u_max;
        uniform vec3 u_min;
        uniform vec3 line_color;

        varying vec3 v_color;

        void main() {
          float new_time = mod(u_time * 0.1, 1.0);
          // 扫描的位置
          float rangeY = mix(u_min.y, u_max.y, new_time);

          // 当前在这个区间内，显示扫描光带
          if (rangeY < position.y && rangeY > position.y - 200.0) {
            float f_index = 1.0 - sin((position.y - rangeY) / 200.0 * 3.14);
            float r = mix(live_color.r, line_color.r, f_index);
            float g = mix(live_color.g, line_color.g, f_index);
            float b = mix(live_color.b, line_color.b, f_index);

            v_color = vec3(r,g,b);
          } else {
            v_color = line_color;
          }

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 v_color;
        void main() {
          gl_FragColor = vec4(v_color, 1.0);
        }
      `
    })

    // 创建线条
    const line = new THREE.LineSegments(geometry, material)

    // 让线条继承 child 的旋转，缩放，平移
    line.position.copy(this.child.position)
    line.rotation.copy(this.child.rotation)
    line.scale.copy(this.child.scale)

    this.scene.add(line)
  }
}