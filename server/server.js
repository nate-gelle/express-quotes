// requires
let express = require('express');
let app = express();
const bodyParser = require('body-parser');

// global
const port = 5000;
let quotes = [1, 2, 3];

// uses
app.use( express.static('server/public'));
app.use( bodyParser.urlencoded({extended:true}));

// spin up server
app.listen( port, () => {
    console.log('server up on:', port);
});

// get route
app.get('/quotes', (req, res) => {
    console.log('in GET hit for /quotes route');
    res.send(quotes)    
});

// post route
app.get( '/quotes', (req, res) => {
    console.log('in post hit for /quotes route', req.body);
    
});