console.log('Loaded!');
var element= document.getElementById('main text');
element.innerHTML='New Value';


var img= document.getElementById('madi');
var l=0;
function mover(){
    l=l+'10';
     img.style.marginLeft=l+'px';
}
img.onclick=function(){
   var interval = setInterval(mover,'10');
   
}

