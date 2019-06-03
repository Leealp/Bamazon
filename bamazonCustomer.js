var mysql = require("mysql");
// var table = require('cli-table');
var table = require("console.table");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "bamazon"

});

connection.connect(function(err,response){

  if(err) throw err;
    console.log("connected");

});


function toConsoleTable() {
  connection.connect(function(err) {
    if (err) throw err

    connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err
    else console.table(res , "\n");
         
    productId();
    });
  });
}
toConsoleTable();






























































