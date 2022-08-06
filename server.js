const express = require('express');

const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3013;

app.engine('handlebars', hbs.engine);
app.search('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(_dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}!`);
});
const routes = require('./routes');

