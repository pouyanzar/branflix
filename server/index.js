const express = require('express');
const app = express();
const videoLinks = require('./videoLinks');
const videos = require('./videos');
const bodyParser = require('body-parser');

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/videos', (req,res)=>{
    res.json(videoLinks);
});

app.get('/videos/:id', (req,res)=>{

    const selectedVideo = req.params;
    const videoToShow = videos.find(video => video.id == selectedVideo.id)
    res.json(videoToShow);
});

app.post('/videos/:id/comments', (req,res)=>{

    const submittedComment = req.params;
    console.log(req.body)
    const selectedComment = videos.find(video => video.id == submittedComment.id)
    
    selectedComment.comments.push(req.body)
    console.log(selectedComment)
    res.json(selectedComment.comments)
});
app.listen(8080, ()=>{
    console.log('server running on 8080');
})








