const express = require('express');
const app = express();


app.use(express.static(__dirname + "/static"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});



app.listen(3000, () => {
    console.log("Listening on PORT3000")
})