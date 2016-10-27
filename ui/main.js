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
 
 // NORMMAL BUTTON
var button = document.getElementById('counter');
button.onclick = function(){
    // make request to counter varibale
    //Capture the response in variable 
    //Render the variable in index
    //Create request
    var request  = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
     if(request.readyState === XMLHttpRequest.DONE)   {
         
         if(request.status === 200){
            var counter  = request.responseText;
            var span =  document.getElementById('count');
             span.innerHTML = counter.toString();

         }
     }
    };
    // AMke the request
    request.open('GET','http://ruchika30.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

    //Submit button
    var submit = document.getElementById('submit_btn');
    submit.onclick  = function(){
    
    var request  = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
     if(request.readyState === XMLHttpRequest.DONE)   {
         
         if(request.status === 200){//make request to render a list
      
      
      
      var skills = request.responseText;
      skills = JSON.parse(skills);
      var list='';
      
      for(var i=0;i < skills.length; i++){
          list += '<li>'+skills[i]+'</li>';
      }
      var ul  = document.getElementById('namelist');
      ul.innerHTML = list;
      
         }}
    };
      var nameInput = document.getElementById('name');
      var skills = nameInput.value;
      request.open('GET','http://ruchika30.imad.hasura-app.io/submit-name?name='+ skills,true);
      request.send(null);
        };































