const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const category = require('./data/category/category.json');
const news = require('./data/new/new.json');

app.get('/',(req,res) => {
    res.send('hello world from our site .')
});

app.get('/news', (req,res) => {
    res.send(news);
});


app.get('/category/:id', (req,res) => {
    const id = req.params.id;
    if(id === '08'){
        res.send(news)
    }
    else{
        const categoryNews = news.filter( n => n.category_id === id)
        res.send(categoryNews)
    }
});

app.get('/news/:id', (req,res) => {
    const id = req.params.id;
   
    const selected = news.find( n => n._id === id)
    res.send(selected)
});

app.get('/category', (req,res) => {
    res.send(category)
});

app.listen(port , () => {
    console.log('your server is running port -', port);
});