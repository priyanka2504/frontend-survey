
const express = require('express')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'Get, post, options, put, patch, delete');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/survey");

var nameSchema = new mongoose.Schema({
    Rate: String,
    Framework: String,
    Aware: String,
    List: String,
    Workshop: String,
    Important: String
});
var User = mongoose.model("User", nameSchema);
var db = mongoose.connect("mongodb://localhost:27017/survey");

app.get('/data', (req, res) => {
    User.find({}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/aware/yes', (req, res) => {
    User.find({"Aware" : "yes"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/aware/no', (req, res) => {
    User.find({"Aware" : "no"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/rate/a', (req, res) => {
    User.find({"Rate" : "1-4"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/rate/b', (req, res) => {
    User.find({"Rate" : "4-8"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/rate/c', (req, res) => {
    User.find({"Rate" : "8-10"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/framework/a', (req, res) => {
    User.find({"Framework" : "daily"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/framework/b', (req, res) => {
    User.find({"Framework" : "weekly"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/framework/c', (req, res) => {
    User.find({"Framework" : "monthly"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/list/a', (req, res) => {
    User.find({"List" : "react,"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/list/b', (req, res) => {
    User.find({"List" : "angular,"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/list/c', (req, res) => {
    User.find({"List" : "none,"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/workshop/have', (req, res) => {
    User.find({"Workshop" : "have"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/workshop/not', (req, res) => {
    User.find({"Workshop" : "not"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/important/a', (req, res) => {
    User.find({"Important" : "Important"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/important/c', (req, res) => {
    User.find({"Important" : "very important"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/important/c', (req, res) => {
    User.find({"Important" : "not important"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});

app.get('/data/important/c', (req, res) => {
    User.find({"Important" : "cant say"}, function(err,docs){
        if (err)
            console.log('error occured in the database');
        console.log(docs);
        res.send(docs)
    });     
    return res;
});


app.post('/api/add', (req, res) => {
    console.log("inside post");
    const myData = new User(
        {
            Rate: req.body.Rate,
            Framework: req.body.Framework,
            Aware: req.body.Aware,
            List: req.body.List,
            Workshop: req.body.Workshop,
            Important: req.body.Important,
        });
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
});

const port = process.env.PORT || 1111;
app.listen(port, () => console.log(`Listening ${port}`))