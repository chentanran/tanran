import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import XYZ from 'ol/source/XYZ.js';
import {fromLonLat} from 'ol/proj.js';
// import TileLayer from 'ol/layer/WebGLTile.js';

// const attributions =
//   '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
//   '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const elevation = [
  '+',
  -10000,
  [
    '*',
    0.1 * 255,
    [
      '+',
      ['*', 256 * 256, ['band', 1]],
      ['+', ['*', 256, ['band', 2]], ['band', 3]],
    ],
  ],
];

const layer = new TileLayer({
  opacity: 0.6,
  source: new XYZ({
    url: 'https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key=AOQBLYrsnpfAh831cmv2',
    maxZoom: 10,
    tileSize: 512,
    crossOrigin: 'anonymous',
  }),
  style: {
    variables: {
      level: 0,
    },
    color: [
      'case',
      ['<=', elevation, ['var', 'level']],
      [139, 212, 255, 1],
      [139, 212, 255, 0],
    ],
  },
});

new Map({
  target: 'map-container',
  layers: [layer],
  view: new View({
    center: fromLonLat([-58.3816, -34.6037]),
    zoom: 11,
  }),
});

const control = document.getElementById('level');
const output = document.getElementById('output');
const listener = function () {
  output.innerText = control.value;
  layer.updateStyleVariables({level: parseFloat(control.value)});
};
control.addEventListener('input', listener);
control.addEventListener('change', listener);
output.innerText = control.value;
