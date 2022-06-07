import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Point from 'ol/geom/Point';
import Zoom from 'ol/control/Zoom';
import { fromLonLat, transform } from 'ol/proj';
require('../style.css');

const home = fromLonLat([127.12535708345122, 37.44276637398061]);
const company = fromLonLat([127.10134125247623, 37.401474465332214]);

// 기본 화면 설정 
const view = new View({
  projection: 'EPSG:4326',
  center: [127.72055134508884, 36.76770983640489],
  zoom: 8
});

let map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      preload: 3,
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: view,
});

// 클릭시 좌표 출력
// 좌표계를 변환해서 변수에 담고 콘솔 출력
map.on('click', function (evt) {
  let coordinate = fromLonLat(transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
  console.log(coordinate);
})

// 지도 소스 재시작
// 말 그대로 리셋 기능 담당
// map 위 layer reset 함. 
// map.getLayers().forEach(layer => layer.getSource().refresh());
// window.onload = function() {
//   let resetBtn = document.getElementById("reset");
//   resetBtn.addEventListener('click', function(){
//     map.getLayers().forEach(layer => layer.getSource().refresh());
//   })
// }
document.getElementById("resetBtn").addEventListener("click", function resetBtn() {
  map.getLayers().forEach(layers => layers.getSource().refresh());
  map.setView(view);
});



// 전역 변수처리를 해줬는데 동작을 하지 않고 에러가 뜬다.
// Uncaught TypeError: goCompany is not a function at HTMLButtonElement.onclick
// goHome
// window.onload = function(){
//   let homeBtn = document.getElementById("goHome");
//   homeBtn.addEventListener('click', function(){
//     new Point([127.12535708345122, 37.44276637398061]).getCoordinates()
//   })
// }
// goCompany
// window.onload = function(){
//   let companyBtn = document.getElementById("goCompany");
//   companyBtn.addEventListener('click', function(){
//     new Point([127.10134125247623, 37.401474465332214]).getCoordinates()
//   })
// }

// 화면 이동 성공
// document.getElementById("goHome").addEventListener("click", function () {
//   alert("goHome!");
//   map.getView().setCenter(
//     new Point([127.12535708345122, 37.44276637398061]).getCoordinates()
//     )
// });


document.getElementById("goHome").addEventListener("click", function goHome() {
  alert("goHome!");
  map.getView().setCenter(transform(home, 'EPSG:3857', 'EPSG:4326'));
  map.getView().setZoom(17);
});

document.getElementById("goCompany").addEventListener("click", function goCompany() {
  alert("goCompany!");
  map.getView().setCenter(transform(company, 'EPSG:3857', 'EPSG:4326'));
  map.getView().setZoom(17);
});

// document.getElementById("gotest1").addEventListener("click", function () {
//   alert("goPanAnimateTest_1");
//   const view = new View
//   view.animate({
//     center: transform(home, 'EPSG:3857', 'EPSG:4326'),
//     duration: 2000,
//   });
// });