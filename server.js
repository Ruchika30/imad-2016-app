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


var articles={
    'article-one':{
        title:'ram',
        heading:'article-heading',
        date:'jan 4, 2016',
        content:'<p>helllo i am ruhcika</p>'
    },
};

function createtemplate (data){
    var title = data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    
    var htmlTemplate=
        
    
    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/article-two', function (req, res) {
  res.send("article 2 sent");
});

app.get('/article-three', function (req, res) {
  res.send("article 3 sent");
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


/////////// CREATES URL ENDPOINT
var names = [];
app.get('/submit-name', function(req, res) { // /submit-name?name=xxxx
  // Get the name from the request
  var name = req.query.name;
  
  names.push(name);
  // JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
