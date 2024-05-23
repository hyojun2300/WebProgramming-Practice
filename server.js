const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const mongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://Songhyojun:isQlLFA9FptkrE3e@cluster80502.o9ppw6e.mongodb.net/";
let mydb;

// body-parser 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 정적 파일 경로 설정
app.use(express.static('public'));

mongoClient
  .connect(url)
  .then((client) => {
    mydb = client.db("Myboard");
    mydb
      .collection("post")
      .find()
      .toArray()
      .then((result) => {
        console.log(result);
      });

    app.listen(3000, function () {
      console.log("3000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/home", function (req, res) {
    res.render('home');
});

app.get("/enter", function (req, res) {
  res.render('enter');
});

app.post("/save", function (req, res) {
  const body = req.body;
  const title = body.title;
  const content = body.content;
  const someDate = body.someDate;

  mydb
    .collection("post")
    .insertOne({
      title: title,
      content: content,
      someDate: someDate,
    })
    .then((result) => {
      console.log(result);
      console.log("데이터 추가 성공");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("데이터 추가 실패");
    });

  res.redirect('/list');

});

app.get('/list', function(req, res) {
    mydb.collection('post').find().toArray().then(result => {
        console.log(result);
        res.render('list', {data: result});
    }).catch((err) => {
        console.log(err);
        res.status(500).send("데이터가져오기 실패");
    });
});

app.post('/delete', function(req,res){
    console.log(req.body);
    req.body._id = new ObjectId(req.body._id);
    mydb.collection('post').deleteOne(req.body)
    .then(result => {
        console.log('삭제완료');
        res.status(200).send();
    })
    .catch(err => {
        console.log(err);
        res.status(500).send();
    })
});

app.get('/content/:id', function(req, res) {
    const id = new ObjectId(req.params.id); 
    mydb.collection('post').findOne({_id: id})
    .then((result) => {
        console.log(result);
        res.render('content', { data: result }); 
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Error fetching content");
    });
});

app.get('/edit/:id', function(req,res){
    const id = new ObjectId(req.params.id); 
    mydb.collection('post').findOne({_id: id})
    .then((result) => {
        console.log(result);
        res.render('edit', { data: result }); 
    })
});

app.post('/edit', function(req,res){
    const id = new ObjectId(req.body.id);
    const title = req.body.title;
    const content = req.body.content;
    const someDate = req.body.someDate;
    mydb.collection('post').updateOne({_id: id}, {$set: {title: title, content:content, someDate:someDate}})
    .then((result)=> {
        console.log('수정 완료');
        res.redirect('/list');
    })
    .catch((err)=>{
        console.log(err);
    });
});