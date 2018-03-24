console.log('Loaded!');
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

var button =document.getElementById('counter');
var counter= 0;
button.onClick= function(){
    var span=document.getElementById('count');
    counter=counter+1;
    span.innerHTML=counter.toString();
    
    
}