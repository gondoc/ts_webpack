# tswebpack

2206021020

	대과제 : react, typeScript 번들링 -> node.js / spring
	npm + typeScript
	
	소과제 : react + typeScript 형태로 ol 띄워볼 것.
	
	npm, yarn 설치 및 vite, webpack구동 가능
	tsconfig.json, webpack.config.js 설정

	js, css 파일 번들링 작업 완료

---

2206022024
	
	webpack5으로 번들링한 js, css, html 파일에 지도 출력.
	좌표계 EPSG:3857 -> EPSG:4326 변경.
	지도 상단 버튼 생성하여 home, company onclick시 evtLisnter -> map.Point('좌표')처리
	
	ps. 현재 모든 작업을 /dist 에 있는 index.html 템플릿을 우클릭 open with live server 해서 보고 있는데
	아무래도 localhost에 올라가지 않는게 (지속적인 cannot get / 오류) 이상해서 찾아보니까
	webpack 5점대 에서 dev server 관련 구동 이슈가 있다는 것을 확인함.
	webpack 4점 라인으로 다운 그레이드를 시도하려 하였으나, 연관 다른 디펜전시와 충돌이 일어나는 것을 확인함. 
	build, run 둘다 안되는 상황. 이슈 해결 중.
