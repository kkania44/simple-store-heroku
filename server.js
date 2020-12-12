const express = require('express');
const app = express();

app.use(express.static('.dist/simple-store-heroku'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/simple-store-heroku/'});
});

app.listen(process.env.PORT || 8080);