const express = require("express")
var app = express()

//required to change default views directory
const path = require('path');

app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});

//tell app to use EJS templating engine
//by default html views are placed in the /views folder
app.set('view engine', 'ejs');
//change default views directory (its actually setting it to the same path but absolute path)
//good practice to do in case running server from outside project base dir
//__dirname is the current directory where index.js is located
app.set('views', path.join(__dirname, 'views'));

//express middleware that runs after request but before response, 
//serves the project_root/public directory to make files inside available
//link css files inside of template
//path.join and __dirname sets the absolute path of the public directory in case node 
//  is run outside of project directory
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req, res) => {
    //res.send('you hit homepage');
    // render method sends views inside the views directory
    res.render('home', {name: 'Prairie Creek Settlement'});
})

app.get('/contact', (req, res) => {
    //res.send('you hit homepage');
    // render method sends views inside the views directory
    res.render('contact', {name: 'Contact PCS'});
})
