import DragAndDrop from 'ol/interaction/DragAndDrop';
import Draw from 'ol/interaction/Draw';
import GeoJSON from 'ol/format/GeoJSON';
import Link from 'ol/interaction/Link';
import Map from 'ol/Map';
import Modify from 'ol/interaction/Modify';
import Snap from 'ol/interaction/Snap';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Fill, Stroke, Style} from 'ol/style';
import {transform} from 'ol/proj';

const map = new Map({
  target: 'map-container',
  layers: [
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/countries.json',
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

map.addInteraction(new Link());

const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
  style: new Style({
    fill: new Fill({
      color: 'yellow',
    }),
    stroke: new Stroke({
      color: 'white',
    }),
  }),
});
map.addLayer(layer);
map.addInteraction(
  new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON],
  })
);

map.addInteraction(
  new Modify({
    source: source,
  })
);

map.addInteraction(
  new Draw({
    type: 'Polygon',
    source: source,
  })
);

map.addInteraction(
  new Snap({
    source: source,
  })
);

const clear = document.getElementById('clear');
clear.addEventListener('click', function () {
  source.clear();
});

const format = new GeoJSON({featureProjection: 'EPSG:3857'});
const download = document.getElementById('download');
source.on('change', function () {
  const features = source.getFeatures();
  const json = format.writeFeatures(features);
  download.href =
    'data:application/json;charset=utf-8,' + encodeURIComponent(json);
});
