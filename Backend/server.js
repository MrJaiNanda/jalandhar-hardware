const exp =  require('express');
const app = exp();
const cors = require('cors');
const port = 3001;
const connectDB = require('./db');
const User = require('./schema');

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
  app.listen("3001", () => {
    console.log("Server started on port 3001");
  });
});