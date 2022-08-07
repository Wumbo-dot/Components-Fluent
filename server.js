const path = require('path')
const express = require('express');
<<<<<<< HEAD

=======
const session = require('express-session')
>>>>>>> f5f705dfa6334bd630338676d42997e565faf24f
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
<<<<<<< HEAD
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}!`);
});
const routes = require('./routes');

=======
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> f5f705dfa6334bd630338676d42997e565faf24f
