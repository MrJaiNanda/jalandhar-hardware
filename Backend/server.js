const exp =  require('express');
const app = exp();
const cors = require('cors');
const port = 3000;
const connectDB = require('./db');

app.use(exp.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

connectDB().then(() => {
  app.listen("3001", () => {
    console.log("Server started on port 3001");
  });
});