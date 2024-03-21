import { color } from '../config/index.ts'
import { Cylinder } from './cylinder.ts'

export class Wall {
  config: { radius: number; height: number; open: boolean; color: string; opacity: number; position: { x: number; y: number; z: number; }; speed: number; };
  constructor(scene, time) {
    this.config = {
      radius: 50,
      height: 50,
      open: true,
      color: color.wall,
      opacity: 0.6,
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      speed: 1.0,
    }

    new Cylinder(scene, time).createCylinder(this.config);
  }
}
