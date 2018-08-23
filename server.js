var http=require('http')

function build(){
    
    var exec = require('child_process').exec,child;

child = exec('ng build', function(error,stdout,stderr) { 
    if (error) {
      console.log(error.stack); 
      //console.log('Error code: '+ error.code); 
      //console.log('Signal received: '+ 
      //       error.signal);
      }
      //console.log('Child Process stdout: '+ stdout);
      //console.log('Child Process stderr: '+ stderr);
  });
} 
build();

const express = require('express');
const cors = require('cors');

const port=process.env.PORT || 3000


const app=express();

app.use(cors());
app.use(express.static("dist"))
app.listen(port,function(){console.log('server started')});