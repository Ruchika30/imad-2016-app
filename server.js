var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;   // DB

var config = {                  //DB
    user : 'ruchika30',
    database : 'ruchika30',
    host  : 'db.imad.hasura-app.io',
    port  :'5432',
    password:'db-ruchika30-34678', 
   // passowrd: process.env.DB_PASSWORD
    
};

var app = express();
app.use(morgan('combined'));

var articles = {
     'articleone' :{
        
            title:'ram',
            heading:'article-heading',
            date:'jan 4, 2016',
            content:`<p>
            helllo i am ruhcika<. you dont know me. I am the one who
            does it all. helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.
            </p>`
            
    
    },
     'articletwo' :{
        
            title:'two',
            heading:'article-heading',
            date:'jan 4, 2016',
            content:`<p>
            helllo i am ruhcika<. you dont know me. I am the one who
            does it all. helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.
            </p>`
            
    
    },
     'articlethree' :{
        
            title:'three',
            heading:'article-heading',
            date:'jan 4, 2016',
            content:`<p>
            helllo i am ruhcika<. you dont know me. I am the one who
            does it all. helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.helllo i am ruhcika<. you dont know me. I am the one who
            does it all.
            </p>`
            
    
    }
};

function createtemplate(data){
     var title=data.title;
     var heading=data.heading;
     var  date=data.date;
     var content=data.content;
     
        var htmltemplate  =`
        
        <html>
            <head>
            <title>
               ${title}
            </title>
            <meta name= "viewport" content= "wihdhhd-skdkk , initial-scale=1"/>
            <link href= "/ui/Style.css" rel ="stylesheet" />
            </head>
            <body>
                <div class="container">
                    
                      <div>
                            <a href="/">Home</a>
                        </div>
                        <div>
                            ${heading}
                        </div>
                        <div>
                           ${date}
                        </div>
                        <div>
                           ${content}
                        </div>
                </div>
            </body>
        </html>`
        return htmltemplate;

}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



/////////// CREATES URL ENDPOINT
//////// METHOD -1 ---- SENDING THRU URLS. Taking the parameters
///// SENDING ARRAYS 
var names = [];
app.get('/submit-name', function(req, res) {   // /submit-name?name=xxxx
  // Get the name from the request
  //var name = req.params.name;        ------ for method 1
  var name = req.query.name;            // METHOD 2 - THRU QUERY PARA
  names.push(name);
  // JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});





//making endpoint for database connection
var pool  = new Pool(config);
app.get('/test-db',function(req,res){
    //make req 
    //return res with results
    pool.query('Select * from articletable',function(err, result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.rows));
        }
        
        
    });
    
});


app.get('/:articleName', function (req, res) {
    //articlename is a var== articleone/ articletwo etc to extract these from article object
    var articleName = req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

//Applying counter

var counter = 0;
app.get('/counter', function (req, res) {
 counter = counter + 1;
 res.send(counter.toString());
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
    pool.query("Select * from articletable where title= '"+req.params.articleName+"' " ,  function(err,result){
        if(err){
            res.status(500).send(err.toString());
            
    }else{
        if(result.rows.length === 0){
                res.status(404).send("artcicle not found");
        }else{
            var articleData  = result.rows[0];
             res.send(createTemplate(articleData));
        }
    }
    });
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
