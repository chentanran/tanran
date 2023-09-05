import { BoxBufferGeometry, CylinderBufferGeometry } from "https://cdn.skypack.dev/three@0.136.0"

function createGeometries() {
  const cabin = new BoxBufferGeometry(2, 2.25, 1.5)

  const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12)
  const nostclone = new CylinderBufferGeometry(0.75, 0.75, 0.01, 12)

  const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16)

  const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5)

  return {
    cabin,
    nose,
    nostclone,
    wheel,
    chimney
  }
}

export { createGeometries }