console.log('Loaded!');
var ele =document.getElementById('min');
ele.innerHTML="Hey i am new value" ; 

//Change the img poistion
var img= document.getElementById('madi');
var marginLeft = 0 ;

function moveLeft(){
    console.log("gkgk");
    marginLeft = marginLeft +20 ; 
    img.style.marginLeft = marginLeft + ' px' ;
}

img.onclick = function(){
    
    var interval = setInterval(moveLeftt,100);
};




