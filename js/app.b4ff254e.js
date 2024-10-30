(function(){"use strict";var e={9556:function(e,l,t){var n=t(5130),a=t(6768);function o(e,l,t,n,o,i){const u=(0,a.g2)("NavHeader"),s=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(u),(0,a.bF)(s)],64)}const i={class:"menu cf"},u={class:"submenu"};function s(e,l){const t=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("ul",i,[(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/"},{default:(0,a.k6)((()=>l[0]||(l[0]=[(0,a.eW)("Home")]))),_:1})]),(0,a.Lk)("li",null,[l[8]||(l[8]=(0,a.Lk)("a",{href:"#"},"ejercicios",-1)),(0,a.Lk)("ul",u,[(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/ejercicio1"},{default:(0,a.k6)((()=>l[1]||(l[1]=[(0,a.eW)("ejercicio a")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/ejercicio2"},{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.eW)("ejercicio b")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/ejercicio3"},{default:(0,a.k6)((()=>l[3]||(l[3]=[(0,a.eW)("ejercicio c")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/ejercicio4"},{default:(0,a.k6)((()=>l[4]||(l[4]=[(0,a.eW)("ejercicio d")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/ejercicio5"},{default:(0,a.k6)((()=>l[5]||(l[5]=[(0,a.eW)("ejercicio e")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/ejercicio7"},{default:(0,a.k6)((()=>l[6]||(l[6]=[(0,a.eW)("ejercicio f")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(t,{to:"/ejercicio6"},{default:(0,a.k6)((()=>l[7]||(l[7]=[(0,a.eW)("ejercicio g")]))),_:1})])])])])}var r=t(1241);const d={},c=(0,r.A)(d,[["render",s],["__scopeId","data-v-f2b431da"]]);var k=c,L={name:"App",components:{NavHeader:k}};const m=(0,r.A)(L,[["render",o]]);var h=m,p=t(1387);function v(e,l){return(0,a.uX)(),(0,a.CE)(a.FK,null,[l[0]||(l[0]=(0,a.Lk)("h1",{class:"title1"},"PRÁCTICA",-1)),l[1]||(l[1]=(0,a.Lk)("h1",{class:"title2"},"SIMULACIONES",-1))],64)}const f={},A=(0,r.A)(f,[["render",v]]);var g=A,b=t(4232);const I={class:"flex-container"},y={class:"enunciado"},S={class:"controls"};function j(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[7]||(l[7]=(0,a.Lk)("h1",null,"Ejercicio A",-1)),(0,a.Lk)("div",I,[(0,a.Lk)("div",y,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>l[3]||(l[3]=[(0,a.Lk)("p",null," Simular el problema de depósito a plazo fijo para un capital de 1000, ¿en cuantos años se duplicaría el capital? ",-1)]))),_:1})]),(0,a.Lk)("div",S,[l[4]||(l[4]=(0,a.Lk)("label",{for:"capitalInicial"},"Capital Inicial ($):",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.capitalInicial=e),id:"capitalInicial",min:"1"},null,512),[[n.Jo,i.capitalInicial]]),l[5]||(l[5]=(0,a.Lk)("label",{for:"tiempoDeposito"},"Tiempo en años:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[1]||(l[1]=e=>i.tiempoDeposito=e),id:"tiempoDeposito",min:"1"},null,512),[[n.Jo,i.tiempoDeposito]]),(0,a.Lk)("button",{onClick:l[2]||(l[2]=(...e)=>u.simulateInvestment&&u.simulateInvestment(...e))},"Simular Depósito")])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("table",null,[l[6]||(l[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Año"),(0,a.Lk)("th",null,"Interés ($/año)"),(0,a.Lk)("th",null,"Capital ($)")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,((e,l)=>((0,a.uX)(),(0,a.CE)("tr",{key:l},[(0,a.Lk)("td",null,(0,b.v_)(l+1),1),(0,a.Lk)("td",null,(0,b.v_)(e.interest),1),(0,a.Lk)("td",null,(0,b.v_)(e.capital),1)])))),128))])])])),_:1})):(0,a.Q3)("",!0)])}t(4114);const C={class:"card"},E={class:"fieldset"},P={class:"fieldset-legend"};function F(e,l,t,n,o,i){return(0,a.uX)(),(0,a.CE)("div",C,[(0,a.Lk)("fieldset",E,[(0,a.Lk)("legend",P,(0,b.v_)(t.legend),1),(0,a.RG)(e.$slots,"default",{},void 0,!0)])])}var X={props:{legend:{type:String,required:!0}}};const x=(0,r.A)(X,[["render",F],["__scopeId","data-v-454b15a6"]]);var R=x,M={components:{Fieldset:R},data(){return{capitalInicial:1e3,tiempoDeposito:10,results:[]}},methods:{simulateInvestment(){this.results=[];let e=this.capitalInicial;const l=.035;for(let t=1;t<=this.tiempoDeposito;t++){let t=e*l;e+=t,this.results.push({interest:t.toFixed(2),capital:e.toFixed(2)})}}}};const K=(0,r.A)(M,[["render",j],["__scopeId","data-v-750dd833"]]);var D=K;const W={class:"flex-container"},B={class:"controls"},G=["disabled"];function _(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[5]||(l[5]=(0,a.Lk)("h1",null,"Ejercicio B",-1)),(0,a.Lk)("div",W,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.Lk)("p",null," Para el modelo de población con los parámetros vistos en clase ¿cual sería la población de Bolivia el año 2023? ",-1)]))),_:1}),(0,a.Lk)("div",B,[l[3]||(l[3]=(0,a.Lk)("label",{for:"initialPopulation"},"Población Inicial:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.initialPopulation=e),id:"initialPopulation",min:"1",placeholder:"Ejemplo: 10059856"},null,512),[[n.Jo,i.initialPopulation]]),(0,a.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>u.simulatePopulationGrowth&&u.simulatePopulationGrowth(...e)),disabled:!i.initialPopulation},"Simular Crecimiento Poblacional",8,G)])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("table",null,[l[4]||(l[4]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Año"),(0,a.Lk)("th",null,"Nacimientos"),(0,a.Lk)("th",null,"Muertes"),(0,a.Lk)("th",null,"Población")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.year},[(0,a.Lk)("td",null,(0,b.v_)(e.year),1),(0,a.Lk)("td",null,(0,b.v_)(u.formatNumber(e.births)),1),(0,a.Lk)("td",null,(0,b.v_)(u.formatNumber(e.deaths)),1),(0,a.Lk)("td",null,(0,b.v_)(u.formatNumber(e.population)),1)])))),128))])])])),_:1})):(0,a.Q3)("",!0)])}var N={components:{Fieldset:R},data(){return{initialPopulation:null,results:[]}},methods:{simulatePopulationGrowth(){let e=2013;const l=2024,t=.02493,n=.00743;let a=Number(this.initialPopulation);this.results=[];while(e<=l){let l=Math.round(a*t),o=Math.round(a*n);this.results.push({year:e,births:l,deaths:o,population:Math.round(a)}),a=a+l-o,e++}console.log(`Valor final de PB: ${a}`)},formatNumber(e){return(new Intl.NumberFormat).format(e)}}};const O=(0,r.A)(N,[["render",_],["__scopeId","data-v-3c5cd89c"]]);var w=O;const J={class:"flex-container"},z={class:"controls"};function V(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[6]||(l[6]=(0,a.Lk)("h1",null,"Ejercicio C",-1)),(0,a.Lk)("div",J,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.Lk)("p",null,[(0,a.eW)(" Max Z = 2X1 + 3X2 - X3"),(0,a.Lk)("br"),(0,a.eW)(" Sujeto a:"),(0,a.Lk)("br"),(0,a.eW)(" X1 + X2 >= 2"),(0,a.Lk)("br"),(0,a.eW)(" 1 <= X3 <= 2"),(0,a.Lk)("br"),(0,a.eW)(" X2 >= 0 (Entero)"),(0,a.Lk)("br"),(0,a.eW)(" 0 <= X1 <= 10 ")],-1)]))),_:1}),(0,a.Lk)("div",z,[l[3]||(l[3]=(0,a.Lk)("label",{for:"iterations"},"Iteraciones:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.NUM_ITERACIONES=e),id:"iterations",min:"1"},null,512),[[n.Jo,i.NUM_ITERACIONES]]),(0,a.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>u.simulateMonteCarlo&&u.simulateMonteCarlo(...e))},"Simular")])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("table",null,[l[4]||(l[4]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Mejor Z Encontrado"),(0,a.Lk)("th",null,"Iteración de Mejor Solución")])],-1)),(0,a.Lk)("tbody",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,(0,b.v_)(i.Z),1),(0,a.Lk)("td",null,(0,b.v_)(i.iteracion_mejor_solucion+1),1)])])]),(0,a.Lk)("table",null,[l[5]||(l[5]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Iteración"),(0,a.Lk)("th",null,"X1"),(0,a.Lk)("th",null,"X2"),(0,a.Lk)("th",null,"X3"),(0,a.Lk)("th",null,"Z (Función Objetivo)")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,((e,l)=>((0,a.uX)(),(0,a.CE)("tr",{key:l},[(0,a.Lk)("td",null,(0,b.v_)(l+1),1),(0,a.Lk)("td",null,(0,b.v_)(e.x1),1),(0,a.Lk)("td",null,(0,b.v_)(e.x2),1),(0,a.Lk)("td",null,(0,b.v_)(e.x3),1),(0,a.Lk)("td",null,(0,b.v_)(e.z),1)])))),128))])])])),_:1})):(0,a.Q3)("",!0)])}var H={components:{Fieldset:R},data(){return{NUM_ITERACIONES:1e5,results:[],mejor_solucion:null,Z:-1/0,iteracion_mejor_solucion:null}},methods:{generar_rnd(e,l){return Math.random()*(l-e)+e},simulateMonteCarlo(){this.mejor_solucion=null,this.Z=-1/0,this.iteracion_mejor_solucion=null,this.results=[];for(let e=0;e<this.NUM_ITERACIONES;e++){console.log(`Iteración: ${e+1}`);const l=this.generar_rnd(0,10),t=Math.floor(this.generar_rnd(0,100)),n=this.generar_rnd(1,2),a=l+t<=20,o=a?2*l+3*t-n:null;a&&o>this.Z&&(this.Z=o,this.mejor_solucion={x1:l,x2:t,x3:n,z:o},this.iteracion_mejor_solucion=e),this.results.push({x1:l,x2:t,x3:n,z:a?o:"Invalido"})}}}};const U=(0,r.A)(H,[["render",V],["__scopeId","data-v-b7cb42a4"]]);var Z=U;const Q={class:"flex-container"},T={class:"controls"};function Y(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[6]||(l[6]=(0,a.Lk)("h1",null,"Ejercicio D",-1)),(0,a.Lk)("div",Q,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.Lk)("p",null," Para el juego del lanzamiento de dados realizar 30 simulaciones de 100 juegos y determinar: la ganancia promedio neta del dueño, el número de veces que gana la casa, la probabilidad de ganar de la casa en cada simulación. ",-1)]))),_:1}),(0,a.Lk)("div",T,[l[3]||(l[3]=(0,a.Lk)("label",{for:"gamesCount"},"Número de juegos:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.gamesCount=e),id:"gamesCount",min:"1"},null,512),[[n.Jo,i.gamesCount]]),(0,a.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>u.simulateGame&&u.simulateGame(...e))},"Simular Juego")])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("table",null,[l[4]||(l[4]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Lanzamiento"),(0,a.Lk)("th",null,"Dado 1"),(0,a.Lk)("th",null,"Dado 2"),(0,a.Lk)("th",null,"Suma"),(0,a.Lk)("th",null,"Ganancia/Pérdida"),(0,a.Lk)("th",null,"Total Acumulado")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,((e,l)=>((0,a.uX)(),(0,a.CE)("tr",{key:l},[(0,a.Lk)("td",null,(0,b.v_)(l+1),1),(0,a.Lk)("td",null,(0,b.v_)(e.die1),1),(0,a.Lk)("td",null,(0,b.v_)(e.die2),1),(0,a.Lk)("td",null,(0,b.v_)(e.sum),1),(0,a.Lk)("td",null,(0,b.v_)(e.gain),1),(0,a.Lk)("td",null,(0,b.v_)(e.total),1)])))),128))])]),(0,a.Lk)("table",null,[l[5]||(l[5]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Total de Juegos"),(0,a.Lk)("th",null,"Juegos Ganados por la Casa"),(0,a.Lk)("th",null,"Porcentaje Ganado por la Casa")])],-1)),(0,a.Lk)("tbody",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,(0,b.v_)(i.gamesCount),1),(0,a.Lk)("td",null,(0,b.v_)(u.houseWins),1),(0,a.Lk)("td",null,(0,b.v_)(u.houseWinPercentage),1)])])])])),_:1})):(0,a.Q3)("",!0)])}var q={components:{Fieldset:R},data(){return{results:[],gamesCount:10}},computed:{houseWins(){return this.results.filter((e=>-2===e.gain)).length},playerWins(){return this.results.filter((e=>5===e.gain)).length},totalHouseGain(){return 2*this.houseWins+-5*this.playerWins},houseWinPercentage(){return this.gamesCount>0?(this.houseWins/this.gamesCount*100).toFixed(2)+"%":"0%"}},methods:{simulateGame(){this.results=[];let e=0;for(let l=0;l<this.gamesCount;l++){const l=this.rollDie(),t=this.rollDie(),n=l+t,a=7===n?5:-2;e+=a,this.results.push({die1:l,die2:t,sum:n,gain:a,total:e})}},rollDie(){return Math.floor(6*Math.random())+1}}};const $=(0,r.A)(q,[["render",Y],["__scopeId","data-v-001ea706"]]);var ee=$;const le={class:"flex-container"},te={class:"controls"};function ne(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[11]||(l[11]=(0,a.Lk)("h1",null,"Ejercicio F",-1)),(0,a.Lk)("div",le,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.Lk)("p",null," Para el problema de la gallina ponedora de huevos realizar 30 simulaciones de 28 días y responder a las preguntas planteadas en el problema. ",-1)]))),_:1}),(0,a.Lk)("div",te,[l[3]||(l[3]=(0,a.Lk)("label",{for:"simulationDays"},"Número de días:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.simulationDays=e),id:"simulationDays",min:"1"},null,512),[[n.Jo,i.simulationDays]]),(0,a.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>u.simulateFarm&&u.simulateFarm(...e))},"Simular Granja")])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("p",null,[(0,a.Lk)("strong",null,"Total de Ganancia de los "+(0,b.v_)(i.simulationDays)+" días:",1),(0,a.eW)(" "+(0,b.v_)(u.totalIncome)+" Bs.",1)]),(0,a.Lk)("p",null,[l[4]||(l[4]=(0,a.Lk)("strong",null,"Huevos Puestos en el total de dias",-1)),(0,a.eW)(" "+(0,b.v_)(i.results.reduce(((e,l)=>e+l.eggsLaid),0)),1)]),(0,a.Lk)("p",null,[l[5]||(l[5]=(0,a.Lk)("strong",null,"Pollos Nacidos en el total de dias",-1)),(0,a.eW)(" "+(0,b.v_)(i.results.reduce(((e,l)=>e+l.chicksBorn),0)),1)]),(0,a.Lk)("p",null,[l[6]||(l[6]=(0,a.Lk)("strong",null,"Huevos Rotos en el total de dias",-1)),(0,a.eW)(" "+(0,b.v_)(i.results.reduce(((e,l)=>e+l.eggsBroken),0)),1)]),(0,a.Lk)("p",null,[l[7]||(l[7]=(0,a.Lk)("strong",null,"Pollos Muertos en el total de dias",-1)),(0,a.eW)(" "+(0,b.v_)(i.results.reduce(((e,l)=>e+l.chicksDied),0)),1)]),(0,a.Lk)("p",null,[l[8]||(l[8]=(0,a.Lk)("strong",null,"Total de Pollos vendidos",-1)),(0,a.eW)(" "+(0,b.v_)(u.totalgallinas),1)]),(0,a.Lk)("p",null,[l[9]||(l[9]=(0,a.Lk)("strong",null,"Total de Huevos vendidos",-1)),(0,a.eW)(" "+(0,b.v_)(u.totalhuevos),1)]),(0,a.Lk)("table",null,[l[10]||(l[10]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Día"),(0,a.Lk)("th",null,"Huevos Puestos"),(0,a.Lk)("th",null,"Huevos Rotos"),(0,a.Lk)("th",null,"Pollos Nacidos"),(0,a.Lk)("th",null,"Pollos Muertos"),(0,a.Lk)("th",null,"Ingreso del Día (Bs)")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,((e,l)=>((0,a.uX)(),(0,a.CE)("tr",{key:l},[(0,a.Lk)("td",null,(0,b.v_)(l+1),1),(0,a.Lk)("td",null,(0,b.v_)(e.eggsLaid),1),(0,a.Lk)("td",null,(0,b.v_)(e.eggsBroken),1),(0,a.Lk)("td",null,(0,b.v_)(e.chicksBorn),1),(0,a.Lk)("td",null,(0,b.v_)(e.chicksDied),1),(0,a.Lk)("td",null,(0,b.v_)(e.dailyIncome),1)])))),128))])])])),_:1})):(0,a.Q3)("",!0)])}var ae={components:{Fieldset:R},data(){return{results:[],simulationDays:300}},computed:{averageIncome(){const e=this.results.reduce(((e,l)=>e+l.dailyIncome),0);return(e/this.results.length).toFixed(2)},totalIncome(){return this.results.reduce(((e,l)=>e+l.dailyIncome),0)},totalgallinas(){return this.results.reduce(((e,l)=>e+l.chicksBorn),0)},totalhuevos(){return this.results.reduce(((e,l)=>e+l.eggsLaid),0)}},methods:{simulateFarm(){this.results=[];for(let e=1;e<=this.simulationDays;e++){const e=this.poissonRandom(2),l=Math.round(.2*e),t=Math.round(.3*(e-l));let n=0;for(let o=0;o<t;o++)Math.random()<.2&&n++;const a=2*(e-l-t)+30*(t-n);this.results.push({eggsLaid:e,eggsBroken:l,chicksBorn:t,chicksDied:n,dailyIncome:a})}},poissonRandom(e){let l=Math.exp(-e),t=0,n=1;do{t++,n*=Math.random()}while(n>l);return t-1}}};const oe=(0,r.A)(ae,[["render",ne],["__scopeId","data-v-20441adc"]]);var ie=oe;const ue={class:"flex-container"},se={class:"controls"};function re(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[5]||(l[5]=(0,a.Lk)("h1",null,"Ejercicio G",-1)),(0,a.Lk)("div",ue,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.Lk)("p",null," Para el problema de la agencia de azúcar, realizar 100 simulaciones de 27 días cada una y determinar los promedios de las variables endógenas definidas en el diagrama de flujo y a partir de esto i) Determinar cual seria la ganancia neta promedio de la agencia y cual su demanda insatisfecha promedio; ii) determinar cuál debería ser la capacidad de la bodega en función a la máxima ganancia neta. ",-1)]))),_:1}),(0,a.Lk)("div",se,[l[3]||(l[3]=(0,a.Lk)("label",{for:"simulationDays"},"Número de simulaciones:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.simulationDays=e),id:"simulationDays",min:"1"},null,512),[[n.Jo,i.simulationDays]]),(0,a.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>u.simulateStore&&u.simulateStore(...e))},"Simular Tienda")])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("table",null,[l[4]||(l[4]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Día"),(0,a.Lk)("th",null,"Inventario Inicial"),(0,a.Lk)("th",null,"Demanda"),(0,a.Lk)("th",null,"Inventario Final"),(0,a.Lk)("th",null,"Demanda Insatisfecha"),(0,a.Lk)("th",null,"Costo de Ordenar"),(0,a.Lk)("th",null,"Costo de Inventario"),(0,a.Lk)("th",null,"Ganancia Neta")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,((e,l)=>((0,a.uX)(),(0,a.CE)("tr",{key:l},[(0,a.Lk)("td",null,(0,b.v_)(l+1),1),(0,a.Lk)("td",null,(0,b.v_)(e.initialInventory),1),(0,a.Lk)("td",null,(0,b.v_)(e.demand),1),(0,a.Lk)("td",null,(0,b.v_)(e.finalInventory),1),(0,a.Lk)("td",null,(0,b.v_)(e.unmetDemand),1),(0,a.Lk)("td",null,(0,b.v_)(e.orderingCost),1),(0,a.Lk)("td",null,(0,b.v_)(e.inventoryCost),1),(0,a.Lk)("td",null,(0,b.v_)(e.netGain),1)])))),128))])])])),_:1})):(0,a.Q3)("",!0)])}var de={components:{Fieldset:R},data(){return{results:[],simulationDays:60,currentInventory:700,deliveryTime:0}},methods:{simulateStore(){this.results=[];for(let e=1;e<=this.simulationDays;e++){let l=Math.round(100*Math.random()),t=this.currentInventory,n=0,a=0,o=Math.round(.1*this.currentInventory),i=0;e%7!==0&&0!==this.currentInventory||(a=100,this.deliveryTime=Math.floor(3*Math.random())+1),this.deliveryTime>0&&(this.deliveryTime--,0===this.deliveryTime&&(this.currentInventory=700-this.currentInventory)),l>this.currentInventory?(n=l-this.currentInventory,this.currentInventory=0):this.currentInventory-=l,i=5*(l-n)-3.5*l-a-o,this.results.push({initialInventory:t,demand:l,finalInventory:this.currentInventory,unmetDemand:n,orderingCost:a,inventoryCost:o,netGain:i})}}}};const ce=(0,r.A)(de,[["render",re],["__scopeId","data-v-3972334e"]]);var ke=ce;const Le={class:"flex-container"},me={class:"controls"};function he(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[5]||(l[5]=(0,a.Lk)("h1",null,"Ejercicio E",-1)),(0,a.Lk)("div",Le,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.Lk)("p",null," Para el problema de la llegada de clientes que compran artículos realizar 30 simulaciones de 10 horas y determinar la ganancia neta promedio de la tienda por día y la cantidad promedio de ventas por día. ",-1)]))),_:1}),(0,a.Lk)("div",me,[l[3]||(l[3]=(0,a.Lk)("label",{for:"simulationDays"},"Número de simulaciones:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.simulationCount=e),id:"simulationDays",min:"1"},null,512),[[n.Jo,i.simulationCount]]),(0,a.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>u.simulateStore&&u.simulateStore(...e))},"Simular Tienda")])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("table",null,[l[4]||(l[4]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Simulación"),(0,a.Lk)("th",null,"Personas Entraron"),(0,a.Lk)("th",null,"Personas Compraron"),(0,a.Lk)("th",null,"Artículos Vendidos"),(0,a.Lk)("th",null,"Ganancia Neta")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,((e,l)=>((0,a.uX)(),(0,a.CE)("tr",{key:l},[(0,a.Lk)("td",null,(0,b.v_)(l+1),1),(0,a.Lk)("td",null,(0,b.v_)(e.totalCustomers),1),(0,a.Lk)("td",null,(0,b.v_)(e.buyingCustomers),1),(0,a.Lk)("td",null,(0,b.v_)(e.totalItemsSold),1),(0,a.Lk)("td",null,(0,b.v_)(e.netGain),1)])))),128))])])])),_:1})):(0,a.Q3)("",!0)])}var pe={components:{Fieldset:R},data(){return{results:[],simulationCount:1}},methods:{simulateStore(){this.results=[];for(let e=0;e<this.simulationCount;e++){let e=0,l=0,t=0;for(let i=0;i<24;i++){let n=Math.floor(5*Math.random());e+=n;for(let e=0;e<n;e++){let e=Math.random();e<=.2||(l++,t+=e<=.5?1:e<=.9?2:3)}}let n=75*t,a=50*t+300,o=n-a;this.results.push({totalCustomers:e,buyingCustomers:l,totalItemsSold:t,netGain:o})}}}};const ve=(0,r.A)(pe,[["render",he],["__scopeId","data-v-fba00bd0"]]);var fe=ve;const Ae={class:"flex-container"},ge={class:"controls"};function be(e,l,t,o,i,u){const s=(0,a.g2)("Fieldset");return(0,a.uX)(),(0,a.CE)("div",null,[l[5]||(l[5]=(0,a.Lk)("h1",null,"Juego de Lanzamiento de Monedas",-1)),(0,a.Lk)("div",Ae,[(0,a.bF)(s,{legend:"Enunciado del Juego"},{default:(0,a.k6)((()=>l[2]||(l[2]=[(0,a.Lk)("p",null," En un juego se arrojan 3 monedas. Si todas las monedas muestran Cara o Sello, el apostador recibe 5 Bs. De otra manera, debe pagar 3 Bs. Determina cuánto habrá acumulado el apostador luego de un número determinado de lanzamientos. ",-1)]))),_:1}),(0,a.Lk)("div",ge,[l[3]||(l[3]=(0,a.Lk)("label",{for:"numLanzamientos"},"Número de lanzamientos:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>i.numLanzamientos=e),id:"numLanzamientos",min:"1",placeholder:"Introduce número de lanzamientos"},null,512),[[n.Jo,i.numLanzamientos]]),(0,a.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>u.simulateGame&&u.simulateGame(...e))},"Simular Juego")])]),i.results.length?((0,a.uX)(),(0,a.Wv)(s,{key:0,legend:"Resultados",class:"results-container"},{default:(0,a.k6)((()=>[(0,a.Lk)("table",null,[l[4]||(l[4]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Número de Lanzamiento"),(0,a.Lk)("th",null,"Monedas Lanzadas"),(0,a.Lk)("th",null,"Ganancia/Pérdida (Bs)"),(0,a.Lk)("th",null,"Total Acumulado (Bs)")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,((e,l)=>((0,a.uX)(),(0,a.CE)("tr",{key:l},[(0,a.Lk)("td",null,(0,b.v_)(l+1),1),(0,a.Lk)("td",null,(0,b.v_)(e.coins),1),(0,a.Lk)("td",null,(0,b.v_)(e.gain),1),(0,a.Lk)("td",null,(0,b.v_)(e.total),1)])))),128))])])])),_:1})):(0,a.Q3)("",!0)])}var Ie={components:{Fieldset:R},data(){return{numLanzamientos:10,results:[]}},methods:{simulateGame(){this.results=[];let e=0;for(let l=0;l<this.numLanzamientos;l++){const l=this.throwCoins(),t=l.every((e=>e===l[0])),n=t?5:-3;e+=n,this.results.push({coins:l.join(", "),gain:n,total:e})}},throwCoins(){const e=["Cara","Sello"];return Array(3).fill(null).map((()=>e[Math.floor(2*Math.random())]))}}};const ye=(0,r.A)(Ie,[["render",be],["__scopeId","data-v-3c0ba880"]]);var Se=ye,je="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAODQ0NDRAPDg4NDQ8NDQ0ODw8NDw0OFhEWFhYRFRUYHSghGBolGxUVITEhJSkrLi4uFx8zODMtNyktLi0BCgoKDg0OGxAQGC0iIB8rLSstLSstKy8tKy81LS0tLS0vLS0tLS0tKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEBAAMAAwEAAAAAAAAAAAAAAQIGBwMEBQj/xABDEAABBAEBBAcFBAYIBwAAAAABAAIDEQQFBhIhMQcTQVFhcYEUIlKRoSMygrEzQnKSwtEkc6Kys8Hh8BUlNVNjdPH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAjEQEBAAIBBAIDAQEAAAAAAAAAAQIRAxIhMVETIgQyQZFh/9oADAMBAAIRAxEAPwDpaK0rS9BhYorStIMUWVKUgiLKlKQRFaSkERWlaQYosqUpBEVpWkGKK0vQ1TWsbEH9JmZGSLDCd6R3kwWT8lGzW3vItQm6RsJpprMmQfE2JrR/acCssfpFwHGpOvgvhckVj5sJVfkx9rfHl6bai9fA1CHJZv48scze+NwdXmOz1XtUrbV0xRWkpSIitJSCIsqSkGKLKlKQRFlSUgxRZUlKBiiypKUjFFlSUgypKVRVSlJSqIJSUqiCUlKoglJSqIJSUqiCUlKoglL09V1ODDiM+TI2KMcLdzcfhaBxcfALyannx4sEuTMd2OFhe89prkB3kmgPNcE13W5tTyjNOaY2+qhB9yGP4R4nhZ7VTPk6V8MOpu2r9Ir5muZhRugYeAyJCDKW97WDg3zJK05xLnOe9xLnG3Pcd57j3klesJQBfYF6M+USb/8AgWe5W+WrHGY+H0pHEciHeBXqe03YI8wV6keTxrl4hXIfdHt5FUS8jJdxxAJDTwNEtP0X08HaPNwn3Bky7oN9XI4zRkdxa6x8qXwHPXk37Hopl0iyV2TZPpEhyy2DLDcbIdTWuv7CV3cCfunwPzW8UvzIwjtXXOi7ap2Q04GQ4ulhZv48jjbpIhwLCe0t4ce0eS78fLvtXDk49d43+kpVF2cUpKVRBKSlUQSkpVEEpKVRBKSlUQSkpVEGSUsqSlCWNJSypKTYxpFlSUmxjSUsqSkGNIsqSkGNIsqSkGKLKl6OuZ5xMWfJbE6cws3zEwgOc0EWR5Cz6KNmmh9M+olsGLhtPCZ7ppPFsdBoP4nX+FcujdTSe1x4eS+xtntL/wAUyY5+rMLY4RC1m/1l++529dCr3gPRfCfJ/osud3WrCajLIn4L0euBJsg+vJdd6POjxjoxmapCHukowYsoO6xnxyN7SfhPIc+PLp0GnwsaGshiY0cA1sbGgDyAXC8sl1HWYvymfA2OwheQzcB3r9MavshgZjSMjFhcSP0jG9VIPJ7KK+No/RbpmM8yOiflOu2DKcJWRjuDAAD5kEqflh0vz2H73I3XOuNLJsnZfov1fFhxxjdjjjY0cAGMa0D0C9HUtCxMlpbkY0EwPxxMJHiDVhV+X/ieh+YGvWxbB5AZq+nuc8Rj2jdL3Gh7zHAN/ESG/iW9bU9E8RY+XS3OjkALhiyOL45PBrzxafMkeS5DPG9rnMeHMexxY5ptrmPBog9xBC64Zy94plj/AB+qqRfJ2Q1E5mm4WS82+WBvWHvkb7r/AO00r7FLbKxWMUpZUlKRjSLKkpBjSLKkpBjSUsqSkGKLKkpBjSUsqSk2MqRZUlKqWKUsqSkGKLKkpBiitJSCIrStIMUVpWkGKUrStIPz50o4MOLq0kWKwRMdDFK9jb3RK8uLt0dgrd4DgugdG+x+G3Ew9RfGZcmaFswMp32ROPEbjeQ8zZWk9L7f+cy+OPjn+wusbMzR42kYDpXtjYzCx7c8hoFxgrB+RdeG3i8NhavM1aLn9JWBCab189cLijpvzeQvFg9KmDJIxj2ZEIe4N6yRsZY2zzduuJA9FwmOXp0tjoSq9DA1KPIZ1kLw9oc5hI4U9ppzSOwgr2eu5+CbNPIV4nL4+ubUYuEH+0SU5kYkMbQXPILt1oA7yeXkT2LVD0s4V/oMuu/dh/LfU6t8Q3I34rh/TJpTYdRjyGAAZkO8+hzljIa4+rSxdM0rbfAyiGtlMTzyZO0x8e7e+79Vq3TbBeNgzfBkPjvwfHvfwJx7mXcy7x9rohP/ACWAfDNkgeXXOP8AmtzWmdEH/Ro//YyP763Wl6ePiMGX7ViitK0rKsaSllSUgxpFlSUgxRZUlIMUWVJSDFFlSUgtJSqKqUpKVRBKSlUQSkpVEEpKVRBKSlUQSkpVeLIk3Gl3yUZZdM3UzG26jjPS3hmTXII/u+0Y+LGHc63ppGX6LbtZ1XCZuYceOdQlxGCAMAJZFugN94n3QeHnwWsdLWWGZmBlMrrGQvAsB+69kgc00e7ftfX6KYPaNPyZrHXOy5R1jhv0/q2EOIsXxN1axZ5TKdbZjjcfq+bmZpjbvyaXpUDDyM7Y+PzPH0XzY86GZwYMDSpHO5MiL4Hu/Zoi/Rbftrs5h40EU0rMrKL4shsmSxzfaXZhY3qd4mgxnCSmimg1wK5p0f6LlyZsAlhlfD7RFvmVjywN3vtCSRwG7vfTtUfxbW3R9m9pIMADGnxJcGOSQuEpkdkQ75AHFxsgcAt01HUocWEzzyNjiFe+eIJPKq5rXduNOjh0rPJO+2KF5jc7mQCNwm+bhwF9tX2rnrszUJBokeoxluC7JxmY7nBlSgkBu9RJvd764KnTMu5uzs2HaLMgzJTks085HuAdflSSQQlrQacGFzeHE8SF8KHWYQfdw9FH7TQ4fvO4fVdP1fRI348/WNdI1kRLYY/vyuv3iL4bwaDug8N518wK4VrenSDU5fZosqHE60GFmSHAiChYd2d/Dny7VbGyw6W/RZb2gPdo2DIw8d7H3G7w7wRzXi2y1eDO0Z7IGOx5MDIgklxZb32McXRjdvmLkH+6W57ObMMiw8GZpdBO6FnteOBvRTg3Rew/ckAI94UT2grmPSu4Y+rFjKAkw4esbVh1vfzH4Wn0CTvlpF7R0foijrRYCf15slw8uuc3+FblS1TYqRsGm4EQ+8Mdj3j4d/3+P7y2xa+Lkme56ZuXjuN37SkpVF1ckpKVRBKSlUQSkpVEEpKVRBKSlUQVESkSIlJSAiUigERKQEREBERAXgzWb0TwOdWPRedKUZTc0nG6u3E9rGn/AInozn/o3ZYaXHkT10Vj6hfawsqXZ/Nzt/Fnn0vOm9qjmxWdYcWU/fY5o5D/ACArtr1ulnT3sxY5YxXUZgka8c2bzSPzDPkt82Z1VuVjQZLDwmja8j4XV7zfQ2PRedvWM/x6OU3a+XjdJ+jSDjldWe1ssMrSPA8FnkdJejMHDMY/wayU/wAK2qTCgl4yQwyHvfEx5+oSLScZnFmNjtPe2GIfkFP1c+7mOt6xJtEGabpkU4wpJGPztQljMUYia69yO+ZJA+nZZW0ba7NHO004uORHNjmOXDceAbLF90X2WLF+K2XJyA07gFVXksHZTK4EE9w7FS5avb+LTGtG0/pLghayHV458DMYNyZkkLzFI4cC9jgDwPPuX129I+jEX7bGPAslv+6tohcyYOa9rXBtWHAOHHwPkvG7R8S7OLjX39RF/JWnTe6LuNPyelLSwdzHfPlyH7sWNjyOc75gLnu1+NkT42o63mwnGfkSY0GHjSD7WLHa7iXDsJrl5runVRxCo2MjHcxjWfkuS9L+f10uFprPedJKJpGjnxuNg9befQKcbOrUTrtutr0PFeyWGJ92Iowe22hg4/Jbqvj6XCXTvmeK93dYO5o4L7C0fiz62+3D8nLeUnqCIlLSzCIiAiJSAiIgIlJSAiJSCoiIkREQFFUQEREBERAREQEREGv7XaM7MwMzHbW9JE4xn/yD3m/UBcw6K9pWY94MxcBLMDDf6jnCi0js4gerl29cF6Tdnzp+pGeJpbBluM8TxyZMSS9g7jfvDwPgs+XDJjZGnj5bb3dyx5LCx1LWMfEZv5U0UDewyPDS7yHM+i4voHSLPjxOjl3ZAyCTq3my8S04tJPbxIFeC9zYjZJmr48mo6hNLNNJK+Nhc8ke7VudVE8bFAgALN0dP7O17+H3to9vtKlsGPIyaI4x72O1xHLiXNJ+S+AzbzTpDuS4mZuXy9oZ6ciCfmtlGyeLAQBgQPI5Orr77L+1N2vK7Q8PdaG6XA3dNk+zxcT+LgFXq4/TpMcvb3NB280ogRtldjuNWMkObZ8ZOLfqtvZO17Q9jmvY4W1zSHNcPAjmufDYLDyLLsaPHB/WjfI1x8mtduDz4+S1Nmc7Z3Vp8WKV8uK7HL2xPdY3nMLmbwAoO3gRY5ghWkmX6qWWXu6ptDq8eJBJPLe6wchzceQA9VyTYkv1HaL2h9SV12QS7gGMaN2Oh2VbAP8Ad/G2h2myM43M6m0AWNtrTTiRY9foF0voZ0A4+HJnSNqTNI6u7tuM0nd/eNny3V24uL258mep2b7BEWkkrzoi0YYTCajLllcruiiqK6oiIgIiIIiqICIiAoqiAiqKBEVRBEVRBEVRBEVRBEVRBEVRBF8Xa7Z+PU8KTFed1xp8MnbFMPuu8uYPgSvtr0da1WPDgdkTXughoa0W57jyaEqY/M+o4MmNNLjZALJYXGN4I8eY8COI819rZLavJ0zebDuywvdvOgkvd3viaRxaV9jbzUmao4S9RHBKwbrZQXOlkZ2MeeAI7uHBaHvOYd1wog8b4LhlJezVjk6BqXSnmSANhx8eKuJLy+ckeH3aXzx0lajY9zE4VY6mTiP31qIl9eKvXfRU+PH0v1X26I7pWynRlrcWCN9V1hke9oPeGUPzWhZ2Q6aaSed5klkdvSOdzLj/AKV8l6z5eC8uJiumcf1Wdrv5eKtMZPEVuXts2wGysmqZbXSNPsUJvIk4tD6HCJp7XE1fcPRfoGNga0NaA1rQGtaBQa0CgAO5cz2R2xiw4YsR2OyOBnAPguwSbL3NN7xJ4k2umxvDmhzSC1wDmkciCLBXbHTPnbaqKorOaIqiCIqiCIqiCIqiCIqiCIqiCqKpShKKoiCIrSUgiK0lIIitIgKK0lIIitJSCE1xPADmT2LQekXVoMjGGPBJ1krJ2yHcFsoNcCN7kfvdncvR212mdNPJiwl/UxOLHhgP2rxzLjyod3qtX+0d8LB4++7+SravI9aKIO4OFHtB4EL3MbY5mbbeuDJBxa1zD7ze2nA8/ClGY/G3Oc495NAeg4LZNHgIkwXR7xfK82B3NfRr8NqlWjRdS2AyWPd7OWSMvgHnq3jwN8PqvSj2I1F3KADzliH8S/QuRpRJ+61/iOBXhbpbhyYfouOuWemjfHXItK6L5XNJyZmMfXuRsJcwGxZe6u6+A+axyNGjhcWtk61jeAIZ1bT5CzwXXNU097MWdzR73VkBreLjfA/S1znUIAI4HC/tGvLh2cHkBdMJlJ9nLOy+GvSxkndYPXsC7Ps7rGNNFDDDIN+OJjOrf7j/AHWgcAefLstck9nLfuPI8He+3+f1RssjCCW3RsOjdxB76PL5rpLpzs27qi1TYXaM5jHwSkmaEA7zgWufHys32g9viFtdK+1NIitIiEVRKQRVKRAUVpEBESkBERARVFCURVEERVEERVEERVEERVEEXqavl9RjTzdscbnN/aqm/Wl7i1vb+bdwC3/uyxs9Bbv4US5nd8+JPM95VCgWQVF2TQtq2fH22leeR+blq7Atr0AfbaV4e0/m5RSOjIiKR6+ofoJf6t35LkuoN/o+F/Vy/wCKV1vO/RSfsO/Jco1Af0bC/q5f8UqB8khYryOC8ZUj6uyuZ1Gdjvv3XP6p/wCy/wB38yD6LrS4e1xBscxRHmF22CTfYx/xsa75i1bFWskVRSqiKogiKogiKogiKogiKogqIiAiIgIiICIiAiIgIiIC03pLkqHGZ8UrnfJtfxIiipjnrXcT5rytRFVd5mBbFss5py8QAHeb1u+TVG2uqvRVFA6aiiKR4cz9G/8AZP5LkEz2lkYAIc0ODyaoknhXoiKCvTeF4iiKR4weJ8l2TZ6TfwsR3fjxj1DQP8kRTFa+giIrKiIiAiIgIiICIiAoiIP/2Q==";const Ce={class:"profile"};function Ee(e,l,t,n,o,i){return(0,a.uX)(),(0,a.CE)("article",Ce,l[0]||(l[0]=[(0,a.Lk)("div",{class:"profile-image"},[(0,a.Lk)("img",{src:je})],-1),(0,a.Lk)("h2",{class:"profile-username"},"Edely Tito",-1),(0,a.Lk)("small",{class:"profile-user-handle"},"@EdelyTL",-1)]))}var Pe={name:"ProfileComponent"};const Fe=(0,r.A)(Pe,[["render",Ee]]);var Xe=Fe;const xe=[{path:"/",component:g},{path:"/ejercicio1",component:D},{path:"/ejercicio2",component:w},{path:"/ejercicio3",component:Z},{path:"/ejercicio4",component:ee},{path:"/ejercicio5",component:fe},{path:"/ejercicio6",component:ke},{path:"/ejercicio7",component:ie},{path:"/estudiante",component:Xe},{path:"/ejercicio8",component:Se}],Re=(0,p.aE)({history:(0,p.LA)("/simulacion/"),routes:xe});var Me=Re;(0,n.Ef)(h).use(Me).mount("#app")}},l={};function t(n){var a=l[n];if(void 0!==a)return a.exports;var o=l[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(l,n,a,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],o=e[d][2];for(var u=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(u=!1,o<i&&(i=o));if(u){e.splice(d--,1);var r=a();void 0!==r&&(l=r)}}return l}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]}}(),function(){t.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(l,{a:l}),l}}(),function(){t.d=function(e,l){for(var n in l)t.o(l,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={524:0};t.O.j=function(l){return 0===e[l]};var l=function(l,n){var a,o,i=n[0],u=n[1],s=n[2],r=0;if(i.some((function(l){return 0!==e[l]}))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(s)var d=s(t)}for(l&&l(n);r<i.length;r++)o=i[r],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunksimulacion"]=self["webpackChunksimulacion"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(9556)}));n=t.O(n)})();
//# sourceMappingURL=app.b4ff254e.js.map