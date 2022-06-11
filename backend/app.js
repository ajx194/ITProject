const express = require('express');
const bodyParser = require("body-parser");

const user = require('./models/register');
var mysql = require('./db_config');
var usersRouter = require('./routes/users');

const app = express();

app.use((req,res,next) => {
  console.log('First middleware');
  next();
})

app.use('/user', usersRouter);

app.use((req,res,next) => {
  res.send('Hello from express!');
  next();
})
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "angular", "index.html"));
// });
// app.get("/", function(req, res){
//   res.render("index.html");
// });

app.post("/userentry", async (req, res) => {
  const email = req.body.email;
  const resp = await user.findOne({ email });
  var emailregister = false;
  console.log("In server");
  if (resp) {
    console.log("oh no");
    res.status(200).json({
      emailregister: true
    });
  } else {
    new  user({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      number: req.body.number,
      password: req.body.pass

    }).save(function(err, data) {
      if (err) {
        console.log("Sign up error" + err);
        res.status(500).json({
          isSucceed: false
        });
      } else {
        console.log(data);
        console.log("Sign up data successfully");
        res.status(200).json({
         isSucceed: true
        });
      }
    });
  }
});

module.exports = app;
