import { Cylinder } from './cylinder.ts'
import { color } from '../config/index.ts'

export class Circle{
  config: { radius: number; color: string; opacity: number; height: number; open: boolean; position: { x: number; y: number; z: number; }; speed: number; };
  constructor(scene, time) {
    this.config = {
      radius: 50,
      color: color.circle,
      opacity: 0.6,
      height: 1,
      open: false,
      position: {
        x: 300,
        y: 0,
        z: 300,
      },
      speed: 2.0,
    }

    new Cylinder(scene, time).createCylinder(this.config);
  }
}
