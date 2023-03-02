const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;



// root dir
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var solution = num1 + num2;

  res.send("Solution: " + solution)

})


// bmiCalculator dir
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / (height * height);

  res.send('Your BMI is: ' + bmi)

})

app.listen(port, () => {
  console.log('Server started on port' + port + '...');
})