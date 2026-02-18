const exp =  require('express');
const app = exp();
const cors = require('cors');
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
const User = require('./schema');
const bcrypt = require('bcrypt');

app.use(exp.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(404).send("Hello World is GAy");
});
app.post("/register", async (req, res) => {
  try{
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  }
  catch(err){
    console.log(err)
  }
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});