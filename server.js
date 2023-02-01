const express = require('express');   
const app = express();    
const fs = require('fs'); 
 
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');   

var urlencodedParser = bodyParser.urlencoded({
    extended : false
});  

const port = process.env.PORT || 8000;  
 
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/images/bg', express.static(__dirname + 'projects/spiritAnimal/images/bg'));
app.use('/images/motion', express.static(__dirname + '/images/motion'));
app.use('/scripts', express.static(__dirname + '/scripts'));  

//app.use('/projects', express.static(__dirname + '/projects'));  
app.use('/projects/lsfilm/images', express.static(__dirname + '/projects/lsfilm/images'));  
app.use('/projects/lsfilm/styles', express.static(__dirname + '/projects/lsfilm/styles'));  

app.use('/projects/lsfilm/scripts', express.static(__dirname + '/projects/lsfilm/scripts'));  
app.use('/projects/lsfilm/bower_components', express.static(__dirname + '/projects/lsfilm/bower_components'));  
app.use('/projects/styles', express.static(__dirname + '/styles')); 
app.use('/projects/scripts', express.static(__dirname + '/scripts'));  
app.use('/projects/images', express.static(__dirname + '/images')); 
app.use('/node_modules', express.static(__dirname + '/node_modules')); 

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});   

//Projects
  

app.get('/' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
});

//Projects
app.get('/projects/leechesposter' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/lsfilm/home.html');
}); 

app.get('/projects/tva' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/tvapocalypse/index.html');
}); 

app.get('/projects/sccperformance' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/sccperformance/index.html');
}); 

app.get('/projects/sccperformancesite' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/sccperformancesite/index.html');
});  

app.get('/projects/leeches' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/lsfilm/home.html');
});  

app.get('/projects/znalytics_1' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/znalytics_1/index.html');
});  

app.get('/projects/znalytics_2' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/znalytics_2/index.html');
});  

app.get('/projects/banyan_one' , function(req, res ){ 
        res.sendFile(__dirname + '/projects/banyan_one/index.html');
}); 

app.get('/projects/prospekt' , function(req, res ){ 
        res.sendFile(__dirname + '/projects/prospekt/index.html');
}); 

//Javascript text

//Javascript
app.get('/javascript/leeches' , function(req, res ){ 
    res.sendFile(__dirname + '/javascript/leeches/leeches.txt');
}); 

app.get('/javascript/b-log' , function(req, res ){ 
    res.sendFile(__dirname + '/javascript/b-log/b-log.txt');
}); 

app.get('/javascript/react-forms' , function(req, res ){ 
    res.sendFile(__dirname + '/javascript/react-forms/react-forms.txt');
}); 

app.get('/javascript/wikimedia' , function(req, res ){ 
    res.sendFile(__dirname + '/javascript/wikimedia/wikimedia.txt');
});  

//cplusplus
app.get('/cplusplus/cist2361/lesson1-1' , function(req, res ){ 
    res.sendFile(__dirname + '/cplusplus/cist2361/lesson1-1.txt');
}); 

app.get('/cplusplus/cist2361/lesson1-2' , function(req, res ){ 
    res.sendFile(__dirname + '/cplusplus/cist2361/lesson1-2.txt');
}); 

app.get('/cplusplus/cist2361/lesson3-1' , function(req, res ){ 
    res.sendFile(__dirname + '/cplusplus/cist2361/lesson3-1.txt');
}); 

app.get('/cplusplus/cist2361/lesson3-2' , function(req, res ){ 
    res.sendFile(__dirname + '/cplusplus/cist2361/lesson3-2.txt');
});

app.get('/cplusplus/cist2361/midterm' , function(req, res ){ 
    res.sendFile(__dirname + '/cplusplus/cist2361/midterm.txt');
});


app.get('/projects/spiritAnimal', function(req, res){
    res.sendFile(__dirname + '/projects/spiritAnimal/index.html');
}); 
 
console.log("running at port : " + port );
console.log(__dirname);

app.listen(port);