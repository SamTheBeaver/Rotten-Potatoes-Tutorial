const express = require('express')
const app = express()

/*
app.get('/', (req, res) => {
    res.render('home', {msg:'Handlebars are Cool!'});
})
*/
app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//mock array of products
let reviews = [
    {title: "Great Review", movieTitle: "Batman II"},
    {title: "Awesome Movie", movieTitle: "Titanic"},
    {title: "Fantastic Film", movieTitle: "Up"}
]
// index
app.get('/', (req, res) => {
    res.render('reviews-index', {reviews:reviews});
})
