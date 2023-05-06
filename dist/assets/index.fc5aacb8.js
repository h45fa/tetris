var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;import{D as c,R as s,q as i,$ as d,a as p}from"./vendor.d19493d7.js";const u={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},m=()=>Array.from(Array(20),(()=>Array(12).fill([0,"clear"]))),g=()=>{const e=["I","J","L","O","S","T","Z"],r=e[Math.floor(Math.random()*e.length)];return u[r]};const b=()=>{const[e,c]=s.useState({});return{player:e,updatePlayerPos:({x:e,y:s,collided:i})=>{c((c=>{return d=((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&n(e,t,r[t]);if(o)for(var t of o(r))l.call(r,t)&&n(e,t,r[t]);return e})({},c),p={pos:{x:c.pos.x+=e,y:c.pos.y+=s},collided:i},r(d,t(p));var d,p}))},resetPlayer:s.useCallback((()=>c({pos:{x:4,y:0},tetromino:g().shape,collided:!1})),[])}},f=(e,r)=>{var t,o;const[a,l]=s.useState(m());return s.useEffect((()=>{if(!e.pos)return;l((r=>(r=>{const t=r.map((e=>e.map((e=>"clear"===e[1]?[0,"clear"]:e))));return e.tetromino.forEach(((r,o)=>{r.forEach(((r,a)=>{0!==r&&(t[o+e.pos.y][a+e.pos.x]=[r,e.collided?"merged":"clear"])}))})),t})(r)))}),[e.collided,null==(t=e.pos)?void 0:t.x,null==(o=e.pos)?void 0:o.y,e.tetromino]),{stage:a,setStage:l}},y=i.div`
  width: auto;
  background: rgba(${e=>e.color}, 0.8);
  border: ${e=>0===e.type?"0px solid":"4px solid"};
  border-bottom-color: rgba(${e=>e.color}, 0.1);
  border-right-color: rgba(${e=>e.color}, 1);
  border-top-color: rgba(${e=>e.color}, 1);
  border-left-color: rgba(${e=>e.color}, 0.3);
`;var x=s.memo((({type:e})=>s.createElement(y,{type:e,color:u[e].color})));const h=i.div`
  display: grid;
  grid-template-columns: repeat(${12}, 30px);
  grid-template-rows: repeat(${20}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`,v=({stage:e})=>s.createElement(h,null,e.map((e=>e.map(((e,r)=>s.createElement(x,{key:r,type:e[0]})))))),E=i.div`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${e=>e.gameOver?"red":"#999"};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`,O=({gameOver:e,text:r})=>s.createElement(E,{gameOver:e},r),w=i.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  border: none;
  color: white;
  background: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`,S=({callback:e})=>s.createElement(w,{onClick:e},"Start Game"),k=i.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
`,I=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;

  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
`,P=()=>{const[e,r]=s.useState(null),[t,o]=s.useState(!0),a=s.useRef(null),{player:l,updatePlayerPos:n,resetPlayer:i}=b(),{stage:d,setStage:p}=f(l),u=e=>{n({x:e,y:0,collided:!1})};return function(e,r){const t=c.exports.useRef(null);c.exports.useEffect((()=>{t.current=e}),[e]),c.exports.useEffect((()=>{if(null!==r){const e=setInterval((function(){t.current&&t.current()}),r);return()=>{clearInterval(e)}}}),[r])}((()=>{n({x:0,y:1,collided:!1})}),e),s.createElement(k,{role:"button",tabIndex:0,onKeyDown:({keyCode:e,repeat:t})=>{if(37===e)u(-1);else if(39===e)u(1);else if(40===e){if(t)return;r(30)}},onKeyUp:({keyCode:e})=>{40===e&&r(1e3)},ref:a},s.createElement(I,null,s.createElement("div",{className:"display"},t?s.createElement(s.Fragment,null,s.createElement(O,{gameOver:t,text:"Game Over"}),s.createElement(S,{callback:()=>{a.current&&a.current.focus(),p(m()),r(1e3),i(),o(!1)}})):s.createElement(s.Fragment,null,s.createElement(O,{text:"Score:"}),s.createElement(O,{text:"Rows:"}),s.createElement(O,{text:"Level:"}))),s.createElement(v,{stage:d})))};const $=d`
  body {
    margin: 0;
    padding: 0;
    background: url(${"/assets/bg.84894c80.jpg"}) #000;
    background-size: cover;
    background-position: center;
  }
`;p.render(s.createElement(s.Fragment,null,s.createElement($,null),s.createElement(P,null)),document.getElementById("root"));
