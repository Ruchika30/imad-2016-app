console.log('Loaded!');
var ele =document.getElementById('min');
ele.innerHTML="Hey i am new value" ; 

//Change the img poistion
var img= document.getElementById('madi');
var marginLeft = 0 ;
function moveRight(){
    console.log("gkgk");
    marginLeft = marginLeft +5 ; 
    img.style.marginLeft = marginLeft + ' px' ;
}

img.onclick = function(){
    
    var interval = setInterval(moveRight(),100);
};




