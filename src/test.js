import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Point from 'ol/geom/Point';

// 간단한 함수인데 연결이 되지 않아서 stackOverflow 뒤져보니 답을 찾음
// webpack을 통해 파일을 실행할 때 webpack은 전역 범위를 어지럽히지 않도록 하므로 기본적으로 함수를 전역적으로 사용할 수 없다.
// JS 파일의 범위 밖에서 함수에 액세스할 수 있도록 하려면 전역 범위에 넣어야 한다.

// 전역 범위에 넣는 것.
// window.goCompany = function goHome() { 처럼 하던지, 

// 전역 범위에 넣는 것이 상황상 어렵다면
// document.getElementById('goHome').onclick = function() { 으로 접근해야 한다. 

// https://stackoverflow.com/questions/35781579/basic-webpack-not-working-for-button-click-function-uncaught-reference-error

// window.goCompany = function goCompany(){
//   alert("goCompany!");
//   console.log("goCompany!");
// }

// document.getElementById('goHome').onclick = function () {
//   alert("goHome!");
//   // map.getView.setCenter('127.12536692619322, 37.442704212410106');
//   map.getView().setCenter(
//     new Point([126.95659953, 37.578220423]).getCoordinates())
// }
