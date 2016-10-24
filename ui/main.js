/*console.log('Loaded!');
var ele =document.getElementById('min');
ele.innerHTML="Hey i am new value" ; 

//Change the img poistion
var img= document.getElementById('madi');
var marginLeft = 0 ;

function moveLeft(){
    console.log("gkgk");
    marginLeft = marginLeft +20 ; 
    img.style.marginLeft = marginLeft + 'px' ;
}

img.onclick = function(){
    
    var interval = setInterval(moveLeft,100);
};*/
 
 
var button = document.getElementById('counter');
var counter =  0; 
button.onclick = function(){
    // make request to counter varibale
    
    //Capture the response in variable 
    
    //Render the variable in index
    
    counter  =counter +1;
    var span =  document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
    
};




