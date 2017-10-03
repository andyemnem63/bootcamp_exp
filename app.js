const express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    app = express(),
    PORT = 4000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

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






app.listen(PORT, () => {
    console.log('listening to port' , PORT);
});

