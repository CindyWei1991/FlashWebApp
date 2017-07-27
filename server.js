

var express = require("express");
var app     = express();
var path    = require("path");
var fs = require("fs")
var bodyParser = require('body-parser');

//Store all JS and CSS in Scripts folder.
app.listen(process.env.port)

//app.listen(8080)
app.use(bodyParser.json());
app.get('/',function(req,res){
  res.sendFile(__dirname + "/HTMLPage.html");
  //__dirname : It will resolve to your project folder.
});

app.get('/messages', function (req, res) {
    fs.readFile( __dirname + "/" + "public/message.json", 'utf8', function (err, data) {
       res.end( data );
    });
});

app.post('/send/sendMessage', function (req, res) {
	console.log(req.body)
	fs.readFile( __dirname + "/" + "public/message.json", 'utf8', function (err, data) {
		var obj = JSON.parse(data);
		obj["message"].push(req.body);
		jsonStr = JSON.stringify(obj);
       fs.writeFile( __dirname + "/" + "public/message.json", jsonStr, function (err) {
       		res.end();
   		});
    });

   // First read existing users.
   // fs.appendFile( __dirname + "/" + "public/message.json", JSON.stringify(req.body), function (err, data) {
   //     res.end();
   // });
});


app.use(express.static(path.join(__dirname, '/public')));


console.log("Running at Port 3000");

module.exports = app;