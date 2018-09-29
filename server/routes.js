const express = require('express');
const multer = require('multer');
const algorithmia = require('algorithmia');
const key = require('./key');


const router = express.Router();


const upload = multer({dest:key.multerDestinition});
const client = algorithmia.client(key.algorithmiaClient);
const robots = client.dir(key.algorithmiaDatabase);


router.post('/ocr' ,upload.single('avatar'),(req,res) =>
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

router.post('/colorful' ,upload.single('avatar'),(req,res) =>
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

router.post('/deepfashion' ,upload.single('avatar'),(req,res) =>
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

router.post('/nudity' ,upload.single('avatar'),(req,res) =>
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

module.exports = router ;