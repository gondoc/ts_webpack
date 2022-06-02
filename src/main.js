import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Point from 'ol/geom/Point';
require('./style.css');
require('./test.js');

let map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    // openlayer는 구글 좌표계 EPSG:3857를 기본 좌표계로 사용한다.
    // 해당 좌표계를 경위도 EPSG:4326로 바꾸려면 하단 코드가 필요하다.
    projection: 'EPSG:4326',
    center: [127.101300, 37.401498],
    zoom: 17
  })
});

document.getElementById('reset').onclick = function () {
  // 지도 소스 재시작
  // 말 그대로 리셋 기능 담당
  // map 위 layer reset 함. 
  // map.getLayers().forEach(layer => layer.getSource().refresh());

  // 상기 코드 오류로 인한 수정 버전 호환 문제인듯함.
  map.getLayers().forEach(layer => layer.getSourceState().refresh());
}

document.getElementById('goHome').onclick = function () {
  alert("goHome!");
  // map.getView.setCenter('127.12536692619322, 37.442704212410106');
  map.getView().setCenter(
    new Point([126.95659953, 37.578220423]).getCoordinates())
}

document.getElementById('goCompany').onclick = function () {
  alert("goCompany!");
} 
