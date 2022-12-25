const express = require('express');
const mongoose = require('mongoose')
const app = express();
const articleRouter = require('./routes/articles.js');


mongoose.connect('mongodb://127.0.0.1:27017',{useNewUrlParser: true})


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

app.use('/article',articleRouter)

app.get("/", (req,res)=>{
    const articles = [{
        title: 'New Article',
        date: new Date(),
        description: 'Test description!'
    }]
    res.render('index', {articles: articles})
});

app.listen(5000, console.log("Server is listening..."));