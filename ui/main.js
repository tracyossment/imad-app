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
var request = XMLHttpRequest();
request.onreadystatechange=function(){
    if(reuest.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
            
          var counter=  request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
            
        }
    }
};

request.open('GET', 'http://triparnabbain.imad.hasura-app.io/counter',true);
request.send(null);

/*console.log('not clicked');
var counter= 0;
//var button = document.getElementById('counter');
window.onload = function(){
    document.getElementById('counter').onclick = function() {
    
console.log('clicked');
counter = counter+1;
 var span = document.getElementById('count');
     span.innerHTML = counter.toString();
            
};

};*/

