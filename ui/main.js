console.log('Loaded!');
var ele =document.getElementById('min');
ele.innerHTML="new value" ; 

//Change the img poistion
var img= document.getElementById('madi');

function moveRight(){
    marginLeft = marginLeft+10 ; 
    img.style.marginLeft = marginLeft + ' px' ;
}

img.onclick = function(){
    var interval = setInterval(moveRight,100)
};

var 


