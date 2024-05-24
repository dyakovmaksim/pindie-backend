const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const gamesRouter = require('./routes/games');
const apiRouter = require('./routes/apiRouter');
const cookieParser = require("cookie-parser");
const pagesRouter = require('./routes/pages');

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const PORT = 3000;
const app = express();

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})