const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const algorithmia = require('algorithmia');
const key = require('./key');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const upload = multer({dest:key.multerDestinition});
const client = algorithmia.client(key.algorithmiaClient);
const robots = client.dir(key.algorithmiaDatabase);


app.post('/ocr' ,upload.single('avatar'),(req,res) =>
{
    robots.putFile(req.file.path, function(response) 
    {
        if(response.error) 
        {
          return console.log("Error: " + response.error.message);
        }
        else
        {
        algorithmia.client(key.algorithmiaClient)
        .algo(key.ocr)
        .pipe("data://sharma_vivek62/visual/"+req.file.filename)
        .then(function(response) 
           {
               res.json({data:response.get()})
           });
        }
    });
})

app.post('/colorful' ,upload.single('avatar'),(req,res) =>
{
    robots.putFile(req.file.path, function(response) 
    {
        if(response.error) 
        {
          return console.log("Error: " + response.error.message);
        }
        else
        {
        algorithmia.client(key.algorithmiaClient)
        .algo(key.colorful)
        .pipe("data://sharma_vivek62/visual/"+req.file.filename)
        .then(function(response) 
           {
               let respon = response.get().output;
               let fileName = respon.substring(57);
               let robot = client.dir(key.colorfulGeneratedDB);
               robot.file(fileName).get(function(err, binary) {
                   res.json({data:binary});
                });
           });
        }
    });
})

app.post('/deepfashion' ,upload.single('avatar'),(req,res) =>
{
    robots.putFile(req.file.path, function(response) 
    {
        if(response.error) 
        {
          return console.log("Error: " + response.error.message);
        }
        else
        {
        algorithmia.client(key.algorithmiaClient)
        .algo(key.deepfashion)
        .pipe("data://sharma_vivek62/visual/"+req.file.filename)
        .then(function(response) 
           {
               res.json({data:response.get()})
           });
        }
    });
})

app.post('/nudity' ,upload.single('avatar'),(req,res) =>
{
    robots.putFile(req.file.path, function(response) 
    {
        if(response.error) 
        {
          return console.log("Error: " + response.error.message);
        }
        else
        {
        algorithmia.client(key.algorithmiaClient)
        .algo(key.nudity)
        .pipe("data://sharma_vivek62/visual/"+req.file.filename)
        .then(function(response) 
           {
               res.json({data:response.get()})
           });
        }
    });
})

app.listen(key.port,(err) =>
{
    if(err) console.log('Error');
    else console.log('Server is running on port '+key.port);
})