const path = require('path')
const express = require('express');
//<<<<<<< HEAD
const session = require('express-session')
//=======
//<<<<<<< HEAD

//=======
//const session = require('express-session')
// >>>>>>> f5f705dfa6334bd630338676d42997e565faf24f
// >>>>>>> 55f06153c381dc3514273f6ffd0ce1a14f1ab3a5
const exphbs = require('express-handlebars');
//const routes = require('./controllers/');

const app = express();
const PORT = process.env.PORT || 3013;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

//const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

// sync sequelize models to the database, then turn on the server
//<<<<<<< HEAD
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
//<<<<<<< HEAD
//=======

//=======
//<<<<<<< HEAD
//>>>>>>> 55f06153c381dc3514273f6ffd0ce1a14f1ab3a5
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}!`);
});
const routes = require('./routes');

//<<<<<<< HEAD

//>>>>>>> f3c4d8c284c924174d0ca224e789a5ccbccb9d68
//=======
//=======
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
//>>>>>>> f5f705dfa6334bd630338676d42997e565faf24f
//>>>>>>> 55f06153c381dc3514273f6ffd0ce1a14f1ab3a5
