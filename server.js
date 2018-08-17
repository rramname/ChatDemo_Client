var http=require('http')
const express = require('express');
const cors = require('cors');

const port=process.env.PORT || 3000


const app=express();

app.use(cors());
app.use(express.static("dist"))
app.listen(port,function(){console.log('server started')});