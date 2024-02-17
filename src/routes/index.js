const express = require('express');
const app = express();
const users = require('./users');
const watchlist = require('./watchlist')
const items = require('./item')


app.use('/users', users);
app.use('/items', items);
app.use('/watchlist', watchlist);

