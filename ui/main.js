/*console.log('Loaded!');
var element= document.getElementById('main text');
element.innerHTML='New Value';


var img= document.getElementById('madi');
var l=0;
function mover(){
    l=l+'5';
     img.style.marginLeft=l+'px';
}
img.onclick=function(){
   var interval = setInterval(mover,'1000');
   
}
*/

console.log('not clicked');
var counter= 0;
//var button = document.getElementById('counter');
window.onload = function(){
document.getElementById('counter').onclick = function() {
console.log('clicked');
counter = counter+1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
};
};