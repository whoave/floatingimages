/* mert can uslu */

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );;
document.getElementById("container").setAttribute("style","height:"+height+"px;");

const i1 = {
	dom:document.getElementById("i1"),
	x:10,
}
const i2 = {
	dom:document.getElementById("i2"),
	x:10,
}
const i3 = {
	dom:document.getElementById("i3"),
	x:10,
}
const i4 = {
	dom:document.getElementById("i4"),
	x:10,
}
// first setting
		i1.x = 100;
		i2.x = 950;
		i3.x = 750;
		i4.x = 200;
		let limX = i1.x;

let turn1 = Math.floor(Math.random()*1)+1;
let turn2 = Math.floor(Math.random()*1)+1;
let turn3 = Math.floor(Math.random()*1)+1;
let turn4 = Math.floor(Math.random()*1)+1;

let numberAdder = setInterval(
	function(){
		if(i1.x <= limX){
		turn1= Math.abs(turn1);
		turn2= Math.abs(turn2);
		turn3= Math.abs(turn3);
		turn4= Math.abs(turn4);
		}
	i1.dom.style.left = i1.x+"px";
	i2.dom.style.left = i2.x+"px";
	i3.dom.style.left = i3.x+"px";
	i4.dom.style.left = i4.x+"px";
	if( i1.x >= limX){
		i1.x += turn1;
		i2.x += turn2;
		i3.x += turn3;
		i4.x += turn4;
		if(i1.x>=(limX+50)){
		turn1= -turn1;
		turn2= -turn2;
		turn3= -turn3;
		turn4= -turn4;
		i1.x += turn1;
		i2.x += turn2;
		i3.x += turn3;
		i4.x += turn4;
		}
	}
	},
	10);



