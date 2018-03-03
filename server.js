var express = require('express');
const path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
        res.render('index.html');
});


const server = app.listen(port, () => {
        console.log(`Express running in port ${port}`);
});
