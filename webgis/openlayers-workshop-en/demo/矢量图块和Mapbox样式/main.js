// import MVT from 'ol/format/MVT';
import MapboxVectorLayer from 'ol/layer/MapboxVector';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
// import VectorTileLayer from 'ol/layer/VectorTile';
// import VectorTileSource from 'ol/source/VectorTile';
import {Stroke, Style} from 'ol/style';
// import olms from 'ol-mapbox-style';
import Feature from 'ol/Feature';
import {Map, View} from 'ol';
import {fromExtent} from 'ol/geom/Polygon';
import {fromLonLat} from 'ol/proj';

const map = new Map({
  target: 'map-container',
  view: new View({
    center: fromLonLat([0, 0]),
    zoom: 2,
  }),
});

// const layer = new VectorTileLayer({
//   source: new VectorTileSource({
//     format: new MVT(),
//     url:
//       'https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/' +
//       'ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf',
//     maxZoom: 14,
//   }),
// });
// map.addLayer(layer);

const layer = new MapboxVectorLayer({
  styleUrl:
    'https://api.maptiler.com/maps/bright/style.json?key=lirfd6Fegsjkvs0lshxe',
  // or, instead of the above, try
  // styleUrl: 'mapbox://styles/mapbox/bright-v9',
  // accessToken: 'Your token from https://mapbox.com/'
});
map.addLayer(layer);

// olms(
//   'map-container',
//   'https://api.maptiler.com/maps/bright/style.json?key=lirfd6Fegsjkvs0lshxe'
// );

const source = new VectorSource();
new VectorLayer({
  map: map,
  source: source,
  style: new Style({
    stroke: new Stroke({
      color: 'red',
      width: 4,
    }),
  }),
});

map.on('pointermove', function (event) {
  source.clear();
  map.forEachFeatureAtPixel(
    event.pixel,
    function (feature) {
      const geometry = feature.getGeometry();
      source.addFeature(new Feature(fromExtent(geometry.getExtent())));
    },
    {
      hitTolerance: 2,
    }
  );
});
