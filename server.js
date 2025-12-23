console.log("Express ishga tushdi");

const express = require("express");
const http = require("http");
const app = express();

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//2: Session code
//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");
//4: Routing code
// app.get('/',function(req,res){
//     res.end("Hello World")
// })
// app.get('/gift',function(req,res){
//     res.end("Siz sovgalar bolimidasiz")
// })

app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({value:req.body.item})
  
});

app.get("/", function (req, res) {
  res.render("harid");
});

const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, function () {
  console.log(`Server ishga tushdi http://localhost:${PORT}`);
});
