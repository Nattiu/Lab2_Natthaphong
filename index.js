const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//MiddleLeware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let todos = [];

//Routes
app.get('/', (req, res) => {
    res.render('index', {todos});
});

app.post('/add', (req, res) => {
    const newTodo = req.body.todo;
    if (newTodo) todos.push(newTodo);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect('/');
});

//Start server
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
});
