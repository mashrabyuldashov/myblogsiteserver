const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('./routes/routes')

//SERVER PORT
const PORT = process.env.PORT || 5000;

//APP controllers
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/pharmacys', router);
app.use('/*', (_, res) => res.sendStatus(404));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});