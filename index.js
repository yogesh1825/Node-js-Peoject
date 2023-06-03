const express = require('express');
const connect = require('./config/connect');
const app = express();

app.use(express.json());
// Ejs 
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set('views' + __dirname + 'views')
app.use(express.urlencoded({ extended: true }))
// app.use(express.static('views'))
connect()



app.get('/', (req, res) => {
    res.render('index');
});
app.get('/shop', (req, res) => {
    res.render('shop');
})
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});
