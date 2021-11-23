const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);

let Users = [
    {user: 'Peter', pwd: '123123'},
    {user: 'Tony', pwd: '456456'},
    {user: 'Kevin', pwd: '789789'}
];

app.get('/', (req,res) => {
    res.send("Home page!");
});

app.get('/users', (req,res) => {
    res.render('./usersPage', {Users: Users});
});

app.get('/users/new', (req,res) => {
    res.render('./newUserPage');
});

app.post('/users', (req,res) => {
    console.log(req.body);
    const newUser = req.body.r;
    Users.push(newUser);
    
    res.redirect('/users');
});

app.get('*', function(req,res){
    res.send('Page is not found!');
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log('The Server has started!!');
});
