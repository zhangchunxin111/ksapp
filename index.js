
var express=require("express");
var app=express();

app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.engine("html", require("ejs").renderFile);

app.get('/',function (req,res) {
    res.render('index.html');
});
app.get('/me',function(req,res){
    res.render('my.html');
});
app.get('/denglu',function(req,res){
    res.render('denglu.html');
});
app.get('/kao',function(req,res){
    res.render('kaoshi.html');
});
app.get('/kao1',function(req,res){
    res.render('kaoshi1.html')
});
app.get('/kao2',function(req,res){
    res.render('kaoshi2.html')
});
app.get('/cuo',function(req,res){
    res.render('wrong.html')
});
app.get('/cuo1',function(req,res){
    res.render('wrong1.html')
});
app.get('/cuo2',function(req,res){
    res.render('wrong2.html')
});

app.listen(8888, function () {
    console.log("start....")
});