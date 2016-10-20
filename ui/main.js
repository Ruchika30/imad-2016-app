console.log('Loaded!');
var ele =document.getElementById('min');
ele.innerHTML="Hey i am new value" ; 

//Change the img poistion
var img= document.getElementById('madi');
var marginLeft = 0 ;
function moveRight(){
    marginLeft = marginLeft+5 ; 
    img.style.marginLeft = marginLeft + ' px' ;
}

img.onClick = function(){
    var interval = setInterval(moveRight,100);
};




