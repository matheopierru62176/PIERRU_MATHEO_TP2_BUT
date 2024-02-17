const express = require("express");
const app = express();
const port = 3000;
const { connectTodB } = require("./services/db/connection");
const indexRouter = require("./routes/index");
const { createUser } = require("./controllers/users");
const { createItem } = require("./controllers/item");
const { createWatchlist } = require("./controllers/watchlist");
const apiKey = "clé";

app.use(express.json());

app.use((req, res, next) => {
  return next();
});

app.get("/", (req, res) => {
  res.send("Bienvenue");
});

app.post("/users/create", createUser);
app.post("/items/create", createItem);
app.post("/watchlist/create", createWatchlist);
// app.post("/item/create", AddItem);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectTodB();
});