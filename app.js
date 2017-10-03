const express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    connection = require('./config'),
    app = express(),
    PORT = 4000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('home', {testing: 'what is going on'});
});

app.get('/api', (req, res) => {
    res.json({"name": "LeeLand"});
});

app.get('/api/:name', (req, res) => {
    let name = req.params.name;
    res.send(name);
});

app.post('/insert', (req, res) => {
    let postName = req.body.name;
    connection.query(`INSERT INTO peaps(first) VALUES ('${postName}');`);
});






app.listen(PORT, () => {
    console.log('listening to port' , PORT);
});

