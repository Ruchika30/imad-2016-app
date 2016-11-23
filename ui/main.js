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
    var button = document.getElementById('counter'); //button id is counter
    button.onclick = function(){
    // make request to counter varibale
    //Capture the response in variable 
    //Render the variable in index
    //Create request
    var request  = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
     if(request.readyState === XMLHttpRequest.DONE)   {
           if(request.status === 200){                        // if successful
               
                var counter  = request.responseText;          // take response & put in counter var
                var span =  document.getElementById('count'); // select span tag
                 span.innerHTML = counter.toString();        // put the value in span
         }
     }
    };
    // make  the request
    request.open('GET','http://ruchika30.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

   // Submit button
   
    var sub = document.getElementById('submit_btn');
   
    sub.onclick  = function(){
        
    var request  = new XMLHttpRequest();
    request.onreadystatechange = function(){
        
     if(request.readyState === XMLHttpRequest.DONE)   {
         if(request.status === 200){//make request to render a list
              var names  = request.responseText;
              names = JSON.parse(skills);               // to convert string to object
              var list='';
              
              for(var i=0;i < names.length; i++){
                  list += '<li>'+ names[i] +'</li>';
          }
          var ul  = document.getElementById('namelist');
          ul.innerHTML = list;
          
         }}
    };
       var nameInput = document.getElementById('name'); 
       var name = nameInput.value;
      request.open('GET','http://ruchika30.imad.hasura-app.io/submit-name?name=' + name,true);
      request.send(null);
    };

    
    
    /// DISPLAYING LIST THAT IS PREDEFINED
    //   var nameInput = document.getElementById('name');
    //   var name = nameInput.value;
    //   var submit = document.getElementById('submit_btn');
    //     submit.onclick  = function(){
    //         var skills = ['n1','1n2','n3'];
    //         var list = '';
             
    //          for(var i=0;i < skills.length; i++){
    //               list += '<li>'+skills[i]+'</li>';
    //       }
    //         var ul  = document.getElementById('namelist');
    //       ul.innerHTML = list;
    //     };
            
        
      
     






























