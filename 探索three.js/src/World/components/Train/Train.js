import { Group, MathUtils } from 'https://cdn.skypack.dev/three@0.136.0'
import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";
import { createMeshes } from "./meshes.js";

const wheelSpeed = MathUtils.degToRad(192)

class Train extends Group {
  constructor() {
    super()

    this.meshes = createMeshes()

    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel,
      this.meshes.nostclone
    )
  }

  tick(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta
  }
}

export { Train }