const express = require('express');
const app = express();

const expressEjsLayout = require('express-ejs-layouts');

const Port = 8080

app.use(express.json());

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({extended : false}));

//routes
app.use('/api/Auth', require('./routes/Auth'));
//app.use('/users',require('./routes/users'));

app.listen(Port, () => {
    console.log(`server started on port:${Port}`)
}) ;