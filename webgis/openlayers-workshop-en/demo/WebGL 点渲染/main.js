import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import WebGLPointsLayer from 'ol/layer/WebGLPoints';
import {Map, View} from 'ol';
import {Stamen, Vector as VectorSource} from 'ol/source';
import {fromLonLat} from 'ol/proj';

const source = new VectorSource();

const client = new XMLHttpRequest();
client.open('GET', './data/meteorites.csv');
client.onload = function () {
  const csv = client.responseText;
  const features = [];

  let prevIndex = csv.indexOf('\n') + 1; // scan past the header line

  let curIndex;
  while ((curIndex = csv.indexOf('\n', prevIndex)) != -1) {
    const line = csv.substr(prevIndex, curIndex - prevIndex).split(',');
    prevIndex = curIndex + 1;

    const coords = fromLonLat([parseFloat(line[4]), parseFloat(line[3])]);
    if (isNaN(coords[0]) || isNaN(coords[1])) {
      // guard against bad data
      continue;
    }

    features.push(
      new Feature({
        mass: parseFloat(line[1]) || 0,
        year: parseInt(line[2]) || 0,
        geometry: new Point(coords),
      })
    );
  }
  source.addFeatures(features);
};
client.send();

// const meteorites = new VectorLayer({
//   source: source,
// });

const meteorites = new WebGLPointsLayer({
  source: source,
  disableHitDetection: true,
  style: {
    symbol: {
      symbolType: 'circle',
      size: 14,
      color: 'rgb(255, 0, 0)',
      opacity: 0.5,
    },
  },
});

const map = new Map({
  target: 'map-container',
  layers: [
    new TileLayer({
      source: new Stamen({
        layer: 'toner',
      }),
    }),
    meteorites,
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

const minYear = 1850;
const maxYear = 2015;
const span = maxYear - minYear;
const rate = 10; // years per second

const start = Date.now();

const styleVariables = {
  currentYear: minYear,
};

const yearElement = document.getElementById('year');

function render() {
  const elapsed = (rate * (Date.now() - start)) / 1000;
  styleVariables.currentYear = Math.round(minYear + (elapsed % span));
  yearElement.innerText = styleVariables.currentYear;

  map.render();
  requestAnimationFrame(render);
}

render();
