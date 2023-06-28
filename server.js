const express = require('express');
const app = express();
const path = require('path');
const studentDb = require('./data/student-db');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.send('<h1>Hello!!!</h1>');
});

app.get('/home', function(req, res) {
    res.render('home');
  });

app.get('/student', function(req, res) {
    res.render('student/index', {
        student: studentDb.getAll()
    });
});


app.listen(3000, function() {
    console.log('On Port 3000');
});

