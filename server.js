const express = require('express');
const articleRouter = require('./routes/articles.js');
const app = express();

app.set('view engine', 'ejs');

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